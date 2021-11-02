import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Navigation extends Component {

    state = {
        productos: [],
        counter: 0,
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/productos-comprados');
        this.setState({ productos: res.data });
        console.log(this.state.productos)
        this.setState({ counter: res.data.length})
        console.log(this.state.counter)
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            Products App
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart"><span className="badge badge-primary">{this.state.counter}</span>Cart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Log In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
