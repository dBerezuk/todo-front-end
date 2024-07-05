import Checkbox from '@/Ui/Checkbox/Checkbox.tsx';

import FieldEmoji from '@/Ui/Fields/FieldEmoji/FieldEmoji.tsx';
import useForm from './useForm';

import { TaskFields } from '@/types/task.types';

import styles from './Form.module.scss';

function Form(): JSX.Element {
	const { register, handleSubmit, onSubmit, setValue, errors } = useForm();

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Checkbox
				label="Checked"
				value="1"
				{...register(TaskFields.IS_COMPLETED)}
			/>
			<FieldEmoji
				label="Task name"
				fieldName={TaskFields.NAME}
				placeholder="Enter the task name"
				setValue={setValue}
				error={errors[TaskFields.NAME]}
				{...register(TaskFields.NAME, {
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
