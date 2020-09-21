import React from 'react';
import SignUpCard from './SignUpCard';

function SignUpBox(){
    return(
    <div>
        <h1 className="mainHeading">WELCOME TO PERILWISE INSURTECH.</h1>
        <div className = "signUpBox">
            <SignUpCard type="Sign Up" url="http://localhost:5000/users/register"/>
            <SignUpCard type="Login" url="http://localhost:5000/users/login" />
        </div>
    </div>
    );

}

export default SignUpBox;
