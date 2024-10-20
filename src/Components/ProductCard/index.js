import {Component} from 'react'
import {Link} from 'react-router-dom'
import { CiHeart } from "react-icons/ci";


import "./index.css"

class  ProductCard extends Component{
    state={
        quantity: 1,
        cartitemsList:[]
    }
    onDecrementQuantity = () => {
        const {quantity} = this.state
        if (quantity > 1) {
          this.setState(prevState => ({quantity: prevState.quantity - 1}))
        }
      }
    
      onIncrementQuantity = () => {
        this.setState(prevState => ({quantity: prevState.quantity + 1}))
      }
    render(){
    const {productDetails,addItemTocart,quantity}=this.props
    const {
        productName,
        productImg,
        productDescription,
        ratingImg,
        rating,
        mrpPrice,
        offerPrice}=productDetails
        const onClickAddToCart = () => {
           addItemTocart(productDetails,quantity)
            
        }
  
    return(
        
        <li className="product-item">
            <div className="product_img_container">
                <CiHeart className="wish_list_img"/>
                <img className="product_img" src={productImg} alt={productName}/>
                <Link to="/thankyou">
                <button className="btn_view_product">View Product</button>
                </Link>
            </div>
            <div className="product_details_container">
                <h1 className="product_name">{productName}</h1>
                <p className="product_description">{productDescription}</p>
                <div className="rating_container">
                    <img className="rating_img" src={ratingImg} alt={rating}/>
                    <p className="rating">{rating}</p>
                </div>
                <div className="price_container">
                    <h1 className="mrp_price">₹ {mrpPrice}</h1>
                    <h1 className="offer_price">₹ {offerPrice}</h1>
                </div>
                <div className="product_card_button_container">
                    <div className="addcart_btn_container">
                        <button  className="decrease_count"  
                        onClick={this.onDecrementQuantity}
                        data-testid="minus">-</button>
                        <Link to="cart">
                        <button className="add_cart" onClick={onClickAddToCart}>Add Cart</button>
                        </Link>
                        <button  className="increase_count"
                         onClick={this.onIncrementQuantity}
                         data-testid="plus">+</button>
                    </div>
                    <button className="rent_btn">Buy on Rent</button>


                </div>

            </div>
            
        </li>
        
    )
    
}
}
export default ProductCard