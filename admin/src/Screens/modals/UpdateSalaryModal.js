//modal popup for update Salary
import React,{useState,useEffect}from "react";
import { Modal } from "react-bootstrap";

import {updateSalary} from "d:/Campus/git hub/Twin-Shield-Resort/Twin-Shield-Resort/Eco/admin/src/services/SalaryService";

function UpdateSalary(props) {

    useEffect(()=>{
        
        // setempId(props.data.empId);
        setfName(props.data.fName);
        setlName(props.data.lName);
        setDOB(props.data.DOB);
        setemail(props.data.email);
        setsalary(props.data.salary);
        setnic(props.data.nic);
        setdate(props.data.date);
        setmobileNo(props.data.mobileNo);
        setstatus(props.data.status);
    },[])

    // const [empId, setempId] = useState("");
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
        const Salarys = {

            // empId,
            fName,
            lName,
            DOB,
            email,
            salary,
            nic,
            date,
            mobileNo,
            status,
        }

        //calling update service
        updateSalary(props.data.empId,Salarys).then((res)=>{
            if(res.ok){
                alert("Salary Updated Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return (
    <div>
        <Modal.Header closeButton>
            <Modal.Title>Update Salary</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                    {/* <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputempId">Salary ID</label>
                                        <input type="text" class="form-control" id="inputempId" placeholder="ID"
                                        onChange={(e) => {setempId(e.target.value)}}/>
                                    </div>
                                </div> */}

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputfName">Salary Name</label>
                                        <input type="text" class="form-control" id="inputfName" placeholder="Name" value={fName}
                                        onChange={(e) => {setfName(e.target.value)}}/>
                                    </div>
                                </div>    

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputlName">Salary Price</label>
                                        <input type="text" class="form-control" id="inputlName" placeholder="Price" value={lName}
                                        onChange={(e) => {setlName(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputDOB">DOB</label>
                                        <input type="text" class="form-control" id="inputDOB" placeholder="DOB" value={DOB}
                                        onChange={(e) => {setDOB(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputemail">email</label>
                                        <input type="text" class="form-control" id="inputemail" placeholder="email" value={email}
                                        onChange={(e) => {setemail(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputsalary">salary</label>
                                        <input type="text" class="form-control" id="inputsalary" placeholder="salary" value={salary}
                                        onChange={(e) => {setsalary(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputnic">nic</label>
                                        <input type="text" class="form-control" id="inputnic" placeholder="nic" value={nic}
                                        onChange={(e) => {setnic(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputdate">date</label>
                                        <input type="text" class="form-control" id="inputdate" placeholder="date" value={date}
                                        onChange={(e) => {setdate(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputmobileNo">mobileNo</label>
                                        <input type="text" class="form-control" id="inputmobileNo" placeholder="mobileNo" value={mobileNo}
                                        onChange={(e) => {setmobileNo(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputstatus">status</label>
                                        <input type="text" class="form-control" id="inputstatus" placeholder="status" value={status}
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
        </Modal.Body>
    </div>
    )
}

export default UpdateSalary;
