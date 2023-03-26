import { InputHTMLAttributes } from "react";

export interface InputTextarea extends InputHTMLAttributes<HTMLAllCollection> {
	name: string;
	value: string;
	className: string;
	placeholder?: string;
}