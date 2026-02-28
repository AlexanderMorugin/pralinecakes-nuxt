<template>
  <form
    @submit.prevent="updateProductSizes"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Размеры</div>

    <button
      type="button"
      v-if="!isFormEdit && isFormOpen"
      class="admin-form-top-button admin-form-top-button_right"
    >
      <IconEdit @click="isFormEdit = true" class="admin-form-button-edit" />
    </button>

    <button
      type="button"
      v-if="isFormEdit && isFormOpen"
      class="admin-form-top-button admin-form-top-button_left"
    >
      <IconUndo @click="isFormEdit = false" class="admin-form-button-edit" />
    </button>

    <button
      type="button"
      class="admin-form-bottom-button"
      :class="isFormOpen ? 'admin-form-bottom-button_open' : ''"
    >
      <IconArrowIos
        @click="isFormOpen = !isFormOpen"
        class="admin-form-button-edit wrap"
      />
    </button>

    <div class="admin-form-weight">
      <FormInputAdmin
        label="Вес (гр)"
        type="number"
        name="weightField"
        placeholder="Цифры"
        v-model:value="weightField"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Шир. (см)"
        type="number"
        name="widthField"
        placeholder="Цифры"
        v-model:value="widthField"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Выс. (см)"
        type="number"
        name="heightField"
        placeholder="Цифры"
        v-model:value="heightField"
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
const cakesStore = useCakesStore();

const isFormOpen = ref(false);
const isFormEdit = ref(false);
const isLoading = ref(false);
const weightField = ref(cakesStore.cake[0].weight);
const widthField = ref(cakesStore.cake[0].width);
const heightField = ref(cakesStore.cake[0].height);

const updateProductSizes = async () => {
  try {
    isLoading.value = true;

    const formData = {
      weight: weightField.value ? weightField.value : null,
      width: widthField.value ? widthField.value : null,
      height: heightField.value ? heightField.value : null,
    };

    const result = await cakesStore.updateProductSizes(formData);

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
