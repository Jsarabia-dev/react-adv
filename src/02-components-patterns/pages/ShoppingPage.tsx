import {
  ProductCard,
  ProductImage,
  ProductButtons,
  ProductTitle,
} from '../components';
import '../styles/custom-styles.css';

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product} className={'bg-dark text-white'}>
          <ProductCard.Image
            img={'./coffee-mug.png'}
            className={'custom-image'}
          />
          <ProductCard.Title
            title={'new title'}
            className={'text-white text-bold'}
          />
          <ProductCard.Buttons className={'custom-buttons'} />
        </ProductCard>

        <ProductCard product={product} className={'bg-dark text-white'}>
          <ProductImage
            img={'./coffee-mug.png'}
            className={'custom-image'}
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle
            title={'new title'}
            className={'text-white text-bold'}
          />
          <ProductButtons className={'custom-buttons'} />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
          <ProductImage
            img={'./coffee-mug.png'}
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
