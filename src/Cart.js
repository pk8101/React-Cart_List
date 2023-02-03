import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component
{
    constructor()
    {
        super();
        this.statis={
            products:[{
                price:9999,
                title:'phone',
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

            ],
            
        }
    }
    
       render()
       {
        const{products}=this.statis;
        return(
            
            <div className="cart">
              {
                products.map((product) => {
                    return <CartItem product={product} 
                                     key={product.id}/>;
                    
                })
                
            }
            </div>
        )
        }       
}
export default Cart;

