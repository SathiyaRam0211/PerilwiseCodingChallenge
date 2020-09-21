import React from "react";

function TableRow(props){
    return(
        <tr>
            <td>{props.sno}</td>
            <td>{props.details}</td>
            <td><input className="formInput" type="text" name={props.sno} required /></td>
        </tr>
    );
};

export default TableRow;