import React from "react";
import Filho from "./Filho";

function childrenWithProps(props) {
    React.children.map(props.children, child => {
        return React.cloneElement(child, { 
            ...props, ...child.props
        })
    })
}

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
               
            }
        </ul>
    </div>