import React from "react";
import SubmitCard from "./SubmitCard";


function SubmitForm(){
    return(
        <div>
            <h1 className="mainHeading">Insurance Application Form.</h1>
            <p className="paragraphText">Submit the form, once you filled it.</p>
            <SubmitCard />
        </div>
    );
};

export default SubmitForm;