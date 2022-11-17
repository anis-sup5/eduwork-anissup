import React from "react";
import styled from "styled-components";
import Counter from "../Counter";

const imgProduct = '/product1.jpg';

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Image = styled.img`
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;
    font-size: 22px;
`;

const Description = styled.p`
    font-size: small;
`;
export default class Product extends React.Component {
 
    receiveValue = (value) =>{
        this.props.receiveValue(value);
    }
    render(){
        return(
            <div>
                <CardContainer>
                    <Image src={imgProduct}></Image>
                    <Heading>Title Card</Heading>
                    <Price>$ 20.09</Price>
                    <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit explicabo rerum est harum doloribus animi a incidunt cupiditate inventore non!</Description>
                    <Counter receiveValue={this.receiveValue} />
                </CardContainer>
            </div>
        )
    }
}