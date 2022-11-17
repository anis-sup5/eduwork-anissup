import React from "react";

export default class Variable extends React.Component {
    state = {
        a: null,
        b: 0,
        c: '',
        d: true

    }

    render(){
        return(
            <div>
                <div>a: {this.state.a}</div>
                <div>b: {this.state.b}</div>
                <div>c: {this.state.c}</div>
                <div>d: {this.state.d}</div>
                <div>e: {this.props.e}</div>
            </div>
        )
    }
}