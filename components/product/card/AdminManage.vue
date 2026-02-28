<template>
  <div class="productCardAdminManage page-padding-x">
    <FormAdminProductTitleUpdate :type="type" />
    <FormAdminProductDescriptionUpdate />
    <FormAdminProductImageUpdate />
    <FormAdminProductMetaUpdate />
    <FormAdminProductSizesUpdate />
    <FormAdminProductPriceUpdate />
    <FormAdminProductIgredientsUpdate />
    <FormAdminProductNutritionalUpdate />
    <FormAdminProductRatingUpdate />
    <FormAdminProductBadgeUpdate />
    <FormAdminProductVisibilityUpdate />

    <ButtonManager
      name="delete"
      :isLoading="isLoading"
      @handleClick="isConfirmModalOpen = true"
    />
  </div>

  <!-- Модалка подтверждения -->
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalConfirm
        v-if="isConfirmModalOpen"
        :isModalOpen="isConfirmModalOpen"
        title="Подтвердить удаление?"
        :isLoading="isLoading"
        @yesClick="deleteCake"
        @noClick="isConfirmModalOpen = false"
      />
    </Transition>
  </Teleport>
</template>

<script setup>
const { product, type } = defineProps(["product", "type"]);

const toast = useToast();
const cakesStore = useCakesStore();

const isLoading = ref(false);
const isConfirmModalOpen = ref(false);

const deleteCake = async () => {
  try {
    isLoading.value = true;

    const result = await cakesStore.deleteCake();

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Торт удалить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Торт удален.",
      });
    }
    return navigateTo("/admin/cakes");
  } catch (error) {
    console.log(error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.productCardAdminManage {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 40px;
}
</style>
