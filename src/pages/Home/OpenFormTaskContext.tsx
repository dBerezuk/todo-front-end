import useCombineKeyOutside from '@/hooks/useCombineKeyOutside';
import { IOpenFormTaskContext } from '@/types/open-form-task.types';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

export const OpenEditTaskContext = createContext<IOpenFormTaskContext>(
	{} as IOpenFormTaskContext
);

function OpenEditTaskProvider({ children }: PropsWithChildren): JSX.Element {
	const [editTaskId, setEditTaskId] = useState<number | null>(null);
	const { ref, isShow, setIsShow } = useCombineKeyOutside(false, 'KeyZ');

	useEffect(() => {
		!isShow && setEditTaskId(null);
	}, [isShow]);

	return (
		<OpenEditTaskContext.Provider
			value={{ editTaskId, setEditTaskId, ref, isShow, setIsShow }}
		>
			{children}
		</OpenEditTaskContext.Provider>
	);
}

export default OpenEditTaskProvider;
