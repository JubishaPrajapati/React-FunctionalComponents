import React from "react";

const CreateHOC = (WrappedComponent: React.ComponentType<any>) => {    //React.ComponentType<any> is a type definition that represents any React component that can accept any props (any)
    return (props: any) => {
        return (
            <div>
                <h3>Loading...</h3>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default CreateHOC;