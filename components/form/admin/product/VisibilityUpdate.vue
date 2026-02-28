<template>
  <form
    @submit.prevent="updateProductVisibility"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Видимость</div>

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

    <span class="admin-form-submited-text"
      >Переключатель видимости товара на сайте</span
    >

    <div v-if="isFormEdit" class="admin-form-visibility">
      <div class="admin-form-field-radio">
        <label class="admin-form-label">Вкл</label>
        <input
          type="radio"
          name="visibility"
          :checked="visibilityField"
          class="admin-form-button-radio"
          @click="visibilityField = true"
        />
      </div>
      <div class="admin-form-field-radio">
        <label class="admin-form-label">Выкл</label>
        <input
          type="radio"
          name="visibility"
          :checked="!visibilityField"
          class="admin-form-button-radio"
          @click="visibilityField = false"
        />
      </div>
    </div>

    <div v-else class="admin-form-input-submited">
      <span class="admin-form-input-text-submited"
        >Сейчас {{ visibilityField ? "виден" : "не виден" }}</span
      >
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
const visibilityField = ref(cakesStore.cake[0].visibility);

const updateProductVisibility = async () => {
  try {
    isLoading.value = true;

    const result = await cakesStore.updateProductVisibility(
      visibilityField.value,
    );

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
