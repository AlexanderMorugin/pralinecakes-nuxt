<template>
  <div class="productCardAdminManage page-padding-x">
    <FormAdminProductTitleUpdate :type="type" />
    <FormAdminProductDescriptionUpdate :type="type" />
    <FormAdminProductImageUpdate :type="type" />
    <FormAdminProductMetaUpdate :type="type" />
    <FormAdminProductSizesUpdate :type="type" />
    <FormAdminProductPriceUpdate :type="type" />
    <FormAdminProductIgredientsUpdate :type="type" />
    <FormAdminProductNutritionalUpdate :type="type" />
    <FormAdminProductRatingUpdate :type="type" />
    <FormAdminProductBadgeUpdate :type="type" />
    <FormAdminProductVisibilityUpdate :type="type" />

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
const { type } = defineProps(["type"]);

const toast = useToast();
const cakesStore = useCakesStore();
const pastryStore = usePastryStore();

const isLoading = ref(false);
const isConfirmModalOpen = ref(false);

const deleteCake = async () => {
  try {
    isLoading.value = true;

    const result =
      type === "cakes"
        ? await cakesStore.deleteCake()
        : await pastryStore.deletePastry();

    if (result.status.value === "error") {
      toast.error({
        title: "Ошибка!",
        message: "Товар удалить не удалось.",
      });
    }

    if (result.status.value === "success") {
      toast.success({
        title: "Успешно!",
        message: "Товар удален.",
      });
    }
    return navigateTo(`/admin/${type}`);
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
