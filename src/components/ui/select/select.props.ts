import { InputHTMLAttributes } from "react";

export interface SelectProps extends InputHTMLAttributes<HTMLAllCollection> {
	name: string;
	className: string;
	placeholder?: string;
}