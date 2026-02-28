<template>
  <form
    @submit.prevent="updateProductIngredients"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Ингредиенты</div>

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

    <FormTextareaAdmin
      label="Ингредиенты"
      type="text"
      name="ingredientsField"
      placeholder="Ингредиенты"
      v-model:value="ingredientsField"
      @clearInput="ingredientsField = null"
      :isFormEdit="isFormEdit"
    />

    <FormAdminSubmit
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
const ingredientsField = ref(cakesStore.cake[0].ingredients);

const updateProductIngredients = async () => {
  try {
    isLoading.value = true;

    const formData = {
      ingredients: ingredientsField.value
        ? ingredientsField.value.trim()
        : null,
    };

    const result = await cakesStore.updateProductIngredients(formData);

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
