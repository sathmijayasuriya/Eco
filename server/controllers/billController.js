const router = require("express").Router();
const bill = require("../model/billModel")
// const Resignation = require("../model/resignationModel");
const { v4: uuidv4 } = require("uuid");

//router for add an bill
router.post("/bill", async (req, res) => {

    const Id = uuidv4();
    const fName = req.body.fName;
    const city = req.body.city;
    const email = req.body.email;
    const kilowatthour = req.body.kilowatthour;
    const telephone = Number(req.body.telephone);
    const message = req.body.message;

    const newbill = new bill({
        Id,
        fName,
        city,
        email,
        kilowatthour,
        telephone,
        message
    })

    try {
        bill.find({ nic: newbill.nic }, async (err, doc) => {
            if (Object.keys(doc).length == 0) {
                try {
                    let response = await newbill.save();
                    if (response)
                        //console.log(doc);
                        return res.message(201).send({ message: "New bill records Added" });
                } catch (err) {
                    //console.log("error while saving");
                    return res.message(500).send({ message: "Internal Server Error" });
                }
            }
            else {
                //console.log("nic found")
                return res.message(400).send({ message: "User already exist!" });
            }
        });
    } catch (err) {
        console.log("error", err)
    }
});


//router for retrieve and send all the bill records
router.get("/bill", async (req, res) => {
    try {
        const response = await bill.find();
        return res.message(200).send({ message: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});


//router for update an bill details
router.put("/bill/update/:Id",async (req,res) =>{
    const Id = req.params.Id;

    const{
        fName,
        city,
        email,
        kilowatthour,
        telephone,
        message
    } = req.body;

    const billPayload = {
        fName,
        city,
        email,
        kilowatthour,
        telephone,
        message
    }

    if(Id) {
        try{
            const response = await bill.findOneAndUpdate({Id: Id }, billPayload);
            if (response != null){
                return res.message(200).send({message:"bill records Successfully updated!"});
            }
            return res.message(400).send({message:"Invalid bill records"})
        }
        catch(err){
            return res.message(500).send({message:"Internal server Error"});
        }
    }
});


//router for delete an bill details
router.post("/bill/delete/:Id", async (req, res) => {
    const Id = req.params.Id;

    if (Id) {
        try{
            const response = await bill.findOneAndDelete({ Id: Id });
            if (response != null){
                return res.message(200).send({message:"bill records Successfully Deleted!"});
            }
            return res.message(400).send({message:"Invalid bill records"})
        }
        catch(err){
            return res.message(500).send({message:"Internal server Error"});
        }
    }
});

module.exports = router;