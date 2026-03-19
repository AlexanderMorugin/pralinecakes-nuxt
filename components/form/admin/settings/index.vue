<template>
  <form
    @submit.prevent="updateSettings"
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
        label="Мин сумма доставки (₽)"
        type="number"
        name="minDeliverySumField"
        placeholder="Только цифры"
        v-model:value="minDeliverySumField"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Бонус за самовывоз (%)"
        type="number"
        name="samovyvozBonusField"
        placeholder="Только процент"
        v-model:value="samovyvozBonusField"
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
const settingStore = useSettingStore();
await settingStore.loadSettings();

console.log(settingStore.settings.length ? settingStore.settings : "null");

const isFormOpen = ref(true);
const isFormEdit = ref(false);
const isLoading = ref(false);
const minOrderSumField = ref(
  settingStore.settings.length ? settingStore.settings[0].min_order_sum : null,
);
const minDeliverySumField = ref(
  settingStore.settings.length ? settingStore.settings[0].delivery_sum : null,
);
const samovyvozBonusField = ref(
  settingStore.settings.length
    ? settingStore.settings[0].samovyvoz_bonus
    : null,
);

const updateSettings = async () => {
  try {
    isLoading.value = true;

    const formData = {
      // id: 1,
      min_order_sum: minOrderSumField.value,
      delivery_sum: minDeliverySumField.value,
      samovyvoz_bonus: samovyvozBonusField.value,
    };

    // if (!settingStore.settings.length) {
    //   const result = await settingStore.createAdminSettings(formData);

    //   if (result.status.value === "error") {
    //     toast.error({
    //       title: "Ошибка!",
    //       message: "Настройки сделать не удалось.",
    //     });
    //   }

    //   if (result.status.value === "success") {
    //     toast.success({
    //       title: "Успешно!",
    //       message: "Настройки сделаны.",
    //     });

    //     isFormEdit.value = false;
    //   }
    // } else {

    // для первого создания сеттингов
    // const result = await settingStore.createAdminSettings(formData);

    const result = await settingStore.updateAdminSettings(formData);

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
    // }
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
