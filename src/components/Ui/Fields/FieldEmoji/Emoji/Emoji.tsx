import EmojiPicker from 'emoji-picker-react';

import useEmoji from './useEmoji';

import { IEmojiProps } from './types';

import styles from './Emoji.module.scss';

function Emoji({ isOpenEmoji, fieldName, setValue, fieldRef }: IEmojiProps) {
	const { onEmojiClick } = useEmoji({ fieldRef, fieldName, setValue });

	return (
		<div className={styles.box}>
			<EmojiPicker
				open={isOpenEmoji}
				lazyLoadEmojis={true}
				onEmojiClick={onEmojiClick}
				width="100%"
				height={400}
			/>
		</div>
	);
}

export default Emoji;
