<template>
  <!-- <FormAdminSettings /> -->
  <div class="page-padding-x">
    <FormAdminSettings />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["admin"],
  layout: "admin",
});

// const result = await useFetch("/api/settings/delete-settings");

// const result = await useFetch("/api/settings/delete-settings", {
//   // baseURL: process.env.BASE_URL,
//   method: "DELETE",
//   body: {
//     id: 1,
//     min_order_sum: 55,
//     // delivery_sum: 14000,
//     // samovyvoz_bonus: 70,
//   },
// });

// const result = await useFetch("/api/settings/load-settings", {
//   method: "GET",
// });

// const settingStore = useSettingStore();
// await settingStore.loadSettings();

// console.log(result.data.value);
</script>
