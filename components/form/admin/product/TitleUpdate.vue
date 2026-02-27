<template>
  <form
    @submit.prevent="updateProductTitle"
    class="admin-form-flex admin-form-flex_open"
  >
    <div class="admin-form-title">Название</div>

    <button
      type="button"
      v-if="!isFormEdit"
      class="admin-form-top-button admin-form-top-button_right"
    >
      <IconEdit @click="isFormEdit = true" class="admin-form-button-edit" />
    </button>

    <button
      type="button"
      v-if="isFormEdit"
      class="admin-form-top-button admin-form-top-button_left"
    >
      <IconUndo @click="isFormEdit = false" class="admin-form-button-edit" />
    </button>

    <div class="admin-form-field-radio">
      <div class="admin-form-submited-text">
        <span class="admin-form-submited-text-noAccent">ID: </span
        >{{ cakesStore.cake[0].id }}
      </div>
      <div class="admin-form-submited-text">
        <span class="admin-form-submited-text-noAccent">Type: </span
        >{{ cakesStore.cake[0].type }}
      </div>
    </div>

    <div class="admin-form-submited-text">
      <span class="admin-form-submited-text-noAccent">Адрес: ~/cakes/</span
      >{{ cakesStore.cake[0].slug }}
    </div>

    <FormInputAdmin
      label="Наименование * "
      type="text"
      name="titleField"
      placeholder="Название продукта"
      v-model:value="titleField"
      @clearInput="titleField = null"
      :isFormEdit="isFormEdit"
    />
    <FormTextareaAdmin
      label="Краткое описание * "
      type="text"
      name="descriptionShortField"
      placeholder="1 или 2 коротких предложения"
      v-model:value="descriptionShortField"
      @clearInput="descriptionShortField = null"
      :isFormEdit="isFormEdit"
    />

    <FormAdminSubmit
      v-if="isFormEdit"
      :isLoading="isLoading"
      :isActive="titleField && descriptionShortField"
      place="product"
    />

    <div class="admin-mark">* обязательно для заполнения</div>
  </form>
</template>

<script setup>
const toast = useToast();
const cakesStore = useCakesStore();

const isFormEdit = ref(false);
const isLoading = ref(false);
const titleField = ref(cakesStore.cake[0].title);
const descriptionShortField = ref(cakesStore.cake[0].description_short);

const updateProductTitle = async () => {
  try {
    isLoading.value = true;

    const formData = {
      title: titleField.value.trim(),
      description_short: descriptionShortField.value.trim(),
    };

    const result = await cakesStore.updateCakeTitle(formData);

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
