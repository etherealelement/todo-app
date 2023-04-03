import {FieldError} from 'react-hook-form'

export interface UploadFieldProps {
	folder?: string;
	value?: string;
	onChange: (...event: any[]) => void;
	placeholder: string;
	error?: FieldError;
	isNoImage?: boolean;
}