import React from "react";
import Header from "../Components/Header";
import AuthHeader from "../Components/AuthHeader";
import QucikLinksList from "../Components/QucikLinksList";
import Grid from "@mui/material/Grid";
import CustomerProfile from "../Components/CustomerProfile";
import { useState } from "react";
import { useEffect } from "react";
import { getAllUsers } from "../Service/UserAPI";

//sx={{backgroundColor:"red"}} 
// sx={{backgroundColor:"green"}}
export default function Authentication() {
  const array = [
        {
            "_id": "642ebcba5ec6465b82d63c6c",
            "firstName": "eeeeeeeee",
            "lastName": "eeeeee",
            "userName": "eeee",
            "role": "eeeeee",
            "email": "eeeeee",
            "password": "$2a$10$N3V0BFFR7ttwHPixf5dsd.xvqNu8PNM5rYZvdEGQ0rU0vme4zJ8E2",
            "createdAt": "2023-04-06T12:36:10.710Z",
            "updatedAt": "2023-04-06T12:36:10.710Z",
            "__v": 0
        },
        {
            "_id": "643104abd4441642b22727b4",
            "firstName": "gemini",
            "lastName": "jayawardhna",
            "userName": "ggggg2000",
            "role": "user",
            "email": "gems45@gmail.com",
            "password": "$2a$10$j0.oYc1lUaIL.WKhVla2ye6nft7AdD4LZf09OM/Peu3lTn.Uer1FO",
            "createdAt": "2023-04-08T06:07:39.811Z",
            "updatedAt": "2023-04-08T06:07:39.811Z",
            "__v": 0
        },
        {
            "_id": "64312ae49610256af882a91f",
            "firstName": "naduni",
            "lastName": "jadssyawardhna",
            "userName": "nadu2000",
            "role": "user",
            "email": "nadu1235@gmail.com",
            "password": "$2a$10$K/kmtbL5vN1qQP4iIZCUD.zHKZW2ngtLy1vqLIqXRngbCNg0yjX9m",
            "createdAt": "2023-04-08T08:50:45.030Z",
            "updatedAt": "2023-04-08T08:50:45.030Z",
            "__v": 0
        },
  ];
  const [userData, setUserData] = useState(array);
  const [refetch, setRefetch] = useState(false);
  const fetchUsers = async () => {
    const response = await getAllUsers();
    console.log("fetchUsers ~ response:", response)
    setUserData(response.data);
  }
  useEffect(() => {
    fetchUsers();
  }, [refetch])
  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <div>
      <Header />
      <AuthHeader />
      <Grid sx container spacing={2} direction={"row"}>
        <Grid sx={{ mt: "40px" }} item xs={2.5}>
          <QucikLinksList />
        </Grid>
        <Grid
          sx={{ mt: "40px", display: "flex", flexDirection: "row" }}
          item
          xs={9.5}
        >
          <Grid container spacing={2}>
            {userData?.map((customer) => (
              <CustomerProfile
                customer={customer}
                setRefetch={setRefetch}
                refetch={refetch}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
