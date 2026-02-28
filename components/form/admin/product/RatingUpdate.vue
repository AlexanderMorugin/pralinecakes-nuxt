<template>
  <form
    @submit.prevent="updateProductRating"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Рейтинг</div>

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

    <FormRatingAdmin
      label="Установить рейтинг"
      v-model:value="ratingField"
      :maxStars="5"
      @updateRating="(newRating) => (ratingField = newRating)"
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
const ratingField = ref(cakesStore.cake[0].rating);

const updateProductRating = async () => {
  try {
    isLoading.value = true;

    const result = await cakesStore.updateProductRating(ratingField.value);

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
