import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class BaiTapComponent extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Body />
                <Footer />
            </div>
        )
    }
}
