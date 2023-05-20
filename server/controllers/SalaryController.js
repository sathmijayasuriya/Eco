const router = require("express").Router();
const Salary = require("../model/SalaryModel")
// const Resignation = require("../model/resignationModel");
const { v4: uuidv4 } = require("uuid");

//router for add an Salary
router.post("/Salary", async (req, res) => {

    const empId = uuidv4();
    const fName = req.body.fName;
    const lName = req.body.lName;
    const DOB = req.body.DOB;
    const email = req.body.email;
    const salary = req.body.salary;
    const nic = req.body.nic;
    const date = req.body.date;
    const mobileNo = Number(req.body.mobileNo);
    const status = req.body.status;

    const newSalary = new Salary({
        empId,
        fName,
        lName,
        DOB,
        email,
        salary,
        nic,
        date,
        mobileNo,
        status
    })

    try {
        Salary.find({ nic: newSalary.nic }, async (err, doc) => {
            if (Object.keys(doc).length == 0) {
                try {
                    let response = await newSalary.save();
                    if (response)
                        //console.log(doc);
                        return res.status(201).send({ message: "New Salary records Added" });
                } catch (err) {
                    //console.log("error while saving");
                    return res.status(500).send({ status: "Internal Server Error" });
                }
            }
            else {
                //console.log("nic found")
                return res.status(400).send({ status: "User already exist!" });
            }
        });
    } catch (err) {
        console.log("error", err)
    }
});


//router for retrieve and send all the Salary records
router.get("/Salary", async (req, res) => {
    try {
        const response = await Salary.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});


//router for update an Salary details
router.put("/Salary/update/:empId",async (req,res) =>{
    const empId = req.params.empId;

    const{
        fName,
        lName,
        DOB,
        email,
        salary,
        nic,
        date,
        mobileNo,
        status
    } = req.body;

    const SalaryPayload = {
        fName,
        lName,
        DOB,
        email,
        salary,
        nic,
        date,
        mobileNo,
        status
    }

    if(empId) {
        try{
            const response = await Salary.findOneAndUpdate({empId: empId }, SalaryPayload);
            if (response != null){
                return res.status(200).send({status:"Salary records Successfully updated!"});
            }
            return res.status(400).send({status:"Invalid Salary records"})
        }
        catch(err){
            return res.status(500).send({status:"Internal server Error"});
        }
    }
});


//router for delete an Salary details
router.post("/Salary/delete/:empId", async (req, res) => {
    const empId = req.params.empId;

    if (empId) {
        try{
            const response = await Salary.findOneAndDelete({ empId: empId });
            if (response != null){
                return res.status(200).send({status:"Salary records Successfully Deleted!"});
            }
            return res.status(400).send({status:"Invalid Salary records"})
        }
        catch(err){
            return res.status(500).send({status:"Internal server Error"});
        }
    }
});

module.exports = router;