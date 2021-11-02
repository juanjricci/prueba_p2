import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Cart extends Component {

    state = {
        productos_carro: [],
        quantity: 1,
    }

    async componentDidMount() {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/productos-comprados/');
            console.log(res)
            this.setState({ productos_carro: res.data });
            console.log(this.state.productos_carro)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    sum = this.state.productos_carro.reduce(function (prev, current) {
        return prev + +current.precio
    }, 0);

    render() {
        return (
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col" className="text-center">Quantity</th>
                                        <th scope="col" className="text-right">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.productos_carro.map(
                                            (producto) =>
                                                <tr>
                                                    <td><a className="link-secondary" href="/id">{producto.nombre}</a></td>
                                                    <td><input type="text" className="form-control" id="quantityInput" value="1" onChange={(e) => this.setState({quantity: e.target.value})} /></td>
                                                    {console.log(this.state.quantity)}
                                                    <td className="text-right">{producto.precio}</td>
                                                    <td className="text-right"><button className="btn btn-sm btn-danger">Eliminar</button></td>
                                                </tr>
                                        )
                                    }
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Total</strong></td>
                                        <td className="text-right"><strong>${this.sum}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="row">
                            <div className="col-sm-12  col-md-6">
                                <Link to="/">
                                    <button className="btn btn-block btn-light">
                                        Continue Shopping
                                    </button>
                                </Link>
                            </div>
                            <div className="col-sm-12 col-md-6 text-right">
                                <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

