import React from "react";
import CreateAuth from "./authCreate";

const BaseAuth: React.FC = () => {
    return <div>Welcome to your Dashboard!</div>
}

const EnhanceAuth = CreateAuth(BaseAuth);
export default EnhanceAuth;