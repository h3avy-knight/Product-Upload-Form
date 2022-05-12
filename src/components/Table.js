import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../features/appProduct/productSlice';
const Table = () => {
  const data = useSelector((state) => state.productSliceReducer.value);
  const dispatch = useDispatch();

  return (
    <div>
      <hr />
      <table className='table py-2'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Price</th>
            <th scope='col'></th>
          </tr>
        </thead>
        {data.map((el) => (
          <tbody style={{ padding: '50px' }} key={el.id}>
            <tr style={{ alignItems: 'center' }}>
              <td>
                <img style={{ width: '40px' }} src={el.image} alt='' />
              </td>
              <td>
                <p
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                  }}
                >
                  {el.name}
                </p>
              </td>
              <td>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  {el.desc}
                </p>
              </td>
              <td>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  {el.price}
                </p>
              </td>
              <td>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#170CBD',
                    cursor: 'pointer',
                  }}
                  onClick={() => dispatch(deleteProduct(el))}
                >
                  Remove
                </p>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
