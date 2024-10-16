import React from "react";
import MoreDetails from "../component/moreDetails.jsx";
import { useParams } from "react-router";

const Details = () => {
    const params = useParams()
    
    return (
       <MoreDetails category={params.category} uid={params.id} />
    )
};

export default Details;