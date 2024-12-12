import React from "react";

const CreateAuth = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        const isAuth = true;

        if (!isAuth) {
            return <div>Please login to access the content.</div>
        }

        return <WrappedComponent {...props} />
    }
}
export default CreateAuth;