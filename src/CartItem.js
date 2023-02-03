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
    increaseQty=()=> {
        console.log('this.state',this.statis);
        //this.statis.qty=this.statis.qty;
        this.statis.qty++;
    }
    decreaseQty=()=> {
        console.log('this.state',this.statis);
        //this.statis.qty=this.statis.qty;
        var x=this.statis.qty;
        x--;
        this.statis.qty=x;

    }
    deleteQty=()=> {
        console.log('this.state',this.statis);
        // this.statis.qty=this.statis.qty;
        this.statis.qty=0;
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
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={this.increaseQty}/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={this.decreaseQty}/>
                        <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" onClick={this.deleteQty}/>

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