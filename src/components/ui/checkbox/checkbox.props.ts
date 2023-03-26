import { InputHTMLAttributes } from "react";

export interface InputCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	variant: "active" | "disable";
}
