import { FC } from "react";
import { InputTextarea } from "./textarea.props";
import styles from "./textarea.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

export const Textarea: FC<InputTextarea> = ({
  name,
  placeholder,
  value,
  className,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTextarea>();

  const onSubmit: SubmitHandler<InputTextarea> = (data) => {
    alert(`Данные получены! от ${data.name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("name", {
            required: "Поле обязательно к заполнению",
						minLength: {
							value: 1,
							message: "Не менее одного символа"
						},
          })}
          className={styles.textarea}
        ></textarea>
        {errors.name && <div style={{ color: "red" }}>{errors.name.message}</div>}
        <div>
					<button>Send</button>
				</div>
      </form>
    </>
  );
};
