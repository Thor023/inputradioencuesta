import './App.css';
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FormGroup, Label, Input} from "reactstrap";

function App() {
  const[framework, setFramework] = useState(1);

  const cambioRadioFramework=e=>{
    setFramework(e.target.value);
  }

  return (
    <div className='container'>
      <div className="App">
      <FormGroup>
        <h5>¿Qué tan probable es que recomiendes Easy.cl a tus familiares y amigos?Considera una escala de 0 a 10, donde 0 es "Nada probable " y 10  es "Muy Probable".</h5>

        <FormGroup className="formGroupRadios">
          <FormGroup>
            <Input
              id="radio0"
              type="radio"
              value="0"
              checked={framework === 0 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio0">
              0. Nada probable
            </Label>
          </FormGroup>

          <FormGroup>
            <Input
              id="radio1"
              type="radio"
              value="1"
              checked={framework === 1 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio1">
              1
            </Label>
          </FormGroup>

          <FormGroup>
            <Input
              id="radio2"
              type="radio"
              value="2"
              checked={framework ===2 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio2">
              2
            </Label>
          </FormGroup>

          <FormGroup>
            <Input
              id="radio3"
              type="radio"
              value="3"
              checked={framework === 3 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio3">
            3
            </Label>
          </FormGroup>

          <FormGroup>
            <Input
              id="radio4"
              type="radio"
              value="4"
              checked={framework === 4 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio4">
              4
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="radio5"
              type="radio"
              value="5"
              checked={framework === 5 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio5">
              5
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="radio6"
              type="radio"
              value="6"
              checked={framework === 6 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio6">
              6
            </Label>
          </FormGroup>
          
          <FormGroup>
            <Input
              id="radio7"
              type="radio"
              value="7"
              checked={framework === 7? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio7">
              7
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="radio8"
              type="radio"
              value="8"
              checked={framework === 8 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio8">
              8
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="radio9"
              type="radio"
              value="9"
              checked={framework === 9 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio9">
              9
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="radio10"
              type="radio"
              value="10"
              checked={framework === 10 ? true : false}
              onChange={cambioRadioFramework}
            />
            <Label for="radio10">
              10. Muy Probable
            </Label>
          </FormGroup>

        </FormGroup>

      </FormGroup>

      <br />
      <p>El radio button seleccionado es: <b>{framework}</b></p>
      </div>
    </div>
  );
}

export default App;
