import React, { useContext } from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {

    const { total, totalItems, cartItems } = useContext(CartContext);
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <p className="mb-1">Total Items</p>
                            <h4 className="m-3 txt-right">{totalItems}</h4>
                            <p className="mb-1">Total Payment</p>
                            <h3 className="m-0 txt-right">{total}</h3>
                        </div>
                    }
                    
                </div>

            </div>
        </Layout>
     );
}
 
export default Cart;