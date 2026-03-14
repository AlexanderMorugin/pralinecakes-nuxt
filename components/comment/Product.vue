<template>
  <div :class="['commentProduct', { commentProduct_admin: place === 'admin' }]">
    <div
      :class="[
        'commentProduct__titleBox',
        { commentProduct__titleBox_admin: place === 'admin' },
      ]"
    >
      <div class="commentProduct__title">
        <span class="commentProduct__name">{{ comment.user_name }}</span>
        <span class="commentProduct__date">{{ comment.date }}</span>
      </div>
      <ProductListCardRating :rating="comment.user_rating" />
    </div>

    <WrapperText
      :class="[
        'commentProduct__comment',
        { commentProduct__comment_admin: place === 'admin' },
      ]"
    >
      <span>{{ comment.user_comment }}</span>
      <div class="commentProduct__product">
        <CommentImage
          :src="comment.product_image"
          :alt="comment.product_title"
        />
        <span>{{ comment.product_title }}</span>
      </div>
    </WrapperText>
  </div>
</template>

<script setup>
const { comment, place } = defineProps(["comment", "place"]);
</script>

<style lang="scss" scoped>
.commentProduct {
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(15px) grayscale(50%);
  border-radius: var(--border-radius-l);
  border: 1px solid var(--border-primary);
  overflow: hidden;

  &:nth-of-type(1) {
    animation: slide-to-top 0.5s ease-in-out;
  }

  &:nth-of-type(2) {
    animation: slide-to-top 0.6s ease-in-out;
  }

  &:nth-of-type(3) {
    animation: slide-to-top 0.7s ease-in-out;
  }

  &:nth-of-type(4) {
    animation: slide-to-top 0.8s ease-in-out;
  }

  &:nth-of-type(5) {
    animation: slide-to-top 0.9s ease-in-out;
  }

  &:nth-of-type(6) {
    animation: slide-to-top 1s ease-in-out;
  }

  &_admin {
    border: 1px solid var(--mask-blue-primary);
  }

  &__titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 10px;

    &_admin {
      background: var(--mask-blue-fourthly);
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
  }

  &__name {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 20px;
    line-height: 28px;
    color: var(--white-primary);
    letter-spacing: 1px;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 26px;
      // letter-spacing: 0;
    }

    // &_admin {
    //   color: var(--black-primary);
    // }
  }

  &__date {
    // font-family: "Montserrat-Regular", sans-serif;
    font-size: 12px;
    line-height: 18px;
    color: var(--mask-white-primary);

    // &_admin {
    //   color: var(--black-primary);
    // }
  }

  &__comment {
    background: var(--deep-blue-fourthly);
    padding: 20px;

    &_admin {
      background: var(--white-primary);
      color: var(--black-primary);
    }
  }

  &__product {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    padding-top: 20px;

    @media (max-width: 767px) {
      padding-top: 10px;
    }
  }
}
</style>
