import React from "react";

export default class Conditional extends React.Component {
    state = {
        isLoading: true
    }

    render(){
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
        // const isLogin = false;
        // let message = '';
        // if(isLogin){
        //     message = 'Anda berhasil login';
        // }else{
        //     message = 'Silahkan login terlebih dahulu'
        // }
        return(
            <div>
                {/* <h1>{message}</h1> */}

                {/* short circuit evaluation && || */}
                {/* {isLogin && <h1>Anda Sudah login</h1>} */}

                {/* ternary operator */}
                {/* {isLogin ? <h1>Anda Sudah Login</h1> : <h1>Silahkan Login terlebih dahulu</h1>} */}

                {this.state.isLoading ? <h1>Loading....</h1> : <h1>Selamat datang di kelas Mern</h1>}
            </div>
        )
    }
}