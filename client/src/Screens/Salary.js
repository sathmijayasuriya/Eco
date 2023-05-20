import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { React, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import { addSalaryService } from "../../services/SalaryService";


export default function Salary() {

    // disable future dates
    const day = moment().subtract(18, 'years');
    const disableFutureDt = current => {
        return current.isBefore(day)
    }

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [DOB, setDOB] = useState(moment());
    const [email, setEmail] = useState("");
    const [salary, setsalaryus] = useState("");
    const [nic, setNIC] = useState("");
    const [date, setdate] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [status, setstatus] = useState("");

    function sendData(e) {
        e.preventDefault();

        const teleValid = TeleValidation();
        const NICValid = NICValidation();

        if (teleValid && NICValid) {

            const newSalary = {
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

            addSalaryService(newSalary).then((response) => {
                const message = response.ok
                    ? "Salary Insertion Successful!"
                    : response.err;

                if (response.ok) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${message}`,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    ).then(() => {
                        window.location.reload();
                        window.location.replace("/AllSalary");
                    })
                }
                else {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${message}`,
                        icon: 'error',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
        }
    }

    //validate function
    const TeleValidation = () => {

        const TeleErr = {}; //State
        let teleValid = true; //setting flag

        if (mobileNo.trim().length > 10) {

            TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
            teleValid = false;
        } else if (mobileNo.trim().length < 10) {
            TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
            teleValid = false;
        }

        setTeleNoErr(TeleErr);//update error objects
        return teleValid;

    }

    

    //validate function
    const NICValidation = () => {

        const NICErr = {}; //State
        let NICValid = true; //setting flag

        if (nic.trim().length > 12) {
            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        } else if (nic.trim().length < 10) {
            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            NICValid = false;
        }

        setNICErr(NICErr);//update error objects
        return NICValid;

    }

    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
    };

    const [isNICValid, setNICIsValid] = useState(false);
    const [NICmessage, setNICMessage] = useState('');

    const NICRegex1 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V.v]$/;
    const NICRegex2 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateNIC = (event) => {
        const NIC = event.target.value;
        if (NICRegex1.test(NIC)) {
            setNICIsValid(true);
            setNICMessage('Your NIC looks good!');
        } else if (NICRegex2.test(NIC)) {
            setNICIsValid(true);
            setNICMessage('Your NIC looks good!');
        } else {
            setNICIsValid(false);
            setNICMessage('Please enter a valid NIC Number!');
        }
    };

    const [isMobileNoValid, setMobileNoValid] = useState(false);
    const [MobileNoMessage, setMobileMessage] = useState('');

    const MobileRegex = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    const validateMobile = (event) => {
        const MobileNo = event.target.value;
        if (MobileRegex.test(MobileNo)) {
            setMobileNoValid(true);
            setMobileMessage('Your Mobile Number looks good!');
        } else {
            setMobileNoValid(false);
            setMobileMessage('Please enter a valid Mobile Number!');
        }
    };

  useEffect(() => {
    getOfferData();
  }, []);

  return (
    <Container>
      <InnerContainer>
        <div className='supdetail-container'>
          <Formik
            initialValues={initialData}
            validationSchema={SupplierSchema}
            enableReinitialize
            onSubmit={data => {
              onModalSubmitHandler(data, formState);
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} className='supdetail-form'>
                <div className='supdetail-form-body'>
                  {/* Form Grop ---> */}
                  <div className='supdetail-form-group'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier First Name</span>
                    <Field
                      type='text'
                      name='firstName'
                      placeholder='Your First Name'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='firstName' className='eMessage' />
                    </EMsg>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier Last Name</span>
                    <Field
                      type='text'
                      name='lastName'
                      placeholder='Your Last Name'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='lastName' className='eMessage' />
                    </EMsg>
                  </div>
                  {/* Form Group ---> */}
                  <div className='supdetail-form-group'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier email</span>
                    <Field
                      type='email'
                      name='supplierEmail'
                      placeholder='aaaaa@gmail.com'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='supplierEmail' className='eMessage' />
                    </EMsg>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier NIC Number</span>
                    <Field
                      type='text'
                      name='supplierNIC'
                      placeholder='000000000V'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='supplierNIC' className='eMessage' />
                    </EMsg>
                  </div>
                  {/* Form Group ---> */}
                  <div className='supdetail-form-group'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Company Name</span>
                    <Field
                      type='text'
                      name='CompanyName'
                      placeholder=''
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='CompanyName' className='eMessage' />
                    </EMsg>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Supplier Phone Number</span>
                    <Field
                      type='text'
                      name='PhoneNumber'
                      placeholder='0123456789'
                      className='supdetail-form-group_input'
                    />
                    <EMsg>
                      <ErrorMessage name='PhoneNumber' className='eMessage' />
                    </EMsg>
                  </div>
                  {/* Form Group ---> */}
                  <div className='supdetail-form-group'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-calendar-o' />
                    <span>Category</span>
                    <Field type='text' name='category' placeholder='Food' className='supdetail-form-group_input' />
                    <EMsg>
                      <ErrorMessage name='category' className='eMessage' />
                    </EMsg>
                  </div>
                  <div className='ordsupdetailer-form-search-btn'>
                    {/* Form Item 🔥 ---> */}
                    <i className='fa fa-search' />
                    <div
                      className='supdetail-btn-margin'
                      onClick={() => {
                        setFormState('create');
                        handleSubmit();
                      }}
                    >
                      Create
                    </div>
                    <div
                      className='supdetail-btn-margin'
                      onClick={() => {
                        deleteAllUsers();
                      }}
                    >
                      Delete All
                    </div>
                    {formState === 'update' && (
                      <div
                        className='supdetail-btn-margin'
                        onClick={() => {
                          setFormState('update');
                          handleSubmit();
                        }}
                      >
                        Update
                      </div>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <table>
          <thead>
            <tr>
              <th>SupplierId</th>
              <th>Supplier first Name</th>
              <th>Supplier Last Name</th>
              <th>supplier Email</th>
              <th>Supplier NIC</th>
              <th>Company Name</th>
              <th>Phone Number</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={`test-${i + 1}`}>
                <td>{item.supplierId}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.supplierEmail}</td>
                <td>{item.supplierNIC}</td>
                <td>{item.CompanyName}</td>
                <td>{item.PhoneNumber}</td>
                <td>{item.category}</td>
                <td>
                  <BtnCtr>
                    <FormBtn
                      onClick={() => {
                        deleteAUser(item.supplierId);
                      }}
                    >
                      Delete
                    </FormBtn>
                    <FormBtn
                      onClick={() => {
                        setFormState('update');
                        setInitialData({
                          supplierId: item.supplierId,
                          firstName: item.firstName,
                          lastName: item.lastName,
                          supplierEmail: item.supplierEmail,
                          supplierNIC: item.supplierNIC,
                          CompanyName: item.CompanyName,
                          PhoneNumber: item.PhoneNumber,
                          category: item.category,
                        });
                      }}
                    >
                      Update
                    </FormBtn>
                  </BtnCtr>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </InnerContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    padding: 20px;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    font-size: 0.9em;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  thead > tr {
    background-color: #000;
    color: #fff;
    text-align: left;
    font-weight: bold;
    border: 1px solid #000;
  }

  td {
    padding: 8px;
    border-right: 1px solid #000;
    text-align: center;
  }

  td:last-child {
    border: none;
  }

  th {
    padding: 8px;
    text-align: center;
  }

  tbody > tr {
    border: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  tbody > tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody > tr:last-of-type {
    border-bottom: 2px solid #000;
  }

  .div1 {
    display: grid;
    grid-template-areas: 'left right';
    max-width: 900px;
  }
  .cal .title h1 {
    font-weight: bold;
    font-weight: 500;
    font-size: 40px;
    font-family: Bree Serif;
    color: #fff;
    line-height: 40px;
    background: #000000;
    text-transform: uppercase;
    display: inline-block;
    padding: 0px 10px;
    margin-left: 50%;
  }

  .supdetail-container {
    height: auto;
    width: 100%;
    padding: 16px;
    background: #fbfbfb;
    border: 1px solid #000;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    margin-bottom: 25px;
  }

  .stock-container {
    align-items: center;
    background: #d8aa96;
    color: rgba(0, 0, 0, 0.8);
    display: grid;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 100vh;
    justify-items: center;
    width: 100vw;
  }

  .supdetail-form {
    background: lighten(#f7b1ab, 5%);
    display: grid;
    grid-template-areas: '.' '.';
  }

  .stock-form {
    background: lighten(#ec4637, 5%);
    display: grid;
    grid-template-areas: '.' '.';
    width: 750px;
  }

  @media only screen and (min-width: 769px) {
    .order-form {
      width: 400px;
      margin: auto;
    }
  }

  .supdetail-form-head {
    background: #f7b1ab;
    overflow: hidden;
    padding: 25px 0 25px 0;
    position: relative;
    text-align: center;
    width: 400px;
  }

  .stock-form-head {
    background: #f7b1ab;
    overflow: hidden;
    padding: 25px 0 25px 0;
    position: relative;
    text-align: center;
    width: 400px;
  }

  .supright {
    background: #f79e95;
    display: grid;
    width: 400px;
    text-align: center;
    padding: 25px 0 25px 0;
    overflow: hidden;
  }

  .supdetail-form-body {
    padding: 16px;
    width: 100%;
  }

  .supdetail-form-group {
    width: 100%;
    padding: 0 8px;
    margin-bottom: 16px;
  }

  .supdetail-form-group_input {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #fbfbfb;
  }

  .supdetail-form-group_select {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #fbfbfb;
  }

  .supdetail-form-search-btn {
    width: 200px;
    margin: auto;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    background: #ff6239;
    color: #fff;
    border-radius: 4px;
  }

  .supdetail-btn-margin {
    padding: 10px 20px;
    border-radius: 4px;
    background: black;
    color: white;
    display: inline-block;
    cursor: pointer;
  }

  .stockspan {
    font-size: 20px;
    float: left;
    width: 100%;
    display: block;
    margin-bottom: 5px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .ordsupdetailer-form-search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
  }

  .stockgroup > input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 38px;
    line-height: 38px;
    padding-left: 5px;
  }

  .set {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
`;

const InnerContainer = styled.div`
  padding: 20px;
  margin-top: 25px;
`;

const EMsg = styled.div`
  color: red;
  margin: 4px 0;
`;

const FormBtn = styled.div`
  cursor: pointer;
  border-radius: 4px;
  background: black;
  color: white;
  width: 100px;
`;

const BtnCtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
