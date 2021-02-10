import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import FormElement from "./components/FormElement";
import Header from './components/Header';
import Main from './components/Main';


function App() {
    const initialObject = JSON.stringify({
        "set":false,
        "name": "",
        "lastName": "",
        "phone": "",
    });
    const fetchData = (slot: string) => {
        fetch(`http://localhost:3100/schedule/${slot}`)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(data => {
            if (data !== null) {
                localStorage.setItem(slot, JSON.stringify(data));
            }
            else {
                localStorage.setItem(slot, initialObject);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
    fetchData("9to10");
    fetchData("10to11");
    fetchData("11to12");
    fetchData("12to1");
    fetchData("1to2");
    fetchData("2to3");
    fetchData("3to4");
    fetchData("4to5");

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/time/:slot" component={FormElement} />
                <Route path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
