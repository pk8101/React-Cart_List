import React from "react";
class CartItem extends React.Component
{
    constructor()
    {
        super();
        this.statis={
            price:999,
            title:'phone',
            qty: 1,
            img:''
        }
    }
    render()
    {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div  style={{fontSize:25}}>{this.statis.title}</div>
                    <div style={{color:"grey"}}>{this.statis.price}</div>
                    <div style={{color:"grey"}}>{this.statis.qty}</div>
                    <div className="cart-item-action">
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                        <img alt="decrease" className="action-icons" src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"/>
                        <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"/>

                    </div>
                </div>
            </div>
        )
    }
}
export default CartItem;

const styles={
    image :{
        height:110,
        width:110,
        borderRadius:4,
        background:'grey'
    }
}