import {Accordion, Button, Col, Collapse, Container, Row} from"react-bootstrap"
import { useState } from "react"
import data from "./data.js"
const AccordionLabel =({d,deletView})=>{
  const deletData =(id)=>{
  const index =data.findIndex((Item)=>Item.id==id);
  data.splice(index,1);
  deletView();
  
    
  }
    let dataLocal=JSON.parse(localStorage.getItem("item"));
    
    
    return (
        <div className="my-3">
        
       
        <Accordion >
            {
                localStorage.getItem("item")!=null?( dataLocal.map((Item)=>{
                    return(
                    <Accordion.Item key={Item.id} eventKey={Item.id}>
                    <Accordion.Header >{Item.q}</Accordion.Header>
                    <Accordion.Body  >
                      <div className="m-auto p-auto">
                      <p className="d-inline">{Item.a}</p>
                    <Button onClick={()=>{deletData(Item.id)}} className="mx-3">مسح</Button>
                      </div>
                   
                    </Accordion.Body>
                  </Accordion.Item>
                    )

                })):<p className="text-center justify-content-center">لا يوجد اسئله </p>
               
            }
        

      </Accordion>
      </div>
    )
}
export default AccordionLabel;