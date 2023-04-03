import { FC } from 'react';
import { SelectProps } from './select.props';
import styles from "./select.module.css";
import { SubmitHandler, useForm} from "react-hook-form";

export const Select: FC<SelectProps> = ({name, placeholder,value, className, ...props}) => {
	const {register , handleSubmit} = useForm<SelectProps>();

	const onSubmit: SubmitHandler<SelectProps> = (data) => {
		alert(`Данные получены! от ${data.name}`)
	}

	return <>
		<form onSubmit={handleSubmit(onSubmit)}>

	<select {...register("name")} className={styles.select}>
        <option>Выберите пункт</option>
		<option>Пункт 1</option>
		<option>Пункт 2</option>
		<option>Пункт 3</option>
</select>

		</form>
	</>
};