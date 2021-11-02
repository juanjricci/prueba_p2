import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class PruebaProds extends Component {

    state = {
        productos: [],
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/productos');
        this.setState({ productos: res.data });
        console.log(this.state.productos)
    }

    handleClick(descripcion, nombre, precio, idProductoOriginal) {
        const data = JSON.stringify({ idProductoOriginal, descripcion, nombre, precio, cantidad: 1 })
        console.log(data);
        try {
            axios.post('http://localhost:8000/api/productos-comprados/', data, {
                headers: {
                    // Overwrite Axios's automatically set Content-Type
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }


    render() {
        return (
            <div className="container p-4">
                <h1>Productos</h1>
                <h2>Lista de Productos</h2>
                <ul className="list-group">
                    {
                        this.state.productos.map(
                            (producto) =>
                                <li className="list-group-item d-flex justify-content-between align-items-start" key={producto._id}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">
                                            <Link to={`/producto/${producto._id}`}>{producto.title}</Link>
                                        </div>
                                        ${producto.precio}
                                    </div>
                                    <button type="button" onClick={(e) => this.handleClick(producto.description, producto.title, producto.precio, 1)} className="btn btn-success">Add to cart</button>
                                </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}