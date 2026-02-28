<template>
  <form
    @submit.prevent="updateProductVisibility"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Видимость</div>

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
const { type } = defineProps(["type"]);

const toast = useToast();
const cakesStore = useCakesStore();
const pastryStore = usePastryStore();

const isFormOpen = ref(false);
const isFormEdit = ref(false);
const isLoading = ref(false);
const visibilityField = ref(
  type === "cakes"
    ? cakesStore.cake[0].visibility
    : pastryStore.pastry[0].visibility,
);

const updateProductVisibility = async () => {
  try {
    isLoading.value = true;

    const result =
      type === "cakes"
        ? await cakesStore.updateProductVisibility(visibilityField.value)
        : await pastryStore.updateProductVisibility(visibilityField.value);

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
