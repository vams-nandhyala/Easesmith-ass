import {Link} from 'react-router-dom'
import "./index.css"

const CartDetails=()=>{
        return (
        
        <div className="bg_container">
             
        <div className="cart_card_bg">
            <button className="cancel_btn">X</button>
            <h1 className="your_cart">Your Cart</h1>
            <hr className="line"/>
            <h1 className="congratulations">Congratulations Order Placed!</h1>
            <img className="pot" alt="pot" src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg__"/>
            <p className="para">Thank you for choosing Chaperone services.
            We will soon get in touch with you!</p>
            <div className="cotinue_container">
            <Link to="/">
                <button className="cotinue_btn">cotinue shopping</button>
            </Link>
            </div>
        </div>
        </div>
        )
}

export default CartDetails