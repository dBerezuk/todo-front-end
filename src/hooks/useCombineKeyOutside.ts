import { useEffect, useRef, useState } from 'react';

import { IControlElem } from '@/types/control-elem.types.ts';

function useCombineKeyOutside(
	initialIsVisible: boolean,
	codeTarget: string
): IControlElem {
	const [isShow, setIsShow] = useState<boolean>(initialIsVisible);
	const ref = useRef<HTMLElement | null>(null);

	const onClickOutside = (e: any) => {
		if (ref.current && !ref.current?.contains(e.target)) {
			setIsShow(false);
		}
	};

	const onKey = (e: KeyboardEvent) => {
		if (e.code === codeTarget && (e.ctrlKey || e.metaKey) && !e.repeat) {
			e.preventDefault();
			setIsShow(_ => !_);
		}
	};

	useEffect(() => {
		document.addEventListener('mouseup', onClickOutside);
		document.addEventListener('keydown', onKey);

		return () => {
			document.removeEventListener('mouseup', onClickOutside);
			document.removeEventListener('keydown', onKey);
		};
	});

	return { ref, isShow, setIsShow };
}

export default useCombineKeyOutside;
