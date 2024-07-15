import { TTaskForm } from '@/types/task.types';
import { MutableRefObject } from 'react';
import { UseFormSetValue } from 'react-hook-form';

export interface IEmojiProps {
	isOpenEmoji: boolean;
	fieldName: string;
	setValue: UseFormSetValue<TTaskForm>;
	fieldRef: MutableRefObject<HTMLInputElement | null>;
}

export type TUseArgEmoji = Omit<IEmojiProps, 'isOpenEmoji'>;
