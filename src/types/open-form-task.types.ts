import { Dispatch, SetStateAction } from 'react';
import { IControlElem } from './control-elem.types';

export interface IOpenFormTaskContext extends IControlElem {
	editTaskId: number | null;
	setEditTaskId: Dispatch<SetStateAction<number | null>>;
}
