import { useState } from 'react';
import { ProductInCart } from '../pages/ShoppingPage';
import { Product } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prevState) => {
      /*      Form 1
      if (count === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [product.id]: toDelete, ...rest } = prevState;
        return { ...rest };
      }
      return {
        ...prevState,
        [product.id]: { ...product, count },
      };*/

      // Form 2
      const productInCart: ProductInCart = prevState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prevState,
          [product.id]: productInCart,
        };
      }

      // Delete product
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [product.id]: toDelete, ...rest } = prevState;
      return { ...rest };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
