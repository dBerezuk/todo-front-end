import cn from 'classnames';
import { forwardRef } from 'react';

import useFieldEmoji from './useFieldEmoji.ts';

import ButtonEmoji from './ButtonEmoji/ButtonEmoji.tsx';
import Emoji from './Emoji/Emoji.tsx';

import { IFieldEmojiProps } from '@/types/fields.types.ts';

import styles from './../Fields.module.scss';

const FieldEmoji = forwardRef<HTMLInputElement, IFieldEmojiProps>(
	({ label, fieldName, setValue, error, ...rest }, ref): JSX.Element => {
		const { isOpenEmoji, fieldRef, onOpenEmoji, referents } =
			useFieldEmoji(ref);

		return (
			<div className={styles.field}>
				<label htmlFor={fieldName}>{label}</label>
				<div className={styles.box}>
					<input
						className={cn(styles.input, 'pr-11', { [styles.error]: error })}
						id={fieldName}
						ref={referents}
						{...rest}
					/>
					<ButtonEmoji isOpenEmoji={isOpenEmoji} onOpenEmoji={onOpenEmoji} />
				</div>
				<Emoji
					isOpenEmoji={isOpenEmoji}
					fieldName={fieldName}
					setValue={setValue}
					fieldRef={fieldRef}
				/>
			</div>
		);
	}
);

export default FieldEmoji;
