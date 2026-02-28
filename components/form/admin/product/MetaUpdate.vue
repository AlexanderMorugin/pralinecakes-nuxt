<template>
  <form
    @submit.prevent="updateProductMeta"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Мета данные</div>

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

    <!-- <div class="form-submited-text">
      <span class="form-submited-text-noAccent">Canonical URL: </span
      >{{ cakesStore.cake[0].meta_сanonical_url }}
    </div> -->

    <FormInputAdmin
      label="Meta Title"
      type="text"
      name="metaTitleField"
      placeholder="Meta Title продукта"
      v-model:value="metaTitleField"
      @clearInput="metaTitleField = null"
      :isFormEdit="isFormEdit"
    />
    <FormTextareaAdmin
      label="Meta Description"
      type="text"
      name="metaDescriptionField"
      placeholder="Meta Description продукта"
      v-model:value="metaDescriptionField"
      @clearInput="metaDescriptionField = null"
      :isFormEdit="isFormEdit"
    />

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
const metaTitleField = ref(cakesStore.cake[0].meta_title);
const metaDescriptionField = ref(cakesStore.cake[0].meta_description);

const updateProductMeta = async () => {
  try {
    isLoading.value = true;

    const formData = {
      meta_title: metaTitleField.value ? metaTitleField.value.trim() : null,
      meta_description: metaDescriptionField.value
        ? metaDescriptionField.value.trim()
        : null,
    };

    const result = await cakesStore.updateProductMeta(formData);

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
