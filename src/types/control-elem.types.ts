import { Dispatch, SetStateAction } from 'react';

export interface IControlElem {
	ref: any,
	isShow: boolean,
	setIsShow: Dispatch<SetStateAction<boolean>>
}