import React from "react";
import { Button } from "./components/ui/button/button";
import { Checkbox } from "./components/ui/checkbox/checkbox";
import { Input } from "./components/ui/input/input";
import { Title } from "./components/ui/title/title";

function App() {
  return (
    <div className="App">
      <Button text="text" variant="primary" onClick={()=>console.log(1)}></Button>
      <Title weight="bold">Пвапва</Title>
      <Title weight="regular">павап</Title>
      <Checkbox variant="active" className="checkbox"></Checkbox>
      <Input  className="input" name="input"></Input>
    </div>
  );
}

export default App;


// Сделать компоненты: инпут, поле ввода текста (textarea), контекст, хукформ, 
// Застилизовать все компоненты