import {Button, Col, Collapse, Container, Row} from"react-bootstrap"
const Delete=({deleteData})=>{
    return (
        
       <Button onClick={deleteData} className="w-100">مسح الكل </Button>
    )
}
export default Delete