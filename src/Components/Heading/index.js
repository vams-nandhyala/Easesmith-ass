import {Component} from 'react'
import TabItem from '../TabItem'
import { GoPerson } from "react-icons/go";
import { LiaShoppingCartSolid } from "react-icons/lia";

import './index.css'

const tabsList = [
    {tabId: 'HOME', displayText: 'Home'},
    {tabId: 'PLANTS&POTS', displayText: 'Plants & Pots'},
    {tabId: 'TOOLs', displayText: 'Tools'},
    {tabId: 'OURSERVICES', displayText: 'Our Services'},
    {tabId: 'BLOG', displayText: 'Our Services'},
    {tabId: 'OURSTORY', displayText: 'Our Story'},
    {tabId: 'FAQS', displayText: 'FQAs'},
  ]

class Heading extends Component{
    state={
        activeTabId: tabsList[0].tabId,
    }
    setActiveTabId = tabId => {
        this.setState({activeTabId: tabId})
      }
    render(){
        const {activeTabId}=this.state
        return (
            <div className="main_header">
                <div className="green_header_bg">
                    <h1 className="free_shipping_heading">Free Shipping on orders above 999/-</h1>
                    <h1 className="contact">Call us on: +91 98768 05120</h1>
                </div>
                <div className="header">
                    <div className="logo_container">
                        <img className="logo_img" alt="company-logo" src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"/>
                        <h1 className="chaperone">Chaperone</h1>
                    </div>
                    <div className="tabs_container">
                        <ul className="tabs-list">
                            {tabsList.map(eachTab=>(
                                <TabItem 
                                key={eachTab.tabId}
                                tabDetails={eachTab}
                                setActiveTabId={this.setActiveTabId}
                                isActive={activeTabId === eachTab.tabId}/>
                                ))}

                        </ul>
                    </div>
                    <div className="profile_and_cart_container">
                        <div className="profile_container">
                        <GoPerson />
                        <h1 className="my_profile" >My Profile</h1>
                        </div>
                        
                        <div className="cart_container">
                            <div className="cart_and_cart_count">
                            <LiaShoppingCartSolid className="cart_icon" />
                            <div className="cart_num">
                                <p className="cart_item_nums">0</p>
                            </div>
                            </div>
                        <h1 className="cart" >Cart</h1>
                        </div>
                    </div>
                    
                    

                </div>
            </div>
        )
    } 
}
export default Heading