import axios from "axios";

const HOST = "http://localhost:9000/api";


//calling the backend of API Methods as services

//calling add operation
export const createProduct = async (Payload) => {
    try {
    await axios.post(`${HOST}/addProduct`, Payload);
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
export const getAllProduct = async () => {
    try {
    const response = await axios.get(`${HOST}/viewProduct`);

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
export const updateProduct= async (ProductID,Payload) => {
    try {
    await axios.put(`${HOST}/updateProduct/${ProductID}`,Payload);
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
export const deleteProduct= async (ProductID) => {
    try {
        await axios.delete(`${HOST}/deleteProduct/${ProductID}`);
    return {
        ok: true,
    };
    } catch (error) {
    return {
        ok: false, err: error.response.data.status
    };
    }
};