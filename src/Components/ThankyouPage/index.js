import {Link} from 'react-router-dom'
import "./index.css"

const ThankyouPage=()=>{
        return (
        <div className="main_bg_container">
        <div className="thankyou_card_bg">
                <h1 classNamwe="thanks">Thank you for Shopping</h1>
                <Link to="/">
                <button className="cotinue_shopping_btn">cotinue shopping</button>
                </Link>

        </div>
        </div>
        )
}

export default ThankyouPage