<template>
  <form
    @submit.prevent="updateAdminSettings"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Настройки</div>

    <FormButtonAdmin
      v-if="!isFormEdit && isFormOpen"
      name="edit"
      @handleClick="isFormEdit = true"
    />
    <FormButtonAdmin
      v-if="isFormEdit && isFormOpen"
      name="undo"
      @handleClick="isFormEdit = false"
    />
    <FormButtonRoll
      :isFormOpen="isFormOpen"
      @handleClick="isFormOpen = !isFormOpen"
    />

    <div class="admin-form-settings">
      <FormInputAdmin
        label="Мин сумма заказа (₽)"
        type="number"
        name="minOrderSumField"
        placeholder="Только цифры"
        v-model:value="minOrderSumField"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Стоимость доставки (₽)"
        type="number"
        name="deliveryCostField"
        placeholder="Только цифры"
        v-model:value="deliveryCostField"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Скидка за самовывоз (%)"
        type="number"
        name="samovyvozBonusField"
        placeholder="Только процент"
        v-model:value="samovyvozBonusField"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Бонус за товары в корзине (%)"
        type="number"
        name="cartProductsBonusField"
        placeholder="Только процент"
        v-model:value="cartProductsBonusField"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Бонус пользователя доступный к списанию (%)"
        type="number"
        name="payUserBonus"
        placeholder="Только процент"
        v-model:value="payUserBonus"
        :isFormEdit="isFormEdit"
      />
    </div>

    <FormSubmitAdmin
      v-if="isFormEdit"
      :isLoading="isLoading"
      isActive="true"
      place="product"
    />
  </form>
</template>

<script setup>
const toast = useToast();
const adminSettingStore = useAdminSettingStore();

const isFormOpen = ref(true);
const isFormEdit = ref(false);
const isLoading = ref(false);
const minOrderSumField = ref(
  adminSettingStore.adminSettings.length
    ? adminSettingStore.adminSettings[0].min_order_sum
    : null,
);
const deliveryCostField = ref(
  adminSettingStore.adminSettings.length
    ? adminSettingStore.adminSettings[0].delivery_sum
    : null,
);
const samovyvozBonusField = ref(
  adminSettingStore.adminSettings.length
    ? adminSettingStore.adminSettings[0].samovyvoz_bonus
    : null,
);

const cartProductsBonusField = ref(
  adminSettingStore.adminSettings.length
    ? adminSettingStore.adminSettings[0].cart_product_bonus
    : null,
);

const payUserBonus = ref(
  adminSettingStore.adminSettings.length
    ? adminSettingStore.adminSettings[0].pay_user_bonus
    : null,
);

const updateAdminSettings = async () => {
  try {
    isLoading.value = true;

    const formData = {
      min_order_sum: minOrderSumField.value,
      delivery_sum: deliveryCostField.value,
      samovyvoz_bonus: samovyvozBonusField.value,
      cart_product_bonus: cartProductsBonusField.value,
      pay_user_bonus: payUserBonus.value,
    };

    const result = await adminSettingStore.updateAdminSettings(formData);

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Изменения выполнить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Изменения сделаны.",
      });

      isFormEdit.value = false;
    }
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.admin-form-settings {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
