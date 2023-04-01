import { FC } from 'react';
import { InputTextarea } from './textarea.props';
import styles from "./textarea.module.css";
import { SubmitHandler, useForm} from "react-hook-form";

export const Textarea: FC<InputTextarea> = ({name, placeholder,value, className, ...props}) => {
	const {register , handleSubmit} = useForm<InputTextarea>();

	const onSubmit: SubmitHandler<InputTextarea> = (data) => {
		alert(`Данные получены! от ${data.name}`)
	}

	return <>
		<form onSubmit={handleSubmit(onSubmit)}>

	<textarea {...register("name")} className={styles.textarea}>
</textarea>

		</form>
	</>
};