import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from "react-router-dom";
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render(){
        return(
            <ProductConsumer>
                {(value) =>{
                    const {id, size, img, info, price, title, inCart} =
                    value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>{title}</h1>
                                    <h4 className="text-green">
                                        <strong>
                                            Size : <span>
                                            {size}</span>
                                        </strong>
                                    </h4>
                                    <h4 className="text-green">
                                        <strong>
                                            price : <span>$ </span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        about the product: 
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div >
                                        <Link to = "/">
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        cart
                                        disabled={inCart ?true:false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}