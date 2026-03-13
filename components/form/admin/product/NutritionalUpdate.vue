<template>
  <form
    @submit.prevent="updateProductNutritional"
    class="admin-form-flex"
    :class="isFormOpen ? 'admin-form-flex_open' : ''"
  >
    <div class="admin-form-title">Ценность</div>

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

    <div class="admin-form-nutritional">
      <FormInputAdmin
        label="Калории"
        type="text"
        name="caloriesField"
        placeholder="Цифры"
        v-model:value="caloriesField"
        @clearInput="caloriesField = null"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Белки"
        type="text"
        name="proteinField"
        placeholder="Цифры"
        v-model:value="proteinField"
        @clearInput="proteinField = null"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Жиры"
        type="text"
        name="fatField"
        placeholder="Цифры"
        v-model:value="fatField"
        @clearInput="fatField = null"
        :isFormEdit="isFormEdit"
      />
      <FormInputAdmin
        label="Углеводы"
        type="text"
        name="carbohydratesField"
        placeholder="Цифры"
        v-model:value="carbohydratesField"
        @clearInput="carbohydratesField = null"
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
const adminCakeStore = useAdminCakeStore();
const adminPastryStore = useAdminPastryStore();

const isFormOpen = ref(false);
const isFormEdit = ref(false);
const isLoading = ref(false);
const caloriesField = ref(
  type === "cakes"
    ? adminCakeStore.adminCake[0].calories
    : adminPastryStore.adminPastry[0].calories,
);
const proteinField = ref(
  type === "cakes"
    ? adminCakeStore.adminCake[0].protein
    : adminPastryStore.adminPastry[0].protein,
);
const fatField = ref(
  type === "cakes"
    ? adminCakeStore.adminCake[0].fat
    : adminPastryStore.adminPastry[0].fat,
);
const carbohydratesField = ref(
  type === "cakes"
    ? adminCakeStore.adminCake[0].carbohydrates
    : adminPastryStore.adminPastry[0].carbohydrates,
);

const updateProductNutritional = async () => {
  try {
    isLoading.value = true;

    const formData = {
      calories: caloriesField.value ? caloriesField.value.trim() : null,
      protein: proteinField.value ? proteinField.value.trim() : null,
      fat: fatField.value ? fatField.value.trim() : null,
      carbohydrates: carbohydratesField.value
        ? carbohydratesField.value.trim()
        : null,
    };

    const result =
      type === "cakes"
        ? await adminCakeStore.updateAdminProductNutritional(formData)
        : await adminPastryStore.updateAdminProductNutritional(formData);

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
