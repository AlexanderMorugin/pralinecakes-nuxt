<template>
  <form
    @submit.prevent="updateProductTitle"
    class="admin-form-flex admin-form-flex_open"
  >
    <div class="admin-form-title">Название</div>

    <FormButtonAdmin
      v-if="!isFormEdit"
      name="edit"
      @handleClick="isFormEdit = true"
    />

    <FormButtonAdmin
      v-if="isFormEdit"
      name="undo"
      @handleClick="isFormEdit = false"
    />

    <div class="admin-form-field-radio">
      <div class="admin-form-submited-text">
        <span class="admin-form-submited-text-noAccent">ID: </span
        >{{
          type === "cakes" ? cakesStore.cake[0].id : pastryStore.pastry[0].id
        }}
      </div>
      <div class="admin-form-submited-text">
        <span class="admin-form-submited-text-noAccent">Type: </span
        >{{
          type === "cakes"
            ? cakesStore.cake[0].type
            : pastryStore.pastry[0].type
        }}
      </div>
    </div>

    <div class="admin-form-submited-text">
      <span class="admin-form-submited-text-noAccent">{{
        `Адрес: ~/${type}/`
      }}</span
      >{{
        type === "cakes" ? cakesStore.cake[0].slug : pastryStore.pastry[0].slug
      }}
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
    <FormSubmitAdmin
      v-if="isFormEdit"
      :isLoading="isLoading"
      :isActive="titleField && descriptionShortField"
      place="product"
    />

    <div class="admin-mark">* обязательно для заполнения</div>
  </form>
</template>

<script setup>
const { type } = defineProps(["type"]);

const toast = useToast();
const cakesStore = useCakesStore();
const pastryStore = usePastryStore();

const isFormEdit = ref(false);
const isLoading = ref(false);
const titleField = ref(
  type === "cakes" ? cakesStore.cake[0].title : pastryStore.pastry[0].title,
);
const descriptionShortField = ref(
  type === "cakes"
    ? cakesStore.cake[0].description_short
    : pastryStore.pastry[0].description_short,
);

const updateProductTitle = async () => {
  try {
    isLoading.value = true;

    const formData = {
      title: titleField.value.trim(),
      description_short: descriptionShortField.value.trim(),
    };

    const result =
      type === "cakes"
        ? await cakesStore.updateCakeTitle(formData)
        : await pastryStore.updatePastryTitle(formData);

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
