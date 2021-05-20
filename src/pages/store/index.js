import React from 'react';
import Layout from '../../components/Layout';
import './login.css'
import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store"  description="This is the Store page" >
            <div >
                <div className="text-center mt-5" id="login-cont">
                    <h1>Buy Meals</h1>
                    <p>Healthy Affordable Meals</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;