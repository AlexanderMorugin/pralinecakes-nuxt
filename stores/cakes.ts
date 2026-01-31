import { defineStore } from "pinia";

// export type TComment = {
//   id: number;
//   name: string;
//   rating: number;
//   date: string;
//   comment: string;
//   productId: number;
// };

export interface ICake {
  id?: any;
  slug?: string;
  title?: string;
  description_short?: string;
  description_one?: string;
  description_two?: string;
  description_three?: string;

  image_1_small?: string;
  image_1_big?: string;
  image_2_small?: string;
  image_2_big?: string;
  image_3_small?: string;
  image_3_big?: string;
  image_4_small?: string;
  image_4_big?: string;
  image_5_small?: string;
  image_5_big?: string;
  image_6_small?: string;
  image_6_big?: string;

  meta_title?: string;
  meta_description?: string;
  meta_сanonical_url?: string;

  weight?: number;
  width?: number;
  height?: number;

  price?: number;
  discount?: number;
  discount_price?: number;

  ingredients?: string;
  protein?: string;
  fat?: string;
  carbohydrates?: string;
  calories?: string;

  visibility: boolean;

  createdAt?: any;
  updatedAt?: any;
}

export const useCakesStore = defineStore("cakesStore", () => {
  // const cakes = ref<ICake[]>([
  //   {
  //     id: 1,
  //     type: "cakes",
  //     slug: "air-nut",

  //     image_800: [
  //       "/images/cakes/almond-prune/c-almond-prune-1-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-2-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-3-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-4-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-5-800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-6-800.webp",
  //     ],
  //     image_2800: [
  //       "/images/cakes/almond-prune/c-almond-prune-1-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-2-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-3-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-4-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-5-2800.webp",
  //       "/images/cakes/almond-prune/c-almond-prune-6-2800.webp",
  //     ],

  //     name: "Торт Воздушно ореховый",
  //     description_short:
  //       "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
  //     description_one:
  //       "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
  //     description_two:
  //       "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
  //     price: 1860,
  //     weigth: 1640,
  //     width: 30,
  //     height: 10,
  //     expirationDate: 72,
  //     storageTemperature: [4, 6],
  //     rating: 5,
  //     badgeStatus: "Хит",
  //     ingredients:
  //       "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
  //     nutrition: [
  //       { name: "Калории", count: 259 },
  //       { name: "Белки", count: 5.7 },
  //       { name: "Жиры", count: 26.1 },
  //       { name: "Углеводы", count: 36.6 },
  //     ],
  //     comments: [],
  //     discount: 30,
  //     isFavorite: false,
  //   },
  //   {
  //     id: 2,
  //     type: "cakes",
  //     slug: "almond",

  //     image_800: [
  //       "/images/cakes/carrot/c-carrot-1-800.webp",
  //       "/images/cakes/carrot/c-carrot-2-800.webp",
  //       "/images/cakes/carrot/c-carrot-3-800.webp",
  //       "/images/cakes/carrot/c-carrot-4-800.webp",
  //       "/images/cakes/carrot/c-carrot-5-800.webp",
  //       "/images/cakes/carrot/c-carrot-6-800.webp",
  //     ],
  //     image_2800: [
  //       "/images/cakes/carrot/c-carrot-1-2800.webp",
  //       "/images/cakes/carrot/c-carrot-2-2800.webp",
  //       "/images/cakes/carrot/c-carrot-3-2800.webp",
  //       "/images/cakes/carrot/c-carrot-4-2800.webp",
  //       "/images/cakes/carrot/c-carrot-5-2800.webp",
  //       "/images/cakes/carrot/c-carrot-6-2800.webp",
  //     ],

  //     name: "Торт Миндальный",
  //     description_short:
  //       "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
  //     description_one:
  //       "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
  //     description_two:
  //       "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
  //     price: 1860,
  //     weigth: 1640,
  //     width: 30,
  //     height: 10,
  //     expirationDate: 72,
  //     storageTemperature: [4, 6],
  //     rating: 1,
  //     badgeStatus: null,
  //     ingredients:
  //       "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
  //     nutrition: [
  //       { name: "Калории", count: 259 },
  //       { name: "Белки", count: 5.7 },
  //       { name: "Жиры", count: 26.1 },
  //       { name: "Углеводы", count: 36.6 },
  //     ],
  //     comments: [
  //       {
  //         id: 1,
  //         name: "Елена",
  //         rating: 3,
  //         date: "25.03.2025",
  //         comment: "Вкусно и точка!",
  //         productId: 2,
  //       },
  //       {
  //         id: 2,
  //         name: "Наталья",
  //         rating: 5,
  //         date: "08.03.2025",
  //         comment: "Божественно!",
  //         productId: 2,
  //       },
  //       {
  //         id: 3,
  //         name: "Наталья",
  //         rating: 1,
  //         date: "02.03.2025",
  //         comment: "Невероятно но факт!",
  //         productId: 2,
  //       },
  //     ],
  //     discount: 20,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 3,
  //     type: "cakes",
  //     slug: "honey",

  //     image_800: [
  //       "/images/cakes/coconut/c-coconut-1-800.webp",
  //       "/images/cakes/coconut/c-coconut-2-800.webp",
  //       "/images/cakes/coconut/c-coconut-3-800.webp",
  //       "/images/cakes/coconut/c-coconut-4-800.webp",
  //       "/images/cakes/coconut/c-coconut-5-800.webp",
  //       "/images/cakes/coconut/c-coconut-6-800.webp",
  //     ],
  //     image_2800: [
  //       "/images/cakes/coconut/c-coconut-1-2800.webp",
  //       "/images/cakes/coconut/c-coconut-2-2800.webp",
  //       "/images/cakes/coconut/c-coconut-3-2800.webp",
  //       "/images/cakes/coconut/c-coconut-4-2800.webp",
  //       "/images/cakes/coconut/c-coconut-5-2800.webp",
  //       "/images/cakes/coconut/c-coconut-6-2800.webp",
  //     ],

  //     name: "Торт Медовик",
  //     description_short:
  //       "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
  //     description_one:
  //       "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
  //     description_two:
  //       "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
  //     price: 1860,
  //     weigth: 1640,
  //     width: 30,
  //     height: 10,
  //     expirationDate: 72,
  //     storageTemperature: [4, 6],
  //     rating: 2,
  //     badgeStatus: "Новинка",
  //     ingredients:
  //       "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
  //     nutrition: [
  //       { name: "Калории", count: 259 },
  //       { name: "Белки", count: 5.7 },
  //       { name: "Жиры", count: 26.1 },
  //       { name: "Углеводы", count: 36.6 },
  //     ],
  //     comments: [
  //       {
  //         id: 1,
  //         name: "Пётр Алексеевич",
  //         rating: 3,
  //         date: "30.03.2025",
  //         comment: "Вкусно и точка!",
  //         productId: 3,
  //       },
  //       {
  //         id: 2,
  //         name: "Людмила",
  //         rating: 5,
  //         date: "28.03.2025",
  //         comment: "Божественно!",
  //         productId: 3,
  //       },
  //       {
  //         id: 3,
  //         name: "Феликс",
  //         rating: 2,
  //         date: "26.03.2025",
  //         comment: "Невероятно но факт!",
  //         productId: 3,
  //       },
  //       {
  //         id: 4,
  //         name: "Никита",
  //         rating: 5,
  //         date: "21.03.2025",
  //         comment: "Обожаю ваши торты!",
  //         productId: 3,
  //       },
  //       {
  //         id: 5,
  //         name: "Олег",
  //         rating: 1,
  //         date: "10.03.2025",
  //         comment: "Полная фигня.",
  //         productId: 3,
  //       },
  //       {
  //         id: 6,
  //         name: "Анна",
  //         rating: 2,
  //         date: "05.03.2025",
  //         comment: "Никогда не пробовала ничего подобного. Благодарю!",
  //         productId: 3,
  //       },
  //       {
  //         id: 7,
  //         name: "Наталья",
  //         rating: 4,
  //         date: "01.03.2025",
  //         comment: "Быстрая доставка. Внимательный персонал!",
  //         productId: 3,
  //       },
  //     ],
  //     discount: 0,
  //     isFavorite: true,
  //   },
  //   {
  //     id: 4,
  //     type: "cakes",
  //     slug: "currant-coconut",

  //     image_800: [
  //       "/images/cakes/esterhazy/c-esterhazy-1-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-2-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-3-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-4-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-5-800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-6-800.webp",
  //     ],
  //     image_2800: [
  //       "/images/cakes/esterhazy/c-esterhazy-1-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-2-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-3-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-4-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-5-2800.webp",
  //       "/images/cakes/esterhazy/c-esterhazy-6-2800.webp",
  //     ],

  //     name: "Торт Чёрная смородина и кокос",
  //     description_short:
  //       "Самый шоколадный и один из самых нежных десертов нашей кондитерской. Самый шоколадный и один из самых нежных десертов нашей кондитерской.",
  //     description_one:
  //       "Стоит обратить внимание на то, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными сливочными нотками, а маковых зёрнышек в данном продукте предостаточно! Пирожное состоит из нескольких в меру мягких коржей, между которыми расположены мак и крем.",
  //     description_two:
  //       "Данное пирожное крайне рекомендуется все владельцам кофеен и ресторанов! Ваши клиенты будут весьма благодарны за такой хороший десерт, который является не чем то особенным, а просто вкусным, повседневным дополнением к ароматному кофе или горячему чаю.",
  //     price: 1860,
  //     weigth: 1640,
  //     width: 30,
  //     height: 10,
  //     expirationDate: 72,
  //     storageTemperature: [4, 6],
  //     rating: 3,
  //     badgeStatus: null,
  //     ingredients:
  //       "Пшеничная мука, сливки 33%, мак, сахар, куриные яйца, темный шоколад, сливочное масло, кондитерский гель",
  //     nutrition: [
  //       { name: "Калории", count: 259 },
  //       { name: "Белки", count: 5.7 },
  //       { name: "Жиры", count: 26.1 },
  //       { name: "Углеводы", count: 36.6 },
  //     ],
  //     comments: [
  //       {
  //         id: 1,
  //         name: "Лев Давидович",
  //         rating: 2,
  //         date: "30.03.2025",
  //         comment: "Никогда не пробовала ничего подобного. Благодарю!",
  //         productId: 4,
  //       },
  //     ],
  //     discount: 10,
  //     isFavorite: false,
  //   },
  // ]);

  const cakes = ref<ICake[] | any>([]);
  const cake = ref<ICake | any>(null);

  const loadCakes = async () => {
    const result = await useFetch("/api/cakes/load-cakes", {
      method: "GET",
    });

    if (result.status.value === "success") {
      cakes.value = result.data.value;
    }

    return result;
  };

  const getCake = async (cakeSlug: string) => {
    const result = await useFetch("/api/cakes/get-cake", {
      method: "POST",
      body: {
        slug: cakeSlug,
      },
    });

    if (result.status.value === "success") {
      cake.value = result.data.value;
      // console.log(result.data.value[0]);
    }

    return result;
  };

  return {
    cakes,
    cake,
    loadCakes,
    getCake,
  };
});
