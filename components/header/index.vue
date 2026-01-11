<template>
  <header class="header">
    <!-- <WrapperPadding> -->
    <div class="header__container">
      <div class="header__left">
        <ButtonWithIcon
          name="menu"
          class="header__iconMenu"
          @click="openModal('menu')"
        />
        <ButtonWithIcon
          v-if="!isScreenMedium"
          name="search"
          class="header__iconSearch"
          @click="openModal('search')"
        />
      </div>

      <Logo class="header__logo" />

      <div class="header__right">
        <div class="header__block">
          <ButtonWithIcon
            name="phone"
            class="header__iconPhone"
            @click="openModal('phone')"
          />
          <ButtonWithIcon
            name="chat"
            class="header__iconChat"
            @click="openModal('chat')"
          />
        </div>

        <div class="header__block">
          <ButtonWithIcon
            name="profile"
            class="header__iconAccount"
            @click="openModal('profile')"
          />
          <ButtonWithIcon
            name="cart"
            class="header__iconCart"
            @click="openModal('cart')"
          />
        </div>
      </div>
    </div>
    <!-- </WrapperPadding> -->
  </header>

  <!-- <ClientOnly> -->
  <!-- Модалка меню -->
  <Teleport to="#teleports">
    <Transition name="left">
      <ModalForHeader
        v-if="isMenuModalOpen"
        :isModalOpen="isMenuModalOpen"
        place="left"
        title="Меню"
        name="menu"
        @closeModal="isMenuModalOpen = false"
      />
    </Transition>
  </Teleport>

  <!-- Модалка поиска -->
  <Teleport to="#teleports">
    <Transition name="left">
      <ModalForHeader
        v-if="isSearchModalOpen"
        :isModalOpen="isSearchModalOpen"
        place="left"
        title="Поиск"
        name="search"
        @closeModal="isSearchModalOpen = false"
      />
    </Transition>
  </Teleport>

  <!-- Модалка профиля -->
  <Teleport to="#teleports">
    <Transition name="right">
      <ModalForHeader
        v-if="isProfileModalOpen"
        :isModalOpen="isProfileModalOpen"
        place="right"
        title="Профиль"
        name="profile"
        @closeModal="isProfileModalOpen = false"
      />
    </Transition>
  </Teleport>

  <!-- Модалка корзины -->
  <Teleport to="#teleports">
    <Transition name="right">
      <ModalForHeader
        v-if="isCartModalOpen"
        :isModalOpen="isCartModalOpen"
        place="right"
        title="Корзина"
        name="cart"
        @closeModal="isCartModalOpen = false"
      />
    </Transition>
  </Teleport>

  <!-- Модалка мессенджеров -->
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalForHeader
        v-if="isChatModalOpen"
        :isModalOpen="isChatModalOpen"
        place="right"
        title="Написать"
        name="chat"
        @closeModal="isChatModalOpen = false"
      />
    </Transition>
  </Teleport>

  <!-- Модалка телефонов -->
  <Teleport to="#teleports">
    <Transition name="top">
      <ModalForHeader
        v-if="isPhoneModalOpen"
        :isModalOpen="isPhoneModalOpen"
        place="right"
        title="Позвонить"
        name="phone"
        @closeModal="isPhoneModalOpen = false"
      />
    </Transition>
  </Teleport>
  <!-- </ClientOnly> -->
</template>

<script setup>
const { isScreenMedium } = useResizeMedium();

const isMenuModalOpen = ref(false);
const isSearchModalOpen = ref(false);
const isProfileModalOpen = ref(false);
const isCartModalOpen = ref(false);
const isChatModalOpen = ref(false);
const isPhoneModalOpen = ref(false);

const openModal = (name) => {
  if (name === "menu") {
    isMenuModalOpen.value = true;
    isSearchModalOpen.value = false;
    isProfileModalOpen.value = false;
    isCartModalOpen.value = false;
    isChatModalOpen.value = false;
    isPhoneModalOpen.value = false;
  }
  if (name === "search") {
    isMenuModalOpen.value = false;
    isSearchModalOpen.value = true;
    isProfileModalOpen.value = false;
    isCartModalOpen.value = false;
    isChatModalOpen.value = false;
    isPhoneModalOpen.value = false;
  }
  if (name === "phone") {
    isMenuModalOpen.value = false;
    isSearchModalOpen.value = false;
    isProfileModalOpen.value = false;
    isCartModalOpen.value = false;
    isChatModalOpen.value = false;
    isPhoneModalOpen.value = true;
  }
  if (name === "profile") {
    isMenuModalOpen.value = false;
    isSearchModalOpen.value = false;
    isProfileModalOpen.value = true;
    isCartModalOpen.value = false;
    isChatModalOpen.value = false;
    isPhoneModalOpen.value = false;
  }
  if (name === "cart") {
    isMenuModalOpen.value = false;
    isSearchModalOpen.value = false;
    isProfileModalOpen.value = false;
    isCartModalOpen.value = true;
    isChatModalOpen.value = false;
    isPhoneModalOpen.value = false;
  }
  if (name === "chat") {
    isMenuModalOpen.value = false;
    isSearchModalOpen.value = false;
    isProfileModalOpen.value = false;
    isCartModalOpen.value = false;
    isChatModalOpen.value = true;
    isPhoneModalOpen.value = false;
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  animation: filter 3s ease;
  backdrop-filter: blur(15px) grayscale(50%);
  padding-left: 8px;
  padding-right: 8px;
  z-index: 3;

  border: 1px solid red;

  @media (max-width: 767px) {
    height: 60px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid red;
  }

  &__left {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 50px;
    width: fit-content;

    @media (max-width: 767px) {
      gap: 10px;
    }

    @media (max-width: 576px) {
      gap: 0;
    }
  }

  &__block {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  &__iconMenu {
    animation: iconMenu 1s ease;
  }

  &__iconSearch {
    animation: iconSearch 1s ease;
  }

  &__iconCart {
    animation: iconCart 1s ease;
  }

  &__iconAccount {
    animation: iconAccount 1s ease;
  }

  &__iconPhone {
    animation: iconPhone 1s ease;
  }

  &__iconChat {
    animation: iconChat 1s ease;
  }

  &__logo {
    animation: logo 3s ease;
  }
}

@keyframes logo {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes iconChat {
  0% {
    opacity: 0;
    transform: translateY(200%);
  }
  65% {
    opacity: 0;
    transform: translateY(200%);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconPhone {
  0% {
    opacity: 0;
    transform: translateY(-150%);
  }
  65% {
    opacity: 0;
    transform: translateY(-150%);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconAccount {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  57% {
    opacity: 0;
    transform: translateY(100%);
  }
  75% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconCart {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  70% {
    opacity: 0;
    transform: translateX(100%);
  }
  75% {
    opacity: 1;
    transform: translateX(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconSearch {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  70% {
    opacity: 0;
    transform: translateY(-100%);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes iconMenu {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  65% {
    opacity: 0;
    transform: translateX(-100%);
  }
  70% {
    opacity: 1;
    transform: translateX(0);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes filter {
  0% {
    backdrop-filter: blur(0) grayscale(0%);
  }
  50% {
    backdrop-filter: blur(0) grayscale(0%);
  }
  100% {
    backdrop-filter: blur(15px) grayscale(50%);
  }
}
</style>
