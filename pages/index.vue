<template>
  <div>
    <HeroBlock />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

useHead({
  link: [{ rel: "canonical", href: "hello/name-of-page" }],
});

useSeoMeta({
  title: "Пралине Shop",
  description: "Пралине Shop Пралине Shop Пралине Shop",
  author: "mav",
  robots: "index, follow",
  ogTitle: "ogTitle",
  ogDescription: "ogDescription",
  ogImage: `ogImage`,
  ogUrl: `canonical-ogUrl`,
  ogSiteName: "Пралине Shop",
  ogType: "website",
  ogLocale: "ru_RU",
});
</script>
