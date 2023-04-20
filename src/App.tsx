import React, {useState} from "react";
import { Button } from "./components/ui/button/button";
import { Checkbox } from "./components/ui/checkbox/checkbox";
import { Input } from "./components/ui/input/input";
import { Textarea } from "./components/ui/textarea/textarea";
import { Title } from "./components/ui/title/title";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Select } from "./components/ui/select/select";
import { UploadField } from "./components/ui/upload-field/upload-field";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {AuthPage} from './pages/auth/Auth.page'


const queryClient = new QueryClient()


export const validEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface RegFileds {
  email: string;
  password: string;
}


interface UploadInt {
img:string;
}

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UploadInt>({
    mode: "onChange",
  });


  const onSubmit: SubmitHandler<UploadInt> = (data) => {
    alert("Загрузка прошла успешно!");
  };




  return (
    <QueryClientProvider client={queryClient}>
         <div className="App">
     
    <form onSubmit={handleSubmit(onSubmit)}>

         <Controller name="img" control={control}  defaultValue="" render={({field: {value, onChange}, fieldState: {error}}) => (
                <UploadField  placeholder="Фото" error={error} folder="photos" value={value} onChange={onChange}/>

         )}
          rules={{
            required: 'Фото обязательное поле!'
          }}
        
         />

         <AuthPage />

  <button>send</button>
    </form>
    </div>
    </QueryClientProvider>
  );
}

export default App;


