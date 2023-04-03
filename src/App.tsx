import React, {useState} from "react";
import { Button } from "./components/ui/button/button";
import { Checkbox } from "./components/ui/checkbox/checkbox";
import { Input } from "./components/ui/input/input";
import { Textarea } from "./components/ui/textarea/textarea";
import { Title } from "./components/ui/title/title";
import { useForm, SubmitHandler } from "react-hook-form";

export const validEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface RegFileds {
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegFileds>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegFileds> = (data) => {
    reset();
    alert("Регистрация прошла успешно!");
  };


  const [check, setCheck] = useState(false)

  return (
    <div className="App">
      <Button
        text="text"
        variant="primary"
        onClick={() => console.log(1)}
      ></Button>
      <Title weight="bold">Пвапва</Title>
      <Title weight="regular">павап</Title>
      <Checkbox checked={check} onChange={(e) => setCheck(e.target.checked)} variant="active" className="checkbox"></Checkbox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: "Емайл обязателен!",
            pattern: {
              value: validEmail,
              message: "Пожалуйста, введите корректный адрес!",
            },
          })}
          name="email"
          error={errors.email}
        ></Input>
        <Input
          {...register("password", {
            required: "Пароль обязателен!",
            minLength: {
              value: 5, 
              message: 'Пароль должен быть не менее 5 символов!!!'
            },
            maxLength: {
              value: 30, 
              message: 'Пароль должен быть не больше 10 символов!!!'
            },
            
          })}
          error={errors.password}
          name="password"
        ></Input>

        <button>submit</button>
      </form>
      <Textarea className="textarea" name="textarea" value="hello"></Textarea>
    </div>
  );
}

export default App;


// React-hook-form,селект + react-hook-form 