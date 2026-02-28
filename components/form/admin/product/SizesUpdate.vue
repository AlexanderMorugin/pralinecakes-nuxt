<template>
  <form
    @submit.prevent="updateProductSizes"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Размеры</div>

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
const { type } = defineProps(["type"]);

const toast = useToast();
const cakesStore = useCakesStore();
const pastryStore = usePastryStore();

const isFormOpen = ref(false);
const isFormEdit = ref(false);
const isLoading = ref(false);
const weightField = ref(
  type === "cakes" ? cakesStore.cake[0].weight : pastryStore.pastry[0].weight,
);
const widthField = ref(
  type === "cakes" ? cakesStore.cake[0].width : pastryStore.pastry[0].width,
);
const heightField = ref(
  type === "cakes" ? cakesStore.cake[0].height : pastryStore.pastry[0].height,
);

const updateProductSizes = async () => {
  try {
    isLoading.value = true;

    const formData = {
      weight: weightField.value ? weightField.value : null,
      width: widthField.value ? widthField.value : null,
      height: heightField.value ? heightField.value : null,
    };

    const result =
      type === "cakes"
        ? await cakesStore.updateProductSizes(formData)
        : await pastryStore.updateProductSizes(formData);

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
