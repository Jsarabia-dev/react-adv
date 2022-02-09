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
import styles from '../styles/styles.module.css';

export interface ProductInCart extends Product {
  count: number;
}

const product = products[0];

const ShoppingPage = (): JSX.Element => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <div>
        <h1> Shopping store </h1>
        <hr />
      </div>

      <ProductCard
        className={'bg-dark text-white'}
        key={product.id}
        product={product}
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {
          // JS Fragment
          ({
            /* Unused args
            product,
            maxCount,
            ,*/
            count,
            increaseBy,
            isMaxCountReached,
            reset,
          }) => (
            <>
              <ProductImage
                className={'custom-image'}
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              />
              <ProductTitle className={'text-white text-bold'} />
              <ProductButtons className={'custom-buttons'} />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}> -2 </button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>{count}</span>
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
