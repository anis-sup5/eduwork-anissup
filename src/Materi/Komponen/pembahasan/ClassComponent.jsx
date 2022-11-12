import React from "react";
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
    // constructor(state){
    //     super(state)
    //     this.state = {
    //         value: 0
    //     }
    //     this.handlePlus = this.handlePlus.bind(this)
    //     this.handleMinus = this.handleMinus.bind(this)
    // }

    // tanpa menggunakan constructor
    state = {
        value: 0
    }

    // jika  harus menggunakan binding
    // handlePlus(){
    //     this.setState({value: this.state.value +1});
    // }
    // handleMinus(){
    //     if(this.state.value > 0){
    //         this.setState({value: this.state.value -1});
    //     }
    // }

    // tanpa menggunakan binding harus dengan arrow function
    handlePlus = () =>{
        this.setState({value: this.state.value +1})
    }
    handleMinus = () =>{
        if(this.state.value > 0){
            this.setState({value: this.state.value -1})
        }
    }

    render(){
        return (
            <div>
                <h1>Class ini dibuat dengan class component</h1>
                <h1>Hallo World {this.props.nama}</h1>
                <button onClick={this.handleMinus}>-</button>
                <span>{' '}{this.state.value}{' '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

ClassComponent.propTypes = {
    nama: PropTypes.string.isRequired
}

export default ClassComponent;