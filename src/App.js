import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
    constructor()
    {
        super();
        this.state={
            products:[{
                price:9999,
                title:'Mobile Phone',
                qty: 1,
                img:'https://i.pinimg.com/736x/0d/e6/2f/0de62fccb81c266407595062888b5c40--product-design-to-create.jpg',
                id:1
            },
            {
                price:99,
                title:'earphones',
                qty: 1,
                img:'https://images-na.ssl-images-amazon.com/images/G/01/musical-instruments/detail-page/B002DP1FTU_15.jpg',
                id:2
            },
            {
                price:990,
                title:'powerbank',
                qty: 1,
                img:'https://th.bing.com/th/id/R.b75450189d7066eb0e206448929855c7?rik=U9Va%2bzKxKw1EJA&riu=http%3a%2f%2fwww.gadgetdetail.com%2fwp-content%2fuploads%2f2016%2f10%2fXiaomi-10000-mAh-power-bank.jpg&ehk=%2fBXL2Weime6DAmbS%2bJnsiounJpXTbWLXVoF2Fq0x4uU%3d&risl=&pid=ImgRaw&r=0',
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
    //added
    deleteQuantity=(id) =>{
        const{products}=this.state;
        const items =products.filter(
            (items)=>items.id!==id);
        this.setState({
            products:items
        })
       
}
getCount=()=>{
    const{products}=this.state;
    let count=0;
    products.forEach((product)=>{
        count+=product.qty;

    })
    return count;
}
totalPrice=()=>{
    const{products}=this.state;
    let i=0;
    products.map((product)=>{
        i=i+product.qty*product.price;
    }
    )
    return i;
}
    render()
    {
        const{products}=this.state
        return (
            <div className="App">
                <Navbar count={this.getCount()}/>
                <Cart
                 products={products}
                 increaseQty={this.increasehandleQuantity}
                 decreaseQty={this.decreasehandleQuantity}
                 deleteQty={this.deleteQuantity}/>
                 <div style={{padding: 10 ,fontSize:20 ,fontWeight:800}}>Total Price:{this.totalPrice()}</div>
            </div>
          );
        }
    }
  

export default App;
