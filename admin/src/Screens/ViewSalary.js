import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { getAllSalary, deleteSalary } from "d:/Campus/git hub/Twin-Shield-Resort/Twin-Shield-Resort/Eco/admin/src/services/SalaryService";
import Header from "../Components/Header";
import UpdateSalary from "./modals/UpdateSalaryModal";

export default function SalaryView() {
  const [salary, setSalary] = useState([]);
  const [updateSalaryModal, setUpdateSalaryModal] = useState(false);
  const [updateData, setUpdateData] = useState();

  useEffect(() => {
    getAllSalary().then((res) => {
      if (res.ok) {
        setSalary(res.data);
      } else {
        setSalary([]);
      }
    });
  }, []);

  function onDelete(data) {
    const empId = data.empId;
    const text = "Are you sure want to delete the Salary?";
    if (window.confirm(text) === true) {
      deleteSalary(empId).then((res) => {
        if (res.ok) {
          alert("Salary Deleted Successfully");
          window.location.reload();
        } else {
          alert("Something Went Wrong");
        }
      });
    } else {
      window.location.reload();
    }
  }

  return (
    <>
      <Header />
      <div className="container" id="height">
        <div className="AllSalaryTable">
          <div style={{ textAlign: "right" }}>
            <button
              className="btn btn-success"
              style={{ marginTop: "50px", marginBottom: "10px" }}
            >
              <a href="/AddSalary" style={{ textDecoration: "none", color: "white" }}>
                Add New Salary
              </a>
            </button>
          </div>
          
            style={{ background: "#E3ECFF" }}
            title="All Salarys"
            actions={[
              {
                icon: () => <button className="btn btn-sm btn-warning">Edit</button>,
                onClick: (event, rowData) => {
                  setUpdateSalaryModal(true);
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
              { title: "Salary Name", field: "fName", type: "string" },
              { title: "Salary Price", field: "lName", type: "string" },
              { title: "DOB", field: "DOB", type: "string" },
              { title: "Mounting Type", field: "email", type: "string" },
              { title: "Additional Features", field: "salary", type: "string" },
            ]}
            data={salary}
            options={{
              sorting: true,
              actionsColumnIndex: -1,
              exportButton: true,
            }}
          
        </div>
        <div>
          <Modal
            show={updateSalaryModal}
            onHide={() => {
              setUpdateSalaryModal(false);
            }}
          >
            <UpdateSalary data={updateData} onHide={() => setUpdateSalaryModal(false)} />
          </Modal>
        </div>
      </div>
    </>
  );
}
