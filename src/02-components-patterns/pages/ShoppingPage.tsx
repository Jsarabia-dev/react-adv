import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../components';

const product = {
  id: '1',
  // img: './coffee-mug.png',
  title: 'title1',
};

const ShoppingPage = () => {
  return (
    <div>
      <h1> ShoppingPage </h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductImage img={ './coffee-mug.png' }/>
          <ProductTitle title={'new title'}/>
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  );
};

export default ShoppingPage;
