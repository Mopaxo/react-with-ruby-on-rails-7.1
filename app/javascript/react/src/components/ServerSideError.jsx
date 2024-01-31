import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

const ServerSideError = (props) =>{
    return(
        <>
            <p className="lead fw-bold">Please, try again, you have this errors:</p>
            {props.errors.map((error, index) => (
                <p className="alert alert-danger" role="alert" key={index}>{error}</p>
            ))}
        </>
    )
}
export default ServerSideError;
