import { EmojiClickData } from 'emoji-picker-react';

import { TUseArgEmoji } from './types';

function useEmoji({ fieldRef, fieldName, setValue }: TUseArgEmoji) {
	const onEmojiClick = (currentEmoji: EmojiClickData) => {
		const field: HTMLInputElement | null = fieldRef.current;
		const text: string =
			field?.value.substring(0, field?.selectionStart as number) +
			currentEmoji.emoji +
			field?.value.substring(field?.selectionEnd as number);
		setValue(fieldName, text);
	};

	return { onEmojiClick };
}

export default useEmoji;
