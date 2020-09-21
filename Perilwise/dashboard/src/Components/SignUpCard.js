import React from "react";

function SignUpCard(props){
    return(        
        <div className="signUpCard">
            <h4 className="cardHeading">{props.type}</h4>
            <form action={props.url} method="post" autoComplete="off">
                <div className="form-group">
                    <input className="inputBox" type="email" name="email" placeholder="Email" required />
                    <input className="inputBox" type="password" name="password" placeholder="Password" required />
                    <button className="btn btn-dark" type="submit">{props.type}</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpCard;