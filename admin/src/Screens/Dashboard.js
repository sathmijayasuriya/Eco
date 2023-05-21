import React from 'react'
import Header from '../Components/Header'
import Roles from '../Components/Roles'
import Content from '../Components/Content'
import {  useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {  
  const navigate = useNavigate();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  React.useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, isError, isSuccess, message, navigate]);
  return (
    <div>
      <Header />
      <Roles/>
      <Content/>      
    </div>
  )
}
