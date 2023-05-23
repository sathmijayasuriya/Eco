import { React, useState } from "react";
import Swal from 'sweetalert2';
import Header from "../Components/Header";
//import moment from 'moment';

import { createSalary } from "d:/Campus/git hub/Twin-Shield-Resort/Twin-Shield-Resort/Eco/admin/src/services/SalaryService";


function AddSalary() {

    // const [SalaryID, setSalaryID] = useState("");
    const [fName, setfName] = useState("");
    const [lName, setlName ] = useState("");
    const [DOB, setDOB ] = useState("");
    const [email, setemail ] = useState("");
    const [salary , setsalary ] = useState("");
    const [nic  , setnic ] = useState("");
    const [date    , setdate] = useState("");
    const [mobileNo , setmobileNo ] = useState("");
    const [status , setstatus ] = useState("");
    

    function sendData(e){
        e.preventDefault()

        const newSalary = {

            // SalaryID,
            fName,
            lName,
            DOB,
            email,
            salary,
            nic,
            date,
            mobileNo,
            status,
        };
        
        createSalary(newSalary).then((res) => {
            const message = res.ok
                ? "Salary added Successful!"
                : res.err;

            if (res.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: `${message}`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                }
                ).then(() => {
                    window.location.reload();
                })

            }
            else {
                Swal.fire({
                    title: 'Oops!',
                    text: `${message}`,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                }
                )
            }
        });
    }


    return (
        <>
        <Header/>
        <div className="page-component-body">
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                    
                        <div className="row">
                        <h3 className="text-left mt-3 mb-1">New Salary</h3>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h5 className="text-left mt-4 mb-4">Salary Details</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                            
                                {/* <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputSalaryID">Salary ID</label>
                                        <input type="text" class="form-control" id="inputSalaryID" placeholder="ID"
                                        onChange={(e) => {setSalaryID(e.target.value)}}/>
                                    </div>
                                </div> */}

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputfName">Salary Name</label>
                                        <input type="text" class="form-control" id="inputfName" placeholder="Name"
                                        onChange={(e) => {setfName(e.target.value)}}/>
                                    </div>
                                </div>    

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputlName">Salary Price</label>
                                        <input type="text" class="form-control" id="inputlName" placeholder="Price"
                                        onChange={(e) => {setlName(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputDOB">DOB</label>
                                        <input type="text" class="form-control" id="inputDOB" placeholder="DOB"
                                        onChange={(e) => {setDOB(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputemail">email</label>
                                        <input type="text" class="form-control" id="inputemail" placeholder="email"
                                        onChange={(e) => {setemail(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputsalary">salary</label>
                                        <input type="text" class="form-control" id="inputsalary" placeholder="salary"
                                        onChange={(e) => {setsalary(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputnic">nic</label>
                                        <input type="text" class="form-control" id="inputnic" placeholder="nic"
                                        onChange={(e) => {setnic(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputdate">date</label>
                                        <input type="text" class="form-control" id="inputdate" placeholder="date"
                                        onChange={(e) => {setdate(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputmobileNo">mobileNo</label>
                                        <input type="text" class="form-control" id="inputmobileNo" placeholder="mobileNo"
                                        onChange={(e) => {setmobileNo(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputstatus">status</label>
                                        <input type="text" class="form-control" id="inputstatus" placeholder="status"
                                        onChange={(e) => {setstatus(e.target.value)}}/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col py-3 text-center">
                                        <button type="submit" class="btn btn-ok btn-success">
                                            Save
                                        </button>
                                    </div>
                                    <div className="col py-3 text-center">
                                        <button type="reset" class="btn btn-reset btn-warning">
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default AddSalary;


