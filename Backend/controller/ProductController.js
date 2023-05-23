const router = require("express").Router();
const Product = require("../model/ProductModel");
const { v4: uuidv4 } = require("uuid");


//add product details

router.post("/addProduct",async (req, res) => {

    const ProductID = uuidv4();
    const ProductName = req.body.ProductName;
    const ProductPrice = req.body.ProductPrice;
    const Capacity = req.body.Capacity;
    const Voltage = req.body.Voltage;
    const Weight = req.body.Weight;
    const Material = req.body.Material;
    const Warranty = req.body.Warranty;
    const MountingType = req.body.MountingType;
    const AdditionalFeatures = req.body.AdditionalFeatures;


const newProduct = new Product({

    ProductID,
    ProductName,
    ProductPrice,
    Capacity,
    Voltage,
    Weight,
    Material,
    Warranty,
    MountingType,
    AdditionalFeatures
})

//implementing method for adding product data
try {
    Product.find({ ProductName: newProduct.ProductName }, async (err, doc) => {
        if (Object.keys(doc).length == 0) {

            try {
                let response = await newProduct.save();
                if (response)
                    //console.log(doc);
                    return res.status(201).send({ message: "new Product Added" });
            } catch (err) {
                // console.log("error while saving", err);
                return res.status(500).send({ status: "Internal Server Error" });
            }
        }
        else {
            return res.status(400).send({ status: "Product already exist!" });
        }
    });
} catch (err) {
    // console.log("error", err)
}
});

//view data product

router.get("/viewProduct",async (req,res) => {
    console.log("request", req);

    try{
        const response = await Product.find();
        return res.status(200).send({
            status:"Success",
            data: response
        });
    }catch(error){
        console.log("Something went wrong while DB connection");
        return { ok: false};
    }
});

//router for update product details

router.put("/updateProduct/:ProductID",async (req,res) =>{
    const ProductID = req.params.ProductID;
    console.log("***",ProductID)
    const{

        ProductName,
        ProductPrice,
        Capacity,
        Voltage,
        Weight,
        Material,
        Warranty,
        MountingType,
        AdditionalFeatures,

    } = req.body;

    const Payload = {
    
        ProductName,
        ProductPrice,
        Capacity,
        Voltage,
        Weight,
        Material,
        Warranty,
        MountingType,
        AdditionalFeatures

    }
    

    if(ProductID) {
        try{
            const response = await Product.findOneAndUpdate({ProductID: ProductID }, Payload);
            console.log("res>>", response)
            if (response != null){
                return res.status(200).send({status:"Product Successfully updated!"});
            }
            return res.status(400).send({status:"Invalid Product"})
        }
        catch(err){
            return res.status(500).send({status:"Internal server Error"});
        }
    }
});

//router for delete product

router.delete("/deleteProduct/:ProductID", async (req, res) => {
    const ProductID = req.params.ProductID;
    console.log("res>>",req.params.ProductID);

    if (ProductID) {
        try{
            const response = await Product.findOneAndDelete({ ProductID: ProductID });
            console.log("res>>", response)
            if (response != null){
                return res.status(200).send({status:"Product Successfully Deleted!"});
            }
            return res.status(400).send({status:"Invalid Product"})
        }
        catch(err){
            return res.status(500).send({status:"Internal server Error"});
        }
    }

});
module.exports = router;