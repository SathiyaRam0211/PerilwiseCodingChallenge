import React from "react";
import TableRow from './TableRow';

function SubmitCard(){
    return(
        <div>
            <form action="http://localhost:5000/companies/submit" method="post" className="submitForm" autoComplete="off">
                <table className="formTable">
                <thead>
                        <tr>
                            <td>S.No.</td>
                            <td>Details</td>
                            <td>Inputs</td>
                        </tr>
                </thead>
                <tbody>
                    <TableRow sno="i" details="Name of vendor/service provider." />
                    <TableRow sno="ii" details="Constitution of vendor/service provider." />
                    <TableRow sno="iii" details="Whether vendor/service provider is an Indian entity or foreign entity." />
                    <TableRow sno="iv" details="Nature/scope of services [please provide the full details point wise and including process as to how it is implemented]." />
                    <TableRow sno="v" details="Please specify whether the Service Provider will provide only the services without any licensing of software products/tools or it is only for software products without services or for both." />
                    <TableRow sno="vi" details="If software purchase agreement Whether source code will be got by BAGIC or not." />
                    <TableRow sno="vii" details="Is the Service Provider provides its services with his employees come and work onsite of BAGIC servers or is it off site or both." />
                    <TableRow sno="viii" details="Do BAGIC share any Confidential Information to the Service Provider in the process of availing the Services." />
                    <TableRow sno="ix" details="If NDA whether both parties are sharing information or only we are sharing or only service provider is sharing the confidential information." />
                    <TableRow sno="x" details="If use of the servers of vendor/service provider is involved then whether or not the servicers are in India." />
                    <TableRow sno="xi" details="Commercials approved by competent authority or not and if approved details thereof with relevant mails." />
                    <TableRow sno="xii" details="If apart from Agreement any SOW to be agreed, whether IT has vetted such SOW and given go ahead or not. If not please vet and give clearance on the SOW." />
                    <TableRow sno="xiii" details="The period of the Agreement with vendor/service provider" />
                    <TableRow sno="xiv" details="Please inform is the period of the Agreement is locked without any right to terminate? If yes please send the competent authority’s approval. Please note that as per corporate governance guidelines, BAGIC have to have right to terminate the Agreement without any penalty and hence not having termination rights is contrary to IRDAI guidelines." />
                    <TableRow sno="xv" details="Is any auto renewal of term of the Agreement is there and whether such auto renewal is agreed by competent authority." />
                    <TableRow sno="xvi" details="Are there any other specific conditions agreed with vendor/service provider? If yes please specify." />
                    <TableRow sno="xvii" details="Exact date from which MOU will be valid (effective date)" />
                    <TableRow sno="xviii" details="Agreement/MOU is for what period?" />
                    <TableRow sno="xix" details="Names of Signing authority to the agreement from tie up partner." />
                    <TableRow sno="xx" details="Names of Signing authority to the agreement (BAGIC) (Not below the role of City Head)." />
                    <TableRow sno="xxi" details="Do we have any existing agreements with this party and if so copies of the same be provided." />
                    <TableRow sno="xxii" details="Any other aspects not covered above." />
                </tbody>
                </table>
                <h3 className="mainHeading">Partner Details.</h3>
                <table className="formTable">
                    <thead>
                        <tr>
                            <td>S.No.</td>
                            <td>Prerequisite</td>
                            <td>Data</td>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow sno="a" details="Company Name and Address" />
                        <TableRow sno="b" details="Company Spoc Name, Mobile No & email id" />
                        <TableRow sno="c" details="IT Vendor Name and Address" />
                        <TableRow sno="d" details="IT Spoc Name, Mobile No & email id" />
                        <TableRow sno="e" details="IT platform to be used for development" />
                        <TableRow sno="f" details="Application Development Start Date" />
                        <TableRow sno="g" details="Application Development end Date" />
                        <TableRow sno="h" details="Public ip address (UAT and Production)" />
                    </tbody>
                </table>
                <button className="btn btn-outline-secondary" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SubmitCard;