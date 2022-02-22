import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class Body extends Component {
    render() {
        return (
            <div className="body container">
                <Banner />
                <div className="item__list">
                    <div className="row">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        )
    }
}
