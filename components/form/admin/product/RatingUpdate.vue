<template>
  <form
    @submit.prevent="updateProductRating"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Рейтинг</div>

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

    <FormRatingAdmin
      label="Установить рейтинг"
      v-model:value="ratingField"
      :maxStars="5"
      @updateRating="(newRating) => (ratingField = newRating)"
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
const { type } = defineProps(["type"]);

const toast = useToast();
const cakesStore = useCakesStore();
const pastryStore = usePastryStore();

const isFormOpen = ref(false);
const isFormEdit = ref(false);
const isLoading = ref(false);
const ratingField = ref(
  type === "cakes" ? cakesStore.cake[0].rating : pastryStore.pastry[0].rating,
);

const updateProductRating = async () => {
  try {
    isLoading.value = true;

    const result =
      type === "cakes"
        ? await cakesStore.updateProductRating(ratingField.value)
        : await pastryStore.updateProductRating(ratingField.value);

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
