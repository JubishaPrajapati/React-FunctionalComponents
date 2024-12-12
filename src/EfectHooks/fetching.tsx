import React, { useState, useEffect } from "react";

const Fetching: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://cat-fact.herokuapp.com/facts");
            const res = await response.json();     //to convert response body from api into json obj
            setData(res);
            setLoading(false);   //loading is set to false as the data has been fetched 
        };

        fetchData();  //fetch func called

    }, [])   //empty dependency so that the fecthing will run only once 

    if (loading) {
        return <div>Loading...</div>
    };

    return <div>Data: <pre>{JSON.stringify(data, null, 2)}</pre></div>;

    //return <div>Data: {JSON.stringify(data)}</div>  //to convert data objback to JSON 

}
export default Fetching;