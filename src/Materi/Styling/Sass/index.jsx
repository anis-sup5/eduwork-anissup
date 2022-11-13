import React from "react";
import './index.scss'
import Title from "./Title";

export default class Sass extends React.Component {
    render(){
        return (
            <div>
                <Title />
                <h2 className="title">Ayok belajar</h2>
                <button class="btn btn-danger">Go Eduwork</button>
            </div>
        )
    }
}