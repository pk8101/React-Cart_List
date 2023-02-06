import React from "react";
const CartItem=(props)=>
{
    const{price,title,qty}=props.product;
    const{product,increaseQty,decreaseQty,deleteQty}=props
       
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
                </div>
            <div className="right-block">
                <div  style={{fontSize:25}}>{title}</div>
                <div style={{color:"grey"}}>PRICE:{price}</div>
                <div style={{color:"grey"}}>QTY:{qty}</div>
                    <div className="cart-item-action">
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={()=>increaseQty(product)}/>
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={()=> decreaseQty(product)}/>
                    <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" onClick={()=>deleteQty(product.id)}/>

                </div>
            </div>
        </div>
        )
    
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