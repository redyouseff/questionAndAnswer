import {Button, Col, Collapse, Container, Form, Row} from"react-bootstrap"
import { useState } from "react";
import data from "./data";
const FormLabel =({addView,notify})=>{
    let [an,setan]=useState();
let [qu,setqu]=useState();
const add=()=>{
    if(an==""||qu==""){
        
            notify("من فضلك اكمل البيانات ","error")
    }
    else{
        data.push({id:Math.random(),a:an,q:qu})
    addView();
   setan("")
   setqu("")
   notify("تمت الاضافه بينجاح ");
    }
    
    
}

    return(
        <Row>
          
        <Col sm="4"> <Form.Control onChange={(e)=>{setqu(e.target.value)}}  type="text" placeholder="السؤال " value={qu}/>    </Col>
        <Col sm="4">
        <Form.Control onChange={(e=>{setan(e.target.value)})} type="text" placeholder="الجواب" value={an}/>
        </Col>
        <Col sm="2">
        <Button onClick={add} variant="primary" type="submit">
       اضافه 
      </Button>
        </Col>
      
       
      
        </Row>

    )
}
export default FormLabel