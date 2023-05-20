//modal popup for update product
import React,{useState,useEffect}from "react";
import { Modal } from "react-bootstrap";

import {updateProduct} from "../../../services/ProductService";

function UpdateProduct(props) {

    useEffect(()=>{
        
        // setProductID(props.data.ProductID);
        setProductName(props.data.ProductName);
        setProductPrice(props.data.ProductPrice);
        setCapacity(props.data.Capacity);
        setVoltage(props.data.Voltage);
        setWeight(props.data.Weight);
        setMaterial(props.data.Material);
        setWarranty(props.data.Warranty);
        setMountingType(props.data.MountingType);
        setAdditionalFeatures(props.data.AdditionalFeatures);
    },[])

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

    function sendData(e){
        e.preventDefault()
        const Products = {

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
        }

        //calling update service
        updateProduct(props.data.ProductID,Products).then((res)=>{
            if(res.ok){
                alert("Product Updated Successfully");
                window.location.reload();
            }else{
                alert("Something Went Wrong");
            }
        }) 
    }

    return (
    <div>
        <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
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
                                        <input type="text" class="form-control" id="inputProductName" placeholder="Name" value={ProductName}
                                        onChange={(e) => {setProductName(e.target.value)}}/>
                                    </div>
                                </div>    

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputProductPrice">Product Price</label>
                                        <input type="text" class="form-control" id="inputProductPrice" placeholder="Price" value={ProductPrice}
                                        onChange={(e) => {setProductPrice(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputCapacity">Capacity</label>
                                        <input type="text" class="form-control" id="inputCapacity" placeholder="Capacity" value={Capacity}
                                        onChange={(e) => {setCapacity(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputVoltage">Voltage</label>
                                        <input type="text" class="form-control" id="inputVoltage" placeholder="Voltage" value={Voltage}
                                        onChange={(e) => {setVoltage(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputWeight">Weight</label>
                                        <input type="text" class="form-control" id="inputWeight" placeholder="Weight" value={Weight}
                                        onChange={(e) => {setWeight(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputMaterial">Material</label>
                                        <input type="text" class="form-control" id="inputMaterial" placeholder="Material" value={Material}
                                        onChange={(e) => {setMaterial(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputWarranty">Warranty</label>
                                        <input type="text" class="form-control" id="inputWarranty" placeholder="Warranty" value={Warranty}
                                        onChange={(e) => {setWarranty(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputMountingType">MountingType</label>
                                        <input type="text" class="form-control" id="inputMountingType" placeholder="MountingType" value={MountingType}
                                        onChange={(e) => {setMountingType(e.target.value)}}/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-12">
                                        <label for="inputAdditionalFeatures">AdditionalFeatures</label>
                                        <input type="text" class="form-control" id="inputAdditionalFeatures" placeholder="AdditionalFeatures" value={AdditionalFeatures}
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
        </Modal.Body>
    </div>
    )
}

export default UpdateProduct;
