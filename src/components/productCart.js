import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteFromCart } from "../redux/cartReducer";


const ProductCart = () => {
    const cartProducts = useSelector((state) => state.cart.products);
    const dispatch1 = useDispatch()


    const removeFromCartHandler = (productId) => {
        dispatch1(deleteFromCart(productId));
        toast.error('Product removed successfully', { autoClose: 2000 });
    };


    return(

    <>
    <ToastContainer />
        <section className="w-100">
            <div className="container">
                <div className="row">
                    {cartProducts.length > 0 ? cartProducts.map((pro)=>
                        <div key={pro.id}>
                            <div className="border-1 border border-black rounded-3 my-3 product-cart-in">
                                <div className="col-12 row">
                                    <div className="col-lg-6 col-12 mx-auto my-auto">
                                        <img className="w-75 h-75 mx-5 my-4 my-lg-auto" src={pro.img} />
                                    </div>
                                    <div className="col-lg-6 col-12 mx-3 mx-lg-auto">
                                        <div className="py-3 h-100 d-flex flex-column justify-content-between">
                                            <h1>{pro.name} ({pro.type})</h1>
                                            <p>{pro.des}</p>
                                            <p className="bg-success w-fit px-4 py-2 text-white rounded-3">Price: {pro.price}$</p>
                                            <div className="text-right">
                                                <button onClick={()=>{removeFromCartHandler(dispatch1(deleteFromCart({
                                                    id:pro.id
                                                })))}} className="bg-danger border-0 text-white rounded-2 py-2 px-3">Remove From Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <div className="col-12">
                        <h1 className="position-absolute top-50 start-50 translate-middle">Cart Is Empty</h1>
                    </div>
                    }
                </div>
            </div>
        </section>
    </>
    
)
};

export default ProductCart;
