import { React, useState } from "react";
import {useHistory} from "react-router-dom";
import Swal from 'sweetalert2';
import Header from "../../components/Header";
//import moment from 'moment';

import { createProduct } from "../../services/ProductService";


function AddProduct() {

    // const [ProductID, setProductID] = useState("");
    const [ProductName, setProductName] = useState("");
    const [ProductPrice, setProductPrice ] = useState("");
    const [Capacity, setCapacity ] = useState("");
    const [Voltage, setVoltage ] = useState("");
    const [Weight , setWeight ] = useState("");
    const [Material  , setMaterial ] = useState("");
    const [Warranty    , setWarranty] = useState("");
    const [MountingType , setMountingType ] = useState("");
    const [AdditionalFeatures , setAdditionalFeatures ] = useState("");
    
    const history = useHistory();

    function sendData(e){
        e.preventDefault()

        const newProduct = {

            // ProductID,
            ProductName,
            ProductPrice,
            Capacity,
            Voltage,
            Weight,
            Material,
            Warranty,
            MountingType,
            AdditionalFeatures,
        };
        
        createProduct(newProduct).then((res) => {
            const message = res.ok
                ? "Product added Successful!"
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
                        <h3 className="text-left mt-3 mb-1">New Product</h3>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h5 className="text-left mt-4 mb-4">Product Details</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <form form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                            
                                {/* <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputProductID">Product ID</label>
                                        <input type="text" class="form-control" id="inputProductID" placeholder="ID"
                                        onChange={(e) => {setProductID(e.target.value)}}/>
                                    </div>
                                </div> */}

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputProductName">Product Name</label>
                                        <input type="text" class="form-control" id="inputProductName" placeholder="Name"
                                        onChange={(e) => {setProductName(e.target.value)}}/>
                                    </div>
                                </div>    

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputProductPrice">Product Price</label>
                                        <input type="text" class="form-control" id="inputProductPrice" placeholder="Price"
                                        onChange={(e) => {setProductPrice(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputCapacity">Capacity</label>
                                        <input type="text" class="form-control" id="inputCapacity" placeholder="Capacity"
                                        onChange={(e) => {setCapacity(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputVoltage">Voltage</label>
                                        <input type="text" class="form-control" id="inputVoltage" placeholder="Voltage"
                                        onChange={(e) => {setVoltage(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputWeight">Weight</label>
                                        <input type="text" class="form-control" id="inputWeight" placeholder="Weight"
                                        onChange={(e) => {setWeight(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputMaterial">Material</label>
                                        <input type="text" class="form-control" id="inputMaterial" placeholder="Material"
                                        onChange={(e) => {setMaterial(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputWarranty">Warranty</label>
                                        <input type="text" class="form-control" id="inputWarranty" placeholder="Warranty"
                                        onChange={(e) => {setWarranty(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputMountingType">MountingType</label>
                                        <input type="text" class="form-control" id="inputMountingType" placeholder="MountingType"
                                        onChange={(e) => {setMountingType(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputAdditionalFeatures">AdditionalFeatures</label>
                                        <input type="text" class="form-control" id="inputAdditionalFeatures" placeholder="AdditionalFeatures"
                                        onChange={(e) => {setAdditionalFeatures(e.target.value)}}/>
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

export default AddProduct;
