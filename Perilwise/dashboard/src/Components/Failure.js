import React from "react";

function Failure(){
    return(
        <div>
        <div className="jumbotron jumbotron-fluid">
             <div className="container">
                 <h4 className="display-4">Oops Error Occurred :(</h4>
                 <p>Your Form couldn't submit properly. Click to retry Submission.</p>
                 <a className="btn btn-danger" href="/welcome/submit" role="button">Retry</a>
             </div>
         </div>
        </div>
    );
}


export default Failure;