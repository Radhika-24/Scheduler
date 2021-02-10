import { useHistory } from "react-router-dom";
import { Alert, Container } from "reactstrap";

const Main = () => {
    
    
    return(
        <Container className="text-center">
            <TimeSlot slot="9to10"> 9-10am </TimeSlot>
            <TimeSlot slot="10to11"> 10-11am </TimeSlot>
            <TimeSlot slot="11to12"> 11-12pm </TimeSlot>
            <TimeSlot slot="12to1"> 12-1pm </TimeSlot>
            <TimeSlot slot="1to2"> 1-2pm </TimeSlot>
            <TimeSlot slot="2to3"> 2-3pm </TimeSlot>
            <TimeSlot slot="3to4"> 3-4pm </TimeSlot>
            <TimeSlot slot="4to5"> 4-5pm </TimeSlot>
        </Container>
    )
}

const TimeSlot = (props: any) => {
    const checkSet = (slot: string) => {
        const val = localStorage.getItem(slot);
        if (val) {
            const obj = JSON.parse(val);
            return obj.set;
        }
        return false;
    }

    const history = useHistory();

    return(
        <Alert color={checkSet(props.slot) ? "danger" : "primary"} onClick={() => history.push(`/time/${props.slot}`)}>{props.children}</Alert>
    )
}

export default Main;