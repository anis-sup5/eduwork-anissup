import React  from "react";
import Validator from "validatorjs";

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

const Showerrors = ({errors}) => {
    return(
        <div style={{color: 'red'}}>
            {/* <p>test</p> */}
            {
                errors.map((error, i)=> <p key={i}>{error}</p>)
            }
        </div>
    )
}



export default class Registration extends React.Component{
    state ={
        nama: '',
        email: '',
        password: '',
        noHp: '',
        errors: []
    }

    handleRegist = event => {
        event.preventDefault();
        const {nama, email, password, noHp} = this.state;
        let data = {nama, email, password, noHp};
        let rules ={
            nama: 'required',
            email: 'required|email',
            password: 'min:8|required',
            noHp: 'min:11|max:13|required'
        };
        let validation = new Validator(data,rules);
        validation.passes();
        this.setState({
            errors: [
                ...validation.errors.get('nama'),
                ...validation.errors.get('email'),
                ...validation.errors.get('password'),
                ...validation.errors.get('noHp')
            ]
        })
        let message = []

        if(message.length > 0){
            this.setState({
                errors: message
            }, () => console.log(this.state.errors))
        }else{
            alert(`
                    nama: ${this.state.nama}
                    email: ${this.state.email}
                    noHp: ${this.state.noHp}
            `);
            this.setState({
                errors: []
            })
        }

    }
    render(){
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '2px solid black',
            padding: '10px'

        }
        return(
            <div style={style}>
                <h4>Registration</h4>
                {
                    this.state.errors && <Showerrors errors={this.state.errors} />
                }
                <form onSubmit={this.handleRegist}>
                    <Input type="text" name="nama" label="Nama Lengkap" 
                        onChange={value => this.setState({nama: value})}></Input>
                    <Input type="email" name="email" label="Email" 
                        onChange={value => this.setState({email: value})}></Input>
                    <Input type="password" name="password" label="Password" 
                        onChange={value => this.setState({password: value})}></Input>
                    <Input type="int" name="noHp" label="No. Hp" 
                        onChange={value => this.setState({noHp: value})}></Input>
                    <br />
                    <button type="submit">Regist</button>
                </form>
                
                
            </div>
        )
    }
}