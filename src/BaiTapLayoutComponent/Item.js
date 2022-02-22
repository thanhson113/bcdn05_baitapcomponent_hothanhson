import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="col-3 py-3">
                <div className="card">
                    <img src="https://i.picsum.photos/id/558/200/200.jpg?hmac=tFHyh9KzOASFBog3Hpj6oSkBkBr90f67Yuejl0XnFDM" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
