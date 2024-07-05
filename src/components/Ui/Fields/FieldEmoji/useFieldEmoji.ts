import { ForwardedRef, useRef, useState } from 'react';

function useFieldEmoji(ref: ForwardedRef<HTMLInputElement>) {
	const [isOpenEmoji, setIsOpenEmoji] = useState(false);

	const fieldRef = useRef<HTMLInputElement | null>(null);

	const onOpenEmoji = () => setIsOpenEmoji(_ => !_);

	const referents = (e: HTMLInputElement) => {
		typeof ref === 'function' && ref(e);
		fieldRef.current = e;
	};

	return { isOpenEmoji, fieldRef, onOpenEmoji, referents };
}

export default useFieldEmoji;
