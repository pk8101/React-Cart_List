import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component
{
    constructor()
    {
        super();
        this.state={
            products:[{
                price:9999,
                title:'Mobile Phone',
                qty: 1,
                img:'',
                id:1
            },
            {
                price:99,
                title:'earphones',
                qty: 1,
                img:'',
                id:2
            },
            {
                price:990,
                title:'powerbank',
                qty: 1,
                img:'',
                id:3
            }

            ]
            
        }
    }
    increasehandleQuantity=(product)=>
    {
        const{products}=this.state;
        const index =products.indexOf(product);
        products[index].qty+=1;
        this.setState({products:products})

    }
    decreasehandleQuantity=(product)=>
    {
        const{products}=this.state;
        const index =products.indexOf(product);
        if(products[index].qty===0)
        {
            return;
        }
        else{
            products[index].qty-=1;
            this.setState({
                products
            })
        }
        
    }
    deleteQuantity=(id) =>{
        const{products}=this.state;
        const items =products.filter(
            (items)=>items.id!==id);
        this.setState({
            products:items
        })
       
    }
    
       render()
       {
        const{products}=this.state;
        return(
            
            <div className="cart">
              {
                products.map((product) => {
                    return <CartItem product={product} 
                                     key={product.id}
                                     increaseQty={this.increasehandleQuantity}
                                     decreaseQty={this.decreasehandleQuantity}
                                     deleteQty={this.deleteQuantity}/>;
                    
                })
                
            }
            </div>
        )
        }       
}
export default Cart;

