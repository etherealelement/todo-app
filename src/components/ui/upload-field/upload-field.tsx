import { FC  } from 'react';
import {UploadFieldProps} from './upload-field.props'
import clsx from 'clsx';
import styles from './upload-field.module.css';
import {useUpload} from './useUpload.hook'

export const UploadField:FC<UploadFieldProps>= ({onChange,placeholder,error,folder,isNoImage,value}): JSX.Element => {

	const { isLoading, uploadFile } = useUpload(onChange, folder);


	return 	<div className={clsx(styles.field, styles.uploadField)}>
	<div className={styles.uploadFlex}>
		<label>
			<span>{placeholder}</span>
			<input type='file' onChange={uploadFile} />
			{error && <div className={styles.error}>{error.message}</div>}
		</label>

		{!isNoImage && (
			<div className={styles.uploadFileContainer}>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					value && <img alt='sdfsdf' src={`http://localhost:5000${value}`}  />
				)}
			</div>	
		)}
	</div>
</div>
};