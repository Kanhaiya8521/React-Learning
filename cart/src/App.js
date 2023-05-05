import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import  {db} from './index';
import { collection, getDocs } from "firebase/firestore"; 

class App extends React.Component {

  constructor () {
    super() ;
    this.state = {
        products: [
        ],
        loading: true
    }
}

async componentDidMount () {

  const querySnapshot = await getDocs(collection(db, "products"));
  console.log('querySnapshot', querySnapshot);
  const products = querySnapshot.docs.map((doc) => {
    // console.log(doc);
    return {
      ...doc.data(), 
      id: doc.id
    }
  })
  this.setState({
    products: products,
    loading: false
  })
}
handleIncreaseQuantity = (product) => {
    console.log('Hey increase the qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1 ;

    this.setState({
        products: products
    })

}

handleDecreaseQuantity = (product) => {
    console.log('Hey decrease the qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty -= 1 ;
    if(products[index].qty >= 0)
    this.setState({
        products: products
    })
}

handleDeleteQuantity = (id) => {
    const { products } = this.state;
    const items = products.filter( (product) => (product.id !== id));
    this.setState({
        products: items
    })
}

getCartCount = () => {
  const {products} = this.state;
  let count = 0 ;
  products.forEach( (product) => {
    count += product.qty;

  })
  return count;
}

getCartTotal = () => {
  const { products } = this.state;
  let cartTotal = 0 ;
  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price;
  })
  return cartTotal;
}

render() {
    const { products, loading } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteQuantity={this.handleDeleteQuantity} 
        />
        {loading && <h1> Loading products...</h1>}
        <div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }

}
  

export default App;
