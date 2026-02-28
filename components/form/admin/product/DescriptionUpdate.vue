<template>
  <form
    @submit.prevent="updateProductDescription"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Описание</div>

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

    <FormTextareaAdmin
      label="Абзац 1"
      type="text"
      name="descriptionOneField"
      placeholder="Описание продукта"
      v-model:value="descriptionOneField"
      @clearInput="descriptionOneField = null"
      :isFormEdit="isFormEdit"
    />
    <FormTextareaAdmin
      label="Абзац 2"
      type="text"
      name="descriptionTwoField"
      placeholder="Описание продукта"
      v-model:value="descriptionTwoField"
      @clearInput="descriptionTwoField = null"
      :isFormEdit="isFormEdit"
    />
    <FormTextareaAdmin
      label="Абзац 3"
      type="text"
      name="descriptionThreeField"
      placeholder="Описание продукта"
      v-model:value="descriptionThreeField"
      @clearInput="descriptionThreeField = null"
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
const descriptionOneField = ref(cakesStore.cake[0].description_one);
const descriptionTwoField = ref(cakesStore.cake[0].description_two);
const descriptionThreeField = ref(cakesStore.cake[0].description_three);

const updateProductDescription = async () => {
  try {
    isLoading.value = true;

    const formData = {
      description_one: descriptionOneField.value
        ? descriptionOneField.value.trim()
        : null,
      description_two: descriptionTwoField.value
        ? descriptionTwoField.value.trim()
        : null,
      description_three: descriptionThreeField.value
        ? descriptionThreeField.value.trim()
        : null,
    };

    const result = await cakesStore.updateCakeDescription(formData);

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
