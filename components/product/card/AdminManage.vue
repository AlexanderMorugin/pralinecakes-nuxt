<template>
  <div class="productCardAdminManage page-padding-x">
    <FormAdminProductTitleUpdate />
    <FormAdminProductDescriptionUpdate />
    <FormAdminProductImageUpdate />
    <!-- <FormProductMetaUpdate />
    <FormProductSizesUpdate />
    <FormProductPriceUpdate />
    <FormProductIgredientsUpdate />
    <FormProductNutritionalUpdate />
    <FormProductRatingUpdate />
    <FormProductBadgeUpdate />
    <FormProductVisibilityUpdate /> -->

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
const { product } = defineProps(["product"]);

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

  // &__buttons {
  //   display: grid;
  //   grid-template-columns: repeat(4, 1fr);
  //   gap: 20px;
  //   border: 1px solid red;
  // }
}
</style>
