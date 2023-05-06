import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import  {db} from './index';
import { collection, onSnapshot, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore"; 

class App extends React.Component {

  constructor () {
    super() ;
    this.state = {
        products: [
        ],
        loading: true
    }
}

componentDidMount () {
  onSnapshot(collection(db, "products"), (querySnapshot) => {
    const products = querySnapshot.docs.map((doc) => {
      // console.log('doc.id', doc.data());
      // this.setState({
      //   products: [...this.state.products, {...doc.data(), id: doc.id}]
      // })
         return {
          ...doc.data(), 
          id: doc.id,
        }
    });
    // console.log(products);
    this.setState({
      products: products,
      loading: false
    })
  })
}
handleIncreaseQuantity = async(product) => {
    console.log('Hey increase the qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    console.log('products[index].qty+1', products[index].id);
    // products[index].qty += 1 ;
    await updateDoc(doc(db, "products", products[index].id), {
      qty: products[index].qty + 1 
    })

    // this.setState({
    //     products: products
    // })

}

handleDecreaseQuantity = async(product) => {
    console.log('Hey decrease the qty');
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty -= 1 ;
    if(products[index].qty > 0){
      await updateDoc(doc(db, "products", products[index].id), {
        qty: products[index].qty - 1
      })
    }
    else{
      return;
    }
}

handleDeleteQuantity = async(id) => {
    const { products } = this.state;
    await deleteDoc(doc(db, "products", id));
    // const items = products.filter( (product) => (product.id !== id));
    // this.setState({
    //     products: items
    // })
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

addProduct = async(e) => {
  console.log('Data has been added');
  await addDoc(collection(db, "products"), {
    title: "Washing Machine",
    qty: 1,
    img: 'https://www.sansuiworld.com/images/washingmachine/front-load.png',
    price: 1299,
  });
  // console.log('products', products);
  // this.setState({
  //   products: products,
  //   id: products.id,
  // })
}

render() {
    const { products, loading } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding: 20, fontSize: 25}}>Add a product</button>
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
