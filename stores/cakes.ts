import { defineStore } from "pinia";

export type TComment = {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  productId: number;
};

export type TNutrition = {
  name: string;
  count: number;
};

export interface ICake {
  id: number;
  slug: string;
  image_list_card: string;
  image_800: string[];
  image_2800: string[];
  image_meta: string;
  name: string;
  description_short: string;
  description_one: string;
  description_two: string;
  price: number;
  weigth: number;
  width: number;
  height: number;
  expirationDate: number;
  storageTemperature: number[];
  rating: number;
  badgeStatus?: string | null;
  ingredients: string;
  nutrition: TNutrition[];
  comments: TComment[];
  discount: number;
  isFavorite: Boolean;
}

export const useCakesStore = defineStore("cakesStore", () => {
  const cakes = ref<ICake[]>([
    {
      id: 1,
      slug: "air-nut",

      image_list_card:
        "/images/cakes/almond-prune/almond-prune-cake-1-600-400.webp",
      image_800: [
        "/images/cakes/almond-prune/almond-prune-cake-1-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-2-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-3-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-4-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-5-800-533.webp",
        "/images/cakes/almond-prune/almond-prune-cake-6-800-533.webp",
      ],
      image_2800: [
        "/images/cakes/almond-prune/almond-prune-cake-1-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-2-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-3-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-4-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-5-2800-1866.webp",
        "/images/cakes/almond-prune/almond-prune-cake-6-2800-1866.webp",
      ],
      image_meta: "/images/cakes/almond-prune/almond-prune-cake-1-800-533.webp",

      name: "Торт Воздушно ореховый",
      description_short:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      description_one:
        "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
      description_two:
        "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
      price: 1860,
      weigth: 1640,
      width: 30,
      height: 10,
      expirationDate: 72,
      storageTemperature: [4, 6],
      rating: 5,
      badgeStatus: "Хит",
      ingredients:
        "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
      nutrition: [
        { name: "Калории", count: 259 },
        { name: "Белки", count: 5.7 },
        { name: "Жиры", count: 26.1 },
        { name: "Углеводы", count: 36.6 },
      ],
      comments: [],
      discount: 30,
      isFavorite: false,
    },
    {
      id: 2,
      slug: "almond",

      image_list_card: "/images/cakes/carrot/carrot-cake-1-600-400.webp",
      image_800: [
        "/images/cakes/carrot/carrot-cake-1-800-533.webp",
        "/images/cakes/carrot/carrot-cake-2-800-533.webp",
        "/images/cakes/carrot/carrot-cake-3-800-533.webp",
        "/images/cakes/carrot/carrot-cake-4-800-533.webp",
        "/images/cakes/carrot/carrot-cake-5-800-533.webp",
        "/images/cakes/carrot/carrot-cake-6-800-533.webp",
      ],
      image_2800: [
        "/images/cakes/carrot/carrot-cake-1-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-2-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-3-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-4-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-5-2800-1866.webp",
        "/images/cakes/carrot/carrot-cake-6-2800-1866.webp",
      ],
      image_meta: "/images/cakes/carrot/carrot-cake-1-800-533.webp",

      name: "Торт Миндальный",
      description_short:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      description_one:
        "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
      description_two:
        "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
      price: 1860,
      weigth: 1640,
      width: 30,
      height: 10,
      expirationDate: 72,
      storageTemperature: [4, 6],
      rating: 1,
      badgeStatus: null,
      ingredients:
        "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
      nutrition: [
        { name: "Калории", count: 259 },
        { name: "Белки", count: 5.7 },
        { name: "Жиры", count: 26.1 },
        { name: "Углеводы", count: 36.6 },
      ],
      comments: [
        {
          id: 1,
          name: "Елена",
          rating: 3,
          date: "25.03.2025",
          comment: "Вкусно и точка!",
          productId: 2,
        },
        {
          id: 2,
          name: "Наталья",
          rating: 5,
          date: "08.03.2025",
          comment: "Божественно!",
          productId: 2,
        },
        {
          id: 3,
          name: "Наталья",
          rating: 1,
          date: "02.03.2025",
          comment: "Невероятно но факт!",
          productId: 2,
        },
      ],
      discount: 20,
      isFavorite: true,
    },
    {
      id: 3,
      slug: "honey",

      image_list_card: "/images/cakes/coconut/coconut-cake-1-600-400.webp",
      image_800: [
        "/images/cakes/coconut/coconut-cake-1-800-533.webp",
        "/images/cakes/coconut/coconut-cake-2-800-533.webp",
        "/images/cakes/coconut/coconut-cake-3-800-533.webp",
        "/images/cakes/coconut/coconut-cake-4-800-533.webp",
        "/images/cakes/coconut/coconut-cake-5-800-533.webp",
        "/images/cakes/coconut/coconut-cake-6-800-533.webp",
      ],
      image_2800: [
        "/images/cakes/coconut/coconut-cake-1-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-2-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-3-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-4-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-5-2800-1866.webp",
        "/images/cakes/coconut/coconut-cake-6-2800-1866.webp",
      ],
      image_meta: "/images/cakes/coconut/coconut-cake-1-800-533.webp",

      name: "Торт Медовик",
      description_short:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      description_one:
        "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
      description_two:
        "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
      price: 1860,
      weigth: 1640,
      width: 30,
      height: 10,
      expirationDate: 72,
      storageTemperature: [4, 6],
      rating: 2,
      badgeStatus: "Новинка",
      ingredients:
        "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
      nutrition: [
        { name: "Калории", count: 259 },
        { name: "Белки", count: 5.7 },
        { name: "Жиры", count: 26.1 },
        { name: "Углеводы", count: 36.6 },
      ],
      comments: [
        {
          id: 1,
          name: "Пётр Алексеевич",
          rating: 3,
          date: "30.03.2025",
          comment: "Вкусно и точка!",
          productId: 3,
        },
        {
          id: 2,
          name: "Людмила",
          rating: 5,
          date: "28.03.2025",
          comment: "Божественно!",
          productId: 3,
        },
        {
          id: 3,
          name: "Феликс",
          rating: 2,
          date: "26.03.2025",
          comment: "Невероятно но факт!",
          productId: 3,
        },
        {
          id: 4,
          name: "Никита",
          rating: 5,
          date: "21.03.2025",
          comment: "Обожаю ваши торты!",
          productId: 3,
        },
        {
          id: 5,
          name: "Олег",
          rating: 1,
          date: "10.03.2025",
          comment: "Полная фигня.",
          productId: 3,
        },
        {
          id: 6,
          name: "Анна",
          rating: 2,
          date: "05.03.2025",
          comment: "Никогда не пробовала ничего подобного. Благодарю!",
          productId: 3,
        },
        {
          id: 7,
          name: "Наталья",
          rating: 4,
          date: "01.03.2025",
          comment: "Быстрая доставка. Внимательный персонал!",
          productId: 3,
        },
      ],
      discount: 0,
      isFavorite: true,
    },
    {
      id: 4,
      slug: "currant-coconut",

      image_list_card: "/images/cakes/esterhazy/esterhazy-cake-1-600-400.webp",
      image_800: [
        "/images/cakes/esterhazy/esterhazy-cake-1-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-2-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-3-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-4-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-5-800-533.webp",
        "/images/cakes/esterhazy/esterhazy-cake-6-800-533.webp",
      ],
      image_2800: [
        "/images/cakes/esterhazy/esterhazy-cake-1-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-2-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-3-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-4-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-5-2800-1866.webp",
        "/images/cakes/esterhazy/esterhazy-cake-6-2800-1866.webp",
      ],
      image_meta: "/images/cakes/esterhazy/esterhazy-cake-1-800-533.webp",

      name: "Торт Чёрная смородина и кокос",
      description_short:
        "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
      description_one:
        "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
      description_two:
        "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
      price: 1860,
      weigth: 1640,
      width: 30,
      height: 10,
      expirationDate: 72,
      storageTemperature: [4, 6],
      rating: 3,
      badgeStatus: null,
      ingredients:
        "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
      nutrition: [
        { name: "Калории", count: 259 },
        { name: "Белки", count: 5.7 },
        { name: "Жиры", count: 26.1 },
        { name: "Углеводы", count: 36.6 },
      ],
      comments: [
        {
          id: 1,
          name: "Лев Давидович",
          rating: 2,
          date: "30.03.2025",
          comment: "Никогда не пробовала ничего подобного. Благодарю!",
          productId: 4,
        },
      ],
      discount: 10,
      isFavorite: false,
    },
  ]);

  const cake = ref<any>(null);

  const getCake = async (slug: string) => {
    cake.value = cakes.value.find((item) => item.slug === slug);
  };

  return {
    cakes,
    cake,
    getCake,
  };
});
