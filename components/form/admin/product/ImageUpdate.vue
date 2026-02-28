<template>
  <form
    @submit.prevent="updateProductImages"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Картинки</div>

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

    <div v-if="isFormOpen" class="admin-form-images">
      <FormTextareaAdmin
        label="Малая 800-533.webp (20КБ)"
        type="text"
        name="image1SmallField"
        placeholder="Ссылка на изображение 1"
        v-model:value="image1SmallField"
        @clearInput="image1SmallField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Большая 2800-1866.webp (100КБ)"
        type="text"
        name="image1BigField"
        placeholder="Ссылка на изображение 1"
        v-model:value="image1BigField"
        @clearInput="image1BigField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Малая 800-533.webp (20КБ)"
        type="text"
        name="image2SmallField"
        placeholder="Ссылка на изображение 2"
        v-model:value="image2SmallField"
        @clearInput="image2SmallField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Большая 2800-1866.webp (100КБ)"
        type="text"
        name="image2BigField"
        placeholder="Ссылка на изображение 2"
        v-model:value="image2BigField"
        @clearInput="image2BigField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Малая 800-533.webp (20КБ)"
        type="text"
        name="image3SmallField"
        placeholder="Ссылка на изображение 3"
        v-model:value="image3SmallField"
        @clearInput="image3SmallField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Большая 2800-1866.webp (100КБ)"
        type="text"
        name="image3BigField"
        placeholder="Ссылка на изображение 3"
        v-model:value="image3BigField"
        @clearInput="image3BigField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Малая 800-533.webp (20КБ)"
        type="text"
        name="image4SmallField"
        placeholder="Ссылка на изображение 4"
        v-model:value="image4SmallField"
        @clearInput="image4SmallField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Большая 2800-1866.webp (100КБ)"
        type="text"
        name="image4BigField"
        placeholder="Ссылка на изображение 4"
        v-model:value="image4BigField"
        @clearInput="image4BigField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Малая 800-533.webp (20КБ)"
        type="text"
        name="image5SmallField"
        placeholder="Ссылка на изображение 5"
        v-model:value="image5SmallField"
        @clearInput="image5SmallField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Большая 2800-1866.webp (100КБ)"
        type="text"
        name="image5BigField"
        placeholder="Ссылка на изображение 5"
        v-model:value="image5BigField"
        @clearInput="image5BigField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Малая 800-533.webp (20КБ)"
        type="text"
        name="image6SmallField"
        placeholder="Ссылка на изображение 6"
        v-model:value="image6SmallField"
        @clearInput="image6SmallField = null"
        :isFormEdit="isFormEdit"
      />
      <FormTextareaAdmin
        label="Большая 2800-1866.webp (100КБ)"
        type="text"
        name="image6BigField"
        placeholder="Ссылка на изображение 6"
        v-model:value="image6BigField"
        @clearInput="image6BigField = null"
        :isFormEdit="isFormEdit"
      />
    </div>

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

const image1SmallField = ref(cakesStore.cake[0].image_1_small);
const image1BigField = ref(cakesStore.cake[0].image_1_big);

const image2SmallField = ref(cakesStore.cake[0].image_2_small);
const image2BigField = ref(cakesStore.cake[0].image_2_big);

const image3SmallField = ref(cakesStore.cake[0].image_3_small);
const image3BigField = ref(cakesStore.cake[0].image_3_big);

const image4SmallField = ref(cakesStore.cake[0].image_4_small);
const image4BigField = ref(cakesStore.cake[0].image_4_big);

const image5SmallField = ref(cakesStore.cake[0].image_5_small);
const image5BigField = ref(cakesStore.cake[0].image_5_big);

const image6SmallField = ref(cakesStore.cake[0].image_6_small);
const image6BigField = ref(cakesStore.cake[0].image_6_big);

const updateProductImages = async () => {
  try {
    isLoading.value = true;

    const formData = {
      image_1_small: image1SmallField.value
        ? image1SmallField.value.trim()
        : null,
      image_1_big: image1BigField.value ? image1BigField.value.trim() : null,

      image_2_small: image2SmallField.value
        ? image2SmallField.value.trim()
        : null,
      image_2_big: image2BigField.value ? image2BigField.value.trim() : null,

      image_3_small: image3SmallField.value
        ? image3SmallField.value.trim()
        : null,
      image_3_big: image3BigField.value ? image3BigField.value.trim() : null,

      image_4_small: image4SmallField.value
        ? image4SmallField.value.trim()
        : null,
      image_4_big: image4BigField.value ? image4BigField.value.trim() : null,

      image_5_small: image5SmallField.value
        ? image5SmallField.value.trim()
        : null,
      image_5_big: image5BigField.value ? image5BigField.value.trim() : null,

      image_6_small: image6SmallField.value
        ? image6SmallField.value.trim()
        : null,
      image_6_big: image6BigField.value ? image6BigField.value.trim() : null,
    };

    const result = await cakesStore.updateProductImages(formData);

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
