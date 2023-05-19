import axios from "axios";
const baseUrl = "http://localhost:5000/api/";

export const createUser = async (UserData) => {
  try {
    const response = await axios.post(
      `${baseUrl}user/register`,UserData
    );
    console.log("user registerd:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};
export const loginUser = async (UserData) => {
    try {
      const response = await axios.post(`${baseUrl}user/login`, UserData);
      console.log('Login successful:', response);
      return response;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };
export const getUser = async (userId) => {
    try {
      const response = await axios.get(`${baseUrl}user/get/${userId}`);
      console.log("User:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error getting user:", error);
      throw error;
    }
  };
  
  export const updateUser = async (userId, updatedData) => {
    try {
      const response = await axios.put(`${baseUrl}user/update/${userId}`, updatedData);
      console.log("User updated:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };
  
  export const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`${baseUrl}user/delete${userId}`);
      console.log("User deleted:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  };
  
