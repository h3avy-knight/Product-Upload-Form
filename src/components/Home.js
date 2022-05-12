import React from 'react';
import { useSelector } from 'react-redux';
const Home = () => {
  const data = useSelector((state) => state.productSliceReducer.value);

  return (
    <div className='card-container'>
      {data.map((el) => (
        <div key={el.id}>
          <div className='product__card'>
            <div className='image'>
              <img src={el.image} className='card-img-top' alt='poduct' />
            </div>
            <div className='product__info'>
              <div className='left'>
                <div className='description'>
                  <p>{el.name}</p>
                </div>
                <div className='description'>
                  <p>{el.desc}</p>
                </div>
              </div>
              <div className='right'>
                <h1>{el.price}:-</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
