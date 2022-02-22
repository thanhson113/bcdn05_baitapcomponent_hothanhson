import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner py-3">
                <div className="card text-left">
                    <div className="card-body">
                        <h1 className="card-title">A Warm welcome !</h1>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Call to action</a>
                    </div>
                </div>
            </div>
        )
    }
}
