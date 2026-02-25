<template>
  <button class="buttonWithIcon" @click="emit('handleClick')">
    <IconClose v-if="name === 'close'" class="buttonWithIcon__icon" />
    <IconMenu
      v-if="name === 'menu'"
      class="buttonWithIcon__icon"
      :class="place === 'admin' ? 'buttonWithIcon__icon_admin' : ''"
    />
    <IconArrowBack v-if="name === 'back'" class="buttonWithIcon__icon_admin" />
    <IconLogin v-if="name === 'login'" class="buttonWithIcon__icon" />
    <IconCartImg v-if="name === 'cart'" class="buttonWithIcon__icon" />
    <IconPhone v-if="name === 'phone'" class="buttonWithIcon__icon" />
    <IconEmail v-if="name === 'email'" class="buttonWithIcon__icon" />
    <IconSearch v-if="name === 'search'" class="buttonWithIcon__icon" />
    <IconLogout v-if="name === 'logout'" class="buttonWithIcon__icon" />
    <!-- <IconDelete v-if="name === 'delete'" class="buttonWithIcon__icon" /> -->
    <IconDelivery v-if="name === 'delivery'" class="buttonWithIcon__icon" />
    <IconPerson v-if="name === 'person'" class="buttonWithIcon__icon" />
    <IconAccount v-if="name === 'profile'" class="buttonWithIcon__icon" />
    <IconChat v-if="name === 'chat'" class="buttonWithIcon__icon" />
    <IconFavorite
      v-if="name === 'favorite'"
      :class="[
        'buttonWithIcon__icon buttonWithIcon__icon_favorite',
        { buttonWithIcon__icon_favoriteActive: isFavorite },
      ]"
    />
    <ClientOnly>
      <div
        v-if="name === 'cart' && cartStore.cart.length"
        class="buttonWithIcon__cart"
      >
        <span class="buttonWithIcon__cartCount">{{
          cartStore.totalCartCount
        }}</span>
      </div>
    </ClientOnly>
  </button>
</template>

<script setup>
const { name, isFavorite, place } = defineProps([
  "name",
  "isFavorite",
  "place",
]);
const emit = defineEmits(["handleClick"]);

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.buttonWithIcon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  transition: 0.2s ease;

  &__icon {
    width: 32px;
    height: 32px;
    fill: var(--white-primary);
    opacity: 0.9;
    transition: 0.2s ease;

    @media (max-width: 767px) {
      width: 24px;
      height: 24px;
    }

    &_admin {
      width: 24px;
      height: 24px;
      fill: var(--black-primary);
    }

    &_favorite {
      width: 22px;
      height: 22px;
      color: var(--mask-white-primary);
      fill: transparent;
    }

    &_favoriteActive {
      color: var(--white-primary);
      fill: var(--white-primary);
    }
  }

  &__cart {
    position: absolute;
    bottom: 6px;
    left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 14px;
    background: var(--red-primary);
    padding: 2px 6px;

    @media (max-width: 767px) {
      bottom: 2px;
    }
  }

  &__cartCount {
    font-family: "Roboto-Regular", sans-serif;
    font-size: 14px;
    color: var(--white-primary);

    @media (max-width: 767px) {
      font-size: 10px;
    }
  }
}

.buttonWithIcon:hover .buttonWithIcon__icon {
  fill: var(--orange-primary);
  opacity: 1;
  animation: scale 0.25s ease-in-out;
}

.buttonWithIcon:hover .buttonWithIcon__icon_admin {
  fill: var(--deep-blue-fourthly);
  opacity: 1;
  animation: scale 0.25s ease-in-out;
}

.buttonWithIcon:hover .buttonWithIcon__icon_favorite {
  fill: transparent;
  animation: scale 0.25s ease-in-out;
}

.buttonWithIcon:hover .buttonWithIcon__icon_favoriteActive {
  color: var(--white-primary);
  fill: var(--white-primary);
  animation: scale 0.25s ease-in-out;
}

@keyframes scale {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
