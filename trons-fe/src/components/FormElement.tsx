import { useState } from "react"
import { useHistory } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"

const FormElement = (props: any) => {
    const slotObj = localStorage.getItem(props.match.params.slot);
    const [obj, setObj] = useState(JSON.parse(slotObj || ""));
    const history = useHistory();

    const handleSave = (e: any) => {
        e.preventDefault();
        const newObj = {
            "_id":props.match.params.slot,
            "set":true,
            "name": obj.name,
            "lastName": obj.lastName,
            "phone": obj.phone,
        };
        
        localStorage.setItem(props.match.params.slot, JSON.stringify(newObj));
        fetch(`http://localhost:3100/schedule/${props.match.params.slot}`, { 
            method: 'PUT', 
            headers: { 
              'Content-type': 'application/json'
            }, 
            body: JSON.stringify(newObj) 
          })
          .catch(err => console.log(err));
        history.push("/");
    }

    return(
        <Container>
            <h1>Book your Slot</h1>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" value={obj.name} onChange={(e: any) => setObj({...obj, name:e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input type="text" value={obj.lastName} onChange={(e: any) => setObj({...obj, lastName:e.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label>Phone</Label>
                    <Input type="text" value={obj.phone} onChange={(e: any) => setObj({...obj, phone:e.target.value})} />
                </FormGroup>
                <div style={{float:"right"}}>
                    <Button color="primary" onClick={handleSave}>Save</Button> &nbsp;
                    <Button color="secondary" onClick={() => history.push("/")} >Cancel</Button>
                </div>
            </Form>
        </Container>
    )
    
}

export default FormElement;