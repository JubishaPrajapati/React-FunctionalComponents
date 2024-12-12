import React from "react";
import CreateHOC from "./createHOC";

interface BaseCompInterface {
    name: string;
}

const BaseComp: React.FC<BaseCompInterface> = (props) => {
    return <h3>Hello, I am from simple Hoc, {props.name}</h3>
}
//enhancing basecomp with hoc
const EnhanceComp = CreateHOC(BaseComp);

export default EnhanceComp;