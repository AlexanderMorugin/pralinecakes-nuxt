<template>
  <form
    @submit.prevent="updateProductBadge"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Значок</div>

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
      >Переключатель значка товара на сайте</span
    >

    <div v-if="isFormEdit" class="admin-form-visibility">
      <div class="admin-form-field-radio">
        <label class="admin-form-label">Новинка</label>
        <input
          type="radio"
          name="badge"
          :checked="badgeField === 'Новинка'"
          class="admin-form-button-radio"
          @click="badgeField = 'Новинка'"
        />
      </div>
      <div class="admin-form-field-radio">
        <label class="admin-form-label">Хит</label>
        <input
          type="radio"
          name="badge"
          :checked="badgeField === 'Хит'"
          class="admin-form-button-radio"
          @click="badgeField = 'Хит'"
        />
      </div>
    </div>
    <div v-if="isFormEdit" class="admin-form-visibility">
      <div class="admin-form-field-radio">
        <label class="admin-form-label">Выкл</label>
        <input
          type="radio"
          name="badge"
          :checked="!badgeField"
          class="admin-form-button-radio"
          @click="badgeField = null"
        />
      </div>
    </div>

    <div v-else class="admin-form-badge-submited">
      <span class="admin-form-input-text-submited"
        >Сейчас {{ badgeField ? `"${badgeField}"` : "выключен" }}</span
      >
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
const badgeField = ref(cakesStore.cake[0].badge);

const updateProductBadge = async () => {
  try {
    isLoading.value = true;

    const result = await cakesStore.updateProductBadge(badgeField.value);

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
