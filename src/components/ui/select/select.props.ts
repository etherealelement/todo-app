
import { InputHTMLAttributes } from "react";

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
	variant: "active" | "disable";
}
