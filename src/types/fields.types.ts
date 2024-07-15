import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormSetValue } from 'react-hook-form';
import { TTaskForm } from './task.types';

export interface IFieldEmojiProps
	extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	fieldName: string;
	setValue: UseFormSetValue<TTaskForm>;
	error?: FieldError;
}

export type TFieldDefault = Omit<IFieldEmojiProps, 'setValue'>;

export type TFieldCheckbox = Pick<IFieldEmojiProps, 'label'> &
	InputHTMLAttributes<HTMLInputElement>;
