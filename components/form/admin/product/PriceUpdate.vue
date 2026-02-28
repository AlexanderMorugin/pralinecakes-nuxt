<template>
  <form
    @submit.prevent="updateProductPrice"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Цена</div>

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

    <div class="admin-form-weight">
      <FormInputAdmin
        label="Цена (₽)"
        type="number"
        name="priceField"
        placeholder="Цифры"
        v-model:value="priceField"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Скидка (%)"
        type="number"
        name="discountField"
        placeholder="Цифры"
        v-model:value="discountField"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Цена со скидкой (₽)"
        name="discountPriceField"
        v-model:value="discountPriceField"
        :isFormEdit="false"
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
const cakesStore = useCakesStore();

const isFormOpen = ref(false);
const isFormEdit = ref(false);
const isLoading = ref(false);
const priceField = ref(cakesStore.cake[0].price);
const discountField = ref(cakesStore.cake[0].discount);
const discountPriceField = computed(() =>
  discountField.value
    ? Math.round(
        priceField.value - (priceField.value * discountField.value) / 100,
      )
    : priceField.value,
);

const updateProductPrice = async () => {
  try {
    isLoading.value = true;

    const formData = {
      price: priceField.value ? priceField.value : 0,
      discount: discountField.value ? discountField.value : 0,
      discount_price: discountPriceField.value,
    };

    const result = await cakesStore.updateProductPrice(formData);

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

<!-- <style lang="scss" scoped>
.formAddingProduct {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style> -->
