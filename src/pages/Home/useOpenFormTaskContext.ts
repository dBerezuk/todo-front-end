import { useContext } from 'react';

import { OpenEditTaskContext } from './OpenFormTaskContext.tsx';

function useOpenEditTaskContext() {
	return useContext(OpenEditTaskContext);
}

export default useOpenEditTaskContext;
