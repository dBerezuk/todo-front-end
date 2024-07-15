import Checkbox from '@/Ui/Checkbox/Checkbox.tsx';

import FieldEmoji from '@/Ui/Fields/FieldEmoji/FieldEmoji.tsx';
import useForm from './useForm';

import styles from './Form.module.scss';

function Form(): JSX.Element {
	const { register, handleSubmit, onSubmit, setValue, errors } = useForm();

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Checkbox label="Checked" value="true" {...register('isCompleted')} />
			<FieldEmoji
				label="Task name"
				fieldName="text"
				placeholder="Enter the task name"
				setValue={setValue}
				error={errors.text}
				{...register('text', {
					required: true
				})}
			/>
			<button className="visually-hidden" type="submit">
				create task
			</button>
		</form>
	);
}

export default Form;
