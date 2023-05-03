import React from 'react';
// import './index.css';
import delete1 from './images/delete.svg';
import plus from './images/plus.svg';
import minus from './images/minus.svg';


class CartItem extends React.Component {
    // constructor () {
    //     super() ;
    //     this.state = {
    //         price: 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img: ''

    //     }
    //     // this.testing();
    //     // this.increaseQuality = this.increaseQuality.bind(this);
    // }
    /*
    testing () {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');

            }, 5000);
        })

        promise.then (() => {
            this.setState({qty: this.state.qty + 10 });
            this.setState({qty: this.state.qty + 10 });
            this.setState({qty: this.state.qty + 10 });

            console.log(this.state.qty);
        })
    }

    */

    // increaseQuality = () => {
    //     // this.state.qty += 1 ;
    //     // console.log(this.state.qty);
    //     // setState form 1
    //     // this.setState({
    //     //     qty: this.state.qty + 1,
    //     // })

    //     // setState form 2
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     })
    // }

    // decreaseQuality = () => {
    //     console.log('this.props.product.qty', this.props.product.qty);
    //     if(this.props.product.qty > 0)
    //     this.setState({
    //         qty: this.props.product.qty - 1,
    //     })
    // }

    render () {
        // console.log('this.state.product', this.state.product);
        const {price, title, qty} = this.props.product ;
        console.log('this.props');
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>

                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-action">
                        {/* first way */}
                        {/* <img alt='increase' className="action-icons" src={plus} onClick={this.increaseQuality.bind(this)} /> */}
                        <img alt='increase' className="action-icons" src={plus} onClick={() => this.props.onIncreaseQuantity(this.props.product)} />

                        <img alt='decrease' className="action-icons" src={minus} onClick={() => this.props.onDecreaseQuantity(this.props.product)} />
                        <img alt='delete' className="action-icons" src={delete1} />

                    </div>
                </div>

            </div>

        );
    }
}

const styles = {
    image2: 30,
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;