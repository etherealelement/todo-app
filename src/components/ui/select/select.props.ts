import { DetailedHTMLProps,SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form"




export interface SelectOption {
	value:string;
	label:string
}


export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
	values: SelectOption[],
	error?:FieldError | undefined
}