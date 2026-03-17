<template>
  <div class="page-padding-x">
    <!-- <UserSubtitle subtitle="Сотрудники" place="admin" />
    <UserListAdminHead />
    <ul class="userList">
      <li v-for="user in users" :key="user.id">
        <UserListCard v-if="user.user_role === 'manager'" :user="user" />
      </li>
    </ul> -->

    <UserSubtitle subtitle="Клиенты" place="admin" />
    <UserListAdminHead />
    <ul class="userList">
      <li v-for="user in users" :key="user.id">
        <UserListCard v-if="user.user_role === 'client'" :user="user" />
        <ProductListEmpty v-else title="Клиенты не найдены..." place="admin" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const { users } = defineProps(["users"]);
</script>

<style lang="scss" scoped>
// .userListHead {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   font-size: 13px;
//   color: var(--deep-blue-thirdly);

//   &__item {
//     padding-left: 10px;
//     padding-bottom: 10px;
//   }
//   &__bonus {
//     display: flex;
//     justify-content: flex-end;
//     padding-right: 10px;
//     padding-bottom: 10px;
//   }
// }
.userList {
  display: flex;
  flex-direction: column;
  gap: 10px;
  // padding-bottom: 20px;
}
</style>
