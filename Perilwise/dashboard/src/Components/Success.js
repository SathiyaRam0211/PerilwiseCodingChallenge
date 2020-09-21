import React from "react";

function Success(){
    return(
        <div>
        <div className="jumbotron jumbotron-fluid">
             <div className="container">
                 <h4 className="display-4">Success :)</h4>
                 <p>Your Form has been successfully submitted. Click to return Home.</p>
                 <a className="btn btn-warning" href="/welcome#Onboarding" role="button">Home</a>
             </div>
         </div>
        </div>
    );
}

export default Success;