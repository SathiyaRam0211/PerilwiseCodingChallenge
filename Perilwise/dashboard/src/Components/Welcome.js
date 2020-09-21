import React from "react";
import CreateCard from "./CreateCard";
import Onboarding from "./Onboarding";


function Welcome(){
    return(
        <div>
            <h1 id="createSection" className="mainHeading">Welcome in.</h1>
            <CreateCard />
            <Onboarding />
            <form action="http://localhost:5000/users/logout" method="post">
                <button className="btn btn-outline-secondary btn-sm scroll-btn" type="submit">Log Out.</button>
            </form>
        </div>
    );
};

export default Welcome;