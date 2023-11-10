
import {Button, Col, Collapse, Container, Row} from"react-bootstrap"

import { useState } from "react";
import FormLabel from "./componant/Form.js";
import AccordionLabel from "./componant/Accordion.js";
import Delete from "./componant/Delete.js";
import"./App.css"
import data from "./componant/data.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = (massage,type) =>{
  if(type=="error")
   {
    toast.error(massage)
   }
   else{
    toast(massage)
   }
  };

function App() {
const [state,setstate]=useState(data)
const deleteData=()=>{
data.splice(0,data.length)
  setstate([]);
  localStorage.removeItem("item");
  notify("تم الحزف بنجاح","error");
}
const addView=()=>{
  localStorage.setItem("item",JSON.stringify([...data]))
  setstate([...data])
 

}
const deletView =()=>{
  localStorage.setItem("item",JSON.stringify([...data]))
  setstate([...data])
  notify("تم الحزف بنجاح","error");

}
  return (
    <div className="App">
      <Container className="p-5  justify-content-center">
        <Row>
          <Col sm="4" className="my-1  text-center">  ادخل السؤال والجواب </Col>
            <Col sm="8"> 
            <FormLabel addView={addView} notify={notify} />
            <AccordionLabel d={state} deletView={deletView}></AccordionLabel>
            {
              localStorage.getItem("item")!=null? (<Delete deleteData={deleteData} ></Delete>):null
            }
            
             </Col>
        </Row>  

            <ToastContainer />
      </Container>
  
    </div>
  );
}

export default App;
