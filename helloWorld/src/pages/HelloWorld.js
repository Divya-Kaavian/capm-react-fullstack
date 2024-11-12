import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core"; // Import Box for layout
import axios from 'axios';


export default function HelloWorld() {
  const [data, setData] = useState([]);

  const url = "https://4e812357trial-dev-capm-srv-srv.cfapps.us10-001.hana.ondemand.com/helloWorld/HelloWorld";

  // const token = 'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vNGU4MTIzNTd0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL3Rva2VuX2tleXMiLCJraWQiOiJkZWZhdWx0LWp3dC1rZXktNzJkYTEzYjYyOSIsInR5cCI6IkpXVCIsImppZCI6ICJLdlIvOENhWGZBbWVyeE14QnRib0xvVWZrZjJ1Z1FqQ1pucGhIakpFRm1jPSJ9.eyJqdGkiOiIwNWQxNmViZmQ2ZjI0YTY0YTVjZDIxMWVlODZmMGZjZiIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiI2MDg2MmUzMS0yNTI0LTQ5MzAtYWYwOC0yZTJkODEzNWRmYWUiLCJ6ZG4iOiI0ZTgxMjM1N3RyaWFsIiwic2VydmljZWluc3RhbmNlaWQiOiI4OGU1MjJmYi1mZGVkLTQ5MzMtYTgzZi04NjM3ZTBjNDFiMDkifSwic3ViIjoic2ItODhlNTIyZmItZmRlZC00OTMzLWE4M2YtODYzN2UwYzQxYjA5IWIzNDc5Mzd8eHN1YWEhYjQ5MzkwIiwiYXV0aG9yaXRpZXMiOlsidWFhLnJlc291cmNlIl0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSJdLCJjbGllbnRfaWQiOiJzYi04OGU1MjJmYi1mZGVkLTQ5MzMtYTgzZi04NjM3ZTBjNDFiMDkhYjM0NzkzN3x4c3VhYSFiNDkzOTAiLCJjaWQiOiJzYi04OGU1MjJmYi1mZGVkLTQ5MzMtYTgzZi04NjM3ZTBjNDFiMDkhYjM0NzkzN3x4c3VhYSFiNDkzOTAiLCJhenAiOiJzYi04OGU1MjJmYi1mZGVkLTQ5MzMtYTgzZi04NjM3ZTBjNDFiMDkhYjM0NzkzN3x4c3VhYSFiNDkzOTAiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6ImJhMWFiZjg0IiwiaWF0IjoxNzMxMzE2MTkxLCJleHAiOjE3MzEzNTkzOTEsImlzcyI6Imh0dHBzOi8vNGU4MTIzNTd0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL29hdXRoL3Rva2VuIiwiemlkIjoiNjA4NjJlMzEtMjUyNC00OTMwLWFmMDgtMmUyZDgxMzVkZmFlIiwiYXVkIjpbInVhYSIsInNiLTg4ZTUyMmZiLWZkZWQtNDkzMy1hODNmLTg2MzdlMGM0MWIwOSFiMzQ3OTM3fHhzdWFhIWI0OTM5MCJdfQ.F2GHHGOT5s0Oi6zLi-pgbdkxckA1KB9shdADDt5dflqQyCFI_NMcxIIhtQPSlJSM6mqBpxxXqxN0wVEIZT1FCsm5-Ximk8OF3PJwJSYxxLbZZe0aCy16wVnWitLaHCLqfdOjAy2ThYX-XIJ3Dbc1_6yj2uhFTRAPF56Zz1dIkTcIMNVrLUjQahN7BlTxAzq2wQN8WoCmjhQzs8WzUohYqb2-CHSHzL_G9p7jtTkb4XSvYbHx0CDmHBDftxdbq6n_fM7YvlEG8bzzEiuBxKC8ho_Clz7B7DryuxF9gcSTnaohmJhYJbIa8INNwQ0fNYuRQ2-yxoKlqyEBWKgr_n-06A'
  useEffect(()=>{
    fetch(url, {
      method:"GET",
      // mode: "no-cors",
      // headers: `Bearer ${token}`
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
