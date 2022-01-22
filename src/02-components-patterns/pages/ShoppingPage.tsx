import ProductCard from '../components/ProductCard';

const product = {
  id: '1',
  img: './coffee-mug.png',
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
        <ProductCard product={ product }/>
        <ProductCard product={ product }/>
        <ProductCard product={ product }/>
        <ProductCard product={ product }/>
        <ProductCard product={ product }/>
      </div>
    </div>
  );
};

export default ShoppingPage;
