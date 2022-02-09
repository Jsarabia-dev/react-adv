import React, { createContext } from 'react';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/interfaces';

export interface Props {
  product: Product;
  children?: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props): JSX.Element => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      product,
      onChange,
      value,
      initialValues,
    });
  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {
          // JS Fragment
          children &&
            children({
              count: counter,
              isMaxCountReached,
              maxCount: initialValues?.maxCount,
              product,
              increaseBy,
              reset,
            })
        }
      </div>
    </Provider>
  );
};
