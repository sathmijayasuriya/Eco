import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import { getAllProduct,deleteProduct } from "../../services/ProductService";

import Header from "../../components/Header";
import UpdateProduct from "./modals/UpdateProductModal";



export default function ProductView() {


const [product, setProduct] = useState([]);
const [addProductModal, setProductModal] = useState(false);
const [updateProductModal, setUpdateProductModal] = useState(false);
const [updateData, setUpdateData] = useState();



  //creting a method for retrieve data
useEffect(() => {
    getAllProduct().then((res)=>{
        if(res.ok){
            setProduct(res.data);
        }
        else{
            setProduct([]);
        }
    })
}, []);

//Delete method implementation

function onDelete(data) {
    const ProductID = data.ProductID;
    let text = "Are you sure want to delete the product?";
        if (window.confirm(text) == true) {
            deleteProduct(ProductID).then((res)=>{
                if(res.ok){
                    alert("Product Deleted Successfully");
                    window.location.reload();
                }else{
                    alert("Something Went Wrong");
                }
            });
        } 
        else {
            window.location.reload();
        }
};

 //adding components to the page body

    return (
/* side navigtaion bar components*/
    <>
        <Header/>
    <div className="container" id="height">

        {/* implementing the meterial table for display data */}

        <div className="AllProductTable">
        <div style={{ textAlign: "right"}}>
            <button className="btn btn-success"
                style={{ marginTop:"50px", marginBottom: "10px" }}>
                <a
                href="/AddProduct"
                style={{ textDecoration: "none", color: "white"}}
                >
                {" "}
                Add New Product
                </a>
            </button>
        </div>
        <MaterialTable style={{background:"#E3ECFF"}}
        title="All Products"
        actions={[
            {
            icon: () => (
                <button className="btn btn-sm btn-warning">Edit</button>
            ),
            onClick: (event, rowData) => {
                setUpdateProductModal(true);
                setUpdateData(rowData);
            },
            },
            {
                icon: () => <button className="btn btn-sm btn-danger">Delete</button>,
                onClick: (event, rowData) => {
                   
                    onDelete(rowData);
                },
                },
        ]}
        columns={[
            // { title: "Product ID", field: "ProductID", type: "string" },
            { title: "Product Name", field: "ProductName", type: "string" },
            { title: "Product Price", field: "ProductPrice", type: "string" },
            { title: "Voltage", field: "Voltage", type: "string" },
            { title: "Mounting Type", field: "MountingType", type: "string" },
            { title: "Additional Features", field: "AdditionalFeatures", type: "string" }

        ]}
        data={product}
        options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
        }}
        
        />
    </div>
    <div>
    <Modal show={updateProductModal} onHide={()=>{
        setUpdateProductModal(false)
    }}
    >
        <UpdateProduct data = {updateData} onHide={()=>{
        setUpdateProductModal(false)}} />

    </Modal> 

    </div>
    
    </div>
    </>
    );
}

