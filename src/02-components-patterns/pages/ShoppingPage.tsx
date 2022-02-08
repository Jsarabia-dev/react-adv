import { useState } from 'react';

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export interface ProductInCart extends Product {
  count: number;
}

const ShoppingPage = (): JSX.Element => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1> ShoppingPage </h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className={'bg-dark text-white'}
              onChange={(event) => onProductCountChange(event)}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage
                className={'custom-image'}
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              />
              <ProductTitle className={'text-white text-bold'} />
              <ProductButtons className={'custom-buttons'} />
            </ProductCard>
          );
        })}

        <div className={'shopping-cart'}>
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              className={'bg-dark text-white'}
              style={{ width: '100px' }}
              key={key}
              product={product}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductImage
                className={'custom-image'}
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              />
              <ProductButtons
                className={'custom-buttons'}
                style={{ display: 'flex', justifyContent: 'center' }}
              />
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
