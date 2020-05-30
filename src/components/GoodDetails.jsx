import React, { Component } from 'react';
import axios from 'axios';
import good_img from '../img/nf.png'
import Comments from './Comments'

class GoodDetails extends Component {
    state = {
        good: null
    }
    
    componentDidMount() {
        axios.get(`http://192.168.1.103:8000/good/${this.props.match.params.good_id}`)
        .then(res => {
            this.setState({
                good: res.data
            })
        })
        .catch(res => {
            alert("Sorry, error loading good details.")
            console.log(res);
        })
    }

    addToCart = (id) => {
        if (localStorage.getItem("cart") === null || localStorage.getItem("cart") === "") {
            localStorage.setItem("cart", JSON.stringify([]))
        }

        let cart = JSON.parse(localStorage.getItem("cart"));
        if (cart.includes(id)) {
            return;
        } else {
            cart.push(id)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }

    addToCompare = (id) => {
        if (localStorage.getItem("compare") === null || localStorage.getItem("cart") === "") {
            localStorage.setItem("compare", JSON.stringify([]))
        }

        let compare = JSON.parse(localStorage.getItem("compare"));
        if (compare.includes(id)) {
            return;
        } else {
            compare.push(id)
            localStorage.setItem("compare", JSON.stringify(compare))
        }
    }

    render() {
        if (this.state.good) {

            let stars = ""
            for (let i = 0; i < this.state.good.rate; i++) {
                stars += " ★ "
            }

            return (
                <div className="good_details">
                    <div className="details_preview">
                        <img src={good_img} alt=""></img>
                        <button onClick={() => this.addToCart(this.state.good.id)}>Add to cart</button>
                        <button onClick={() => this.addToCompare(this.state.good.id)}>Add to compare</button>
                        <button>Like</button>
                    </div>
                    <div className="details_details">
                        <h2>{this.state.good.naming}</h2>
                        <span>{stars}</span>
                        <span>Manufacturer: {this.state.good.country}</span>
                        <span><b>{this.state.good.price}$</b> per one</span>
                        <span className="details_description">
                            Desctiprion:<br/>
                            {this.state.good.description}
                        </span>
                    </div>
                    <Comments good={this.props.match.params.good_id}/>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Loading data...</h2>
                </div>
            )
        }
    }
}

export default GoodDetails;
