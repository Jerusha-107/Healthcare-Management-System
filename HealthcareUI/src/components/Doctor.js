import FetchAllDoctors from "./FetchAllDoctors";
import NewPatient from "./NewPatient";
import FetchConsultedDoctors from "./FetchConsultedDoctors";
import ConsultedDoctors from "./ConsultedDoctors";
import FetchNotConsultedDoctors from "./FetchNotConsultedDoctors";
import NotConsultedDoctors from "./NotConsultedDoctors";
import { useState } from "react";
import  Button  from "@mui/material/Button";
function Doctor(){
    const[status,setstatus]=useState('');

    function viewActive(){
        setstatus("active");
        console.log("Inside viewactive function");
        

    }
    
    return(<div><br></br>
        <Button variant="contained" color="success" onClick={viewActive}>
        Available Doctor Details
    </Button><sp></sp>
    
    {status === "active" && <FetchAllDoctors clickstatus={status}/>}
    {status === "active" && <FetchConsultedDoctors clickstatus={status}/>}
    {status === "active" && <FetchNotConsultedDoctors clickstatus={status}/>}
    </div>)
}

export default Doctor;