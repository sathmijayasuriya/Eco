const router = require("express").Router();
const Salary = require("../model/SalaryModel");
const { v4: uuidv4 } = require("uuid");


//add Salary details

router.post("/addSalary",async (req, res) => {

    const empId = uuidv4();
    const fName = req.body.fName;
    const lName = req.body.lName;
    const DOB = req.body.DOB;
    const email = req.body.email;
    const salary = req.body.salary;
    const nic = req.body.nic;
    const date = req.body.date;
    const mobileNo = req.body.mobileNo;
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

//implementing method for adding Salary data
try {
    Salary.find({ fName: newSalary.fName }, async (err, doc) => {
        if (Object.keys(doc).length == 0) {

            try {
                let response = await newSalary.save();
                if (response)
                    //console.log(doc);
                    return res.status(201).send({ message: "new Salary Added" });
            } catch (err) {
                // console.log("error while saving", err);
                return res.status(500).send({ status: "Internal Server Error" });
            }
        }
        else {
            return res.status(400).send({ status: "Salary already exist!" });
        }
    });
} catch (err) {
    // console.log("error", err)
}
});

//view data Salary

router.get("/viewSalary",async (req,res) => {
    console.log("request", req);

    try{
        const response = await Salary.find();
        return res.status(200).send({
            status:"Success",
            data: response
        });
    }catch(error){
        console.log("Something went wrong while DB connection");
        return { ok: false};
    }
});

//router for update Salary details

router.put("/updateSalary/:empId",async (req,res) =>{
    const empId = req.params.empId;
    console.log("***",empId)
    const{

        fName,
        lName,
        DOB,
        email,
        salary,
        nic,
        date,
        mobileNo,
        status,

    } = req.body;

    const Payload = {
    
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
            const response = await Salary.findOneAndUpdate({empId: empId }, Payload);
            console.log("res>>", response)
            if (response != null){
                return res.status(200).send({status:"Salary Successfully updated!"});
            }
            return res.status(400).send({status:"Invalid Salary"})
        }
        catch(err){
            return res.status(500).send({status:"Internal server Error"});
        }
    }
});

//router for delete Salary

router.delete("/deleteSalary/:empId", async (req, res) => {
    const empId = req.params.empId;
    console.log("res>>",req.params.empId);

    if (empId) {
        try{
            const response = await Salary.findOneAndDelete({ empId: empId });
            console.log("res>>", response)
            if (response != null){
                return res.status(200).send({status:"Salary Successfully Deleted!"});
            }
            return res.status(400).send({status:"Invalid Salary"})
        }
        catch(err){
            return res.status(500).send({status:"Internal server Error"});
        }
    }

});
module.exports = router;