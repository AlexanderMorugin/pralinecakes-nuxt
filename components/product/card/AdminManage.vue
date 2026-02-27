<template>
  <div class="productCardAdminManage page-padding-x">
    {{ product }}
    <!-- <FormProductTitleUpdate />
    <FormProductDescriptionUpdate />
    <FormProductImageUpdate />
    <FormProductMetaUpdate />
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
      @handleClick="deleteCake"
    />
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);

const toast = useToast();
const cakesStore = useCakesStore();

const isLoading = ref(false);

const deleteCake = async () => {
  try {
    isLoading.value = true;

    const res = await cakesStore.deleteCake();

    if (!res) {
      toast.error({
        title: "Ошибка!",
        message: "Торт удалить не удалось.",
      });
      return;
    }

    if (res) {
      toast.success({
        title: "Успешно!",
        message: "Торт удален.",
      });

      return navigateTo("/admin/cakes");
    }
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
