import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { Product } from '../interfaces/interfaces';
import { products } from '../data/products';

export interface ProductInCart extends Product {
  count: number;
}

const product = products[0];

const ShoppingPage = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1> Shopping store </h1>
        <hr />
      </div>

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {
          // JS Fragment
          ({ count, increaseBy, isMaxCountReached, reset }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
