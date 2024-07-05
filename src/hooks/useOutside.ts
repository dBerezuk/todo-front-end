import { useEffect, useRef, useState } from 'react';

import { IControlElem } from '@/types/control-elem.types.ts';

function useOutside(initialIsVisible: boolean): IControlElem {
	const [isShow, setIsShow] = useState<boolean>(initialIsVisible);
	const ref = useRef<HTMLElement | null>(null);

	const onClickOutside = (e: any) => {
		if (ref.current && !ref.current?.contains(e.target)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.querySelector('body')?.addEventListener('mouseup', onClickOutside);

		return () => {
			document
				.querySelector('body')
				?.removeEventListener('mouseup', onClickOutside);
		};
	});

	return { ref, isShow, setIsShow };
}

export default useOutside;
