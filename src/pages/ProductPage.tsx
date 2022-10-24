import { useContext } from 'react';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import {Product} from '../components/Product'
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useProducts } from '../hooks/products';
import { IProduct } from '../moduls';
import { ModalContext } from '../context/ModalContext';

export function ProductPage() {
  const{loading, products, error, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
    {loading && <Loader/>}
    {error && <Error error={error} />}
   {products.map(product => <Product product={product} key = {product.id}/>)}
   {modal && <Modal title='Create new product' onClose ={close}>
     <CreateProduct onCreate={createHandler}/>
   </Modal>}
   <button 
   className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2'
   onClick={open}
   >
    Добавить продукт</button>
   </div>
  );
}
