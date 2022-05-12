import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/appProduct/productSlice';
import Table from './Table';
import { v4 as uuidv4 } from 'uuid';

const UploadForm = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        id: uuidv4(),
        name,
        price,
        desc,
        image: URL.createObjectURL(selectedImage),
      })
    );
    setName('');
    setPrice('');
    setDesc('');
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='py-3'>
        <div className='row'>
          <div className='col-6'>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Product name
              </label>
              <input
                type='text'
                required
                value={name}
                placeholder='Enter product name'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Product Description
              </label>
              <div className='form-floating'>
                <textarea
                  className='form-control'
                  value={desc}
                  required
                  placeholder='Enter description'
                  onChange={(e) => setDesc(e.target.value)}
                  id='floatingTextarea2'
                  style={{ height: '100px' }}
                />
              </div>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
          <div className='col-6'>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Price
              </label>
              <input
                type='text'
                required
                placeholder='Enter Price'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Product Image
              </label>
              <input
                type='file'
                required
                accept='image/png image/jpg'
                onChange={imageChange}
                className='form-control file-input'
                id='inputGroupFile04'
                aria-describedby='inputGroupFileAddon04'
                aria-label='Upload'
              />
            </div>
          </div>
        </div>
      </form>
      <Table />
    </div>
  );
};

export default UploadForm;
