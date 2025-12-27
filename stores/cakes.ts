import { defineStore } from "pinia";

export const useCakesStore = defineStore("cakesStore", () => {
  const cakes = ref([
    {
      id: 1,
      image: "/images/cakes/almond-prune-cake-1-600-400.webp",
      name: "Торт «Воздушно-ореховый»",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      quantity: 0,
    },
    {
      id: 2,
      image: "/images/cakes/carrot-cake-1-600-400.webp",
      name: "Торт «Воздушно-ореховый-ореховый-ореховый-ореховый»",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      quantity: 0,
    },
    {
      id: 3,
      image: "/images/cakes/coconut-cake-1-600-400.webp",
      name: "Торт «Воздушно-ореховый-ореховый-ореховый-ореховый»",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      quantity: 0,
    },
    {
      id: 4,
      image: "/images/cakes/esterhazy-cake-1-600-400.webp",
      name: "Торт «Воздушно-ореховый-ореховый-ореховый-ореховый»",
      description:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      price: 1860,
      weigth: 1640,
      quantity: 0,
    },
  ]);

  const increment = (id: Number) => {
    cakes.value = cakes.value.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  };

  const decrement = (id: Number) => {
    cakes.value = cakes.value.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
  };

  return { cakes, increment, decrement };
});
