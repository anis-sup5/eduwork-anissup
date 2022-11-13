import React from "react";
import Bio from "./Bio";
import Biografi from "./Biografi";
import DataDiri from "./DataDiri";
export default class Portofolio extends React.Component {
    render(){
        return(
            <div>
                <div className="app-header">
                    <Biografi />   
                </div>
                <div className="app-content">
                    <DataDiri />
                    <Bio />     
                </div>
            </div>         
        )
    }
}