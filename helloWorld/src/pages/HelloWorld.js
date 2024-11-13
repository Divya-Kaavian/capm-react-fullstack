import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core"; // Import Box for layout
import axios from 'axios';


export default function HelloWorld() {
  const [data, setData] = useState([]);

  // const url = "https://4e812357trial-dev-capm-srv-srv.cfapps.us10-001.hana.ondemand.com/helloWorld/HelloWorld";
  const url = "https://port4004-workspaces-ws-n9djj.us10.trial.applicationstudio.cloud.sap/helloWorld/HelloWorld"

  useEffect(()=>{
    fetch(url, {
      method:"GET"
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err)=>console.log(err));  

    // axios.get('https://port4004-workspaces-ws-n9djj.us10.trial.applicationstudio.cloud.sap/helloWorld/HelloWorld')
    // .then((data)=> console.log(data))
    // .catch((err)=> console.log("Error", err))
  }, [])
  
  return (
    <Box
      display="flex"             
      justifyContent="center"    
      alignItems="center"        
      height="100vh"             
      textAlign="center"     
    >
      <Typography variant="h4" color="textPrimary">
        Hello World..
      </Typography>
    </Box>
  );
}
