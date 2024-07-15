import { Dispatch, SetStateAction } from 'react';
import { IControlElem } from './control-elem.types';

export interface IOpenFormTaskContext extends IControlElem {
	editTaskId: string | null;
	setEditTaskId: Dispatch<SetStateAction<string | null>>;
}
