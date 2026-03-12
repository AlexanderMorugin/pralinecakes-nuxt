<template>
  <NuxtLink
    :to="`/admin/comments/${comment.id}`"
    class="commentListCard"
    :class="comment.visibility ? 'commentListCard_active' : ''"
  >
    <CommentImage :src="comment.product_image" :alt="comment.product_title" />

    <div class="commentListCard__detailsBox">
      <div class="commentListCard__details">
        <span
          :class="[
            'commentListCard__user',
            { commentListCard__user_active: comment.visibility },
          ]"
          >{{ comment.user_name }}</span
        >
        <span
          :class="[
            'commentListCard__date',
            { commentListCard__date_active: comment.visibility },
          ]"
          >{{ comment.date }}</span
        >
      </div>
      <div class="commentListCard__details">
        <ProductListCardRating :rating="comment.user_rating" :maxStars="5" />
        <div class="commentListCard__right">
          <IconVisibility
            v-if="comment.visibility"
            :class="[
              'commentListCard__icon',
              { commentListCard__icon_active: comment.visibility },
            ]"
          />
          <IconVisibilityOff v-else class="commentListCard__icon" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { comment } = defineProps(["comment"]);
</script>

<style lang="scss" scoped>
.commentListCard {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  border-radius: var(--border-radius-s);
  border: 1px solid var(--border-primary);
  background: var(--mask-blue-secondary);
  padding: 10px;
  transition: 0.2s ease;

  @media (max-width: 767px) {
    grid-template-columns: 40px 1fr;
    padding: 7px;
  }

  &:hover {
    background: var(--mask-blue-primary);
  }

  &_active {
    background: var(--mask-blue-fourthly);
  }

  &__detailsBox {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }

  &__details {
    display: flex;
    flex-direction: column;
  }

  &__user {
    font-family: "Montserrat-Medium", sans-serif;
    font-size: 18px;
    line-height: 26px;
    color: var(--black-primary);

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 20px;
    }

    &_active {
      color: var(--white-primary);
    }
  }

  &__date {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    line-height: 18px;
    color: var(--black-primary);

    &_active {
      color: var(--white-primary);
    }
  }

  &__right {
    display: flex;
    justify-content: flex-end;
  }

  &__icon {
    width: 28px;
    height: 28px;
    fill: var(--black-primary);

    @media (max-width: 767px) {
      width: 20px;
      height: 20px;
    }

    &_active {
      fill: var(--white-primary);
    }
  }
}
</style>
