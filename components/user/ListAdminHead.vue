<template>
  <ul class="userListAdminHead">
    <li class="userListAdminHead__item">Имя</li>
    <li class="userListAdminHead__item">Почта</li>
    <li class="userListAdminHead__bonus">Бонус</li>
  </ul>
</template>

<style lang="scss" scoped>
.userListAdminHead {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 13px;
  color: var(--deep-blue-thirdly);

  &__item {
    padding-left: 10px;
    padding-bottom: 5px;
  }

  &__bonus {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    padding-bottom: 5px;
  }
}
</style>
