import React from "react";
import * as Validator from 'validatorjs';


const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label>{label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}
const ShowErrors = ({errors}) => {
    return(
        <div style={{color: 'red'}}>
            {
                // <p>test</p>
                errors.map((error, i)=> <p key={i}>{error}</p>)
            }
        </div>
    )
}

export default class Validation extends React.Component{
    state = {
        email: '',
        password: '',
        errors: []
    }
    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);

        //validation
        const {email, password} = this.state;
        // let message = [];
        // if(email.length === 0){
        //     message = [...message, 'Email tidak boleh kosong']
        // }
        // if(password.length === 0){
        //     message = [...message, 'Password tidak boleh kosong']
        // }
        // const regex = /^(([^<>()[]\\.,;:\s@]+(\.[^<>()[]\\.,;:\s@]+)*)|(.+))@(([[0-9]{1,3}​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if(!regex.test(String(email).toLowerCase())) {
        //     message = [...message, 'email tidak valid'];
        // }

        // if(password.length < 8){
        //     message = [...message, 'password terlalu pendek']
        // }

        // if(message.length > 0){
        //     this.setState({
        //         errors: message
        //     }, () => console.log(this.state.errors))
        // }else{
        //     alert(`
        //             nama: ${this.state.email}
        //             jurusan: ${this.state.password}
        //     `);
        //     this.setState({
        //         errors: []
        //     })
        // }
        let data = {email, password };

        let rules = {
            email: 'required|email',
            password: 'min:8|required'
        };

        let validation = new Validator(data, rules);
        validation.passes();
        // console.log(validation.errors.all());
        this.setState({
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password')
            ]
        })
    }
    
    render(){
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }
       
        return(
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h4>Login Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="email" label="Email" 
                        onChange={value => this.setState({email: value})}/>
                    <Input type="password" name="password" label="Password" 
                        onChange={value => this.setState({password: value})}/>
                    <br />
                    <button type="submit">LogIn</button>
                </form>
            </div>
        )
    }
}