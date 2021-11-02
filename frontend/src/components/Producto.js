import React, { Component } from 'react'

const producto = {
    idProductoOriginal: 1,
    nombre: 'Esponja',
    descripcion: 'Esponja para lavar los platos',
    precio: 200,
}

export default class Producto extends Component {

    render() {
        return (
            <div className="container p-4">
                <div className="card mx-auto" style={{width: '50rem'}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{producto.nombre}</h5>
                    <p className ="card-text">{producto.descripcion}</p>
                    <a href="/" className ="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        )
    }
}
