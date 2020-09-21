import React from "react";
import axios from "axios";



function Companies(){

    let [companyCount,setCount] = React.useState([""]);
    axios.get("http://localhost:5000/companies/submit")
    .then((res)=>{
        companyCount = res.data;  
    })
    .catch((err)=>{
        console.log(err);
    });

    function refresh(){
        axios.get("http://localhost:5000/companies/submit")
        .then((res)=>{
            companyCount = res.data;   
        }).catch((err)=>{
            console.log(err);
        });
        setCount(companyCount);
    }
    
    return(
        <div>
        <h1 className="mainHeading">Onboarding.</h1>
        <div className="createCard">
            <div>
                <h4 className="mainHeading">Registered Companies.</h4>
                {companyCount.map((com) => {
                    return(
                        <button className="btn btn-outline-secondary btn-block" name="companyBtn" key={companyCount.indexOf(com)} onClick={()=>
                        {
                            axios.post("http://localhost:5000/data/"+com,com).catch((err)=>console.log(err));
                            }}>{com}</button>  
                    );  
                })}
                <button className="btn btn-outline-secondary btn-sm scroll-btn" onClick={refresh}>Refresh.</button>
                <hr></hr>
                <a className="btn btn-outline-secondary btn-sm scroll-btn" href="/welcome" role="button">Go Back.</a> 
            </div>
        </div>           
        </div>
    );   
}

export default Companies;

