import { createUser, loginUser, updateUser } from "../../Service/UserAPI";


// Register user
const register = async (payload) => {
  const response = await createUser(payload);
  console.log("~ register ~ response:", response)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response;
};

// Update user
const editUser = async (id, payload) => {
  const response = await updateUser(id, payload);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response;
};

// Login user
const login = async (payload) => {
  const response = await loginUser(payload);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  editUser,
  logout,
  login,
};

export default authService;
