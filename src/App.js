import {Route, BrowserRouter} from 'react-router-dom'
import ProductList from './Components/ProductList'
import ThankyouPage from "./Components/ThankyouPage"
import CartDetails from "./Components/CartDetails"


import './App.css'

const App = () => {
    return(
        <BrowserRouter>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/thankyou" component={ThankyouPage} />
        <Route exact path="/cart" component={CartDetails} />
        
        </BrowserRouter>
    )
}
export default App