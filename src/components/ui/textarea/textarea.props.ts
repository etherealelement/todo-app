import { InputHTMLAttributes } from "react";

export interface InputTextarea extends InputHTMLAttributes<HTMLAllCollection> {
	name: string;
	className: string;
	placeholder?: string;
}