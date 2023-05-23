import axios from "axios";

const HOST = "http://localhost:3000/api";


//calling the backend of API Methods as services

//calling add operation
export const createSalary = async (Payload) => {
    try {
    await axios.post(`${HOST}/addSalary`, Payload);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};

//calling view operation
export const getAllSalary = async () => {
    try {
    const response = await axios.get(`${HOST}/viewSalary`);

    return {
        ok: true,
        data: response.data.data
       
    };
    } catch (error) {
    return {
        ok: false,
    };
    }
};

//calling update operation
export const updateSalary= async (empId,Payload) => {
    try {
    await axios.put(`${HOST}/updateSalary/${empId}`,Payload);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};

//calling delete operation
export const deleteSalary= async (empId) => {
    try {
        await axios.delete(`${HOST}/deleteSalary/${empId}`);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};