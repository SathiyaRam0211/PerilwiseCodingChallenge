import React from "react";

function CreateCard(){
    return(
        <div className="createCard">
            <form action="http://localhost:5000/companies/create" method="post" autoComplete="off">
                <div className="form-group">
                    <label className="formLabel">Company Name</label>
                    <input className="form-control" type="text" name="companyName" placeholder="Company Name" required />
                    <label className="formLabel">Contact person Name</label>
                    <input className="form-control" type="text" name="contactName" placeholder="Contact Person Name" required />
                    <label className="formLabel">Contact person Email</label>
                    <input className="form-control" type="email" name="contactEmail" placeholder="Company Person email" required />
                    <label className="formLabel">Company Address</label>
                    <input className="form-control" type="text" name="companyAddress" placeholder="Company Address" required />
                    <label className="formLabel">Product Required</label>
                    <select className="form-control" name="productRequired" placeholder="Choose One" required>
                        <option value="Bike">Bike</option>
                        <option value="Car">Car</option>
                        <option value="PA">PA</option>
                        <option value="Travel">Travel</option>
                        <option value="Health">Health</option>
                    </select>
                </div>
                <button className="createButton" type="submit" name="createCompany">Create ✔</button>
            </form>
        </div>
    ); 
}
export default CreateCard;