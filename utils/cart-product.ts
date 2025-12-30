export interface ICart {
  id: number;
  slug: string;
  image: string;
  name: string;
  price: number;
  weigth: number;
  count: number;
}

export const cartProduct = (product: ICart) => {
  const hasProduct = {
    id: product.id,
    slug: product.slug,
    image: product.image,
    name: product.name,
    price: product.price,
    weigth: product.weigth,
    count: 1,
  };

  return hasProduct;
};
