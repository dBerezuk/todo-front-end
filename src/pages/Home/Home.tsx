import OpenFormTaskContext from '@/pages/Home/OpenFormTaskContext';

import AddTask from '@/pages/Home/Add-task/AddTask.tsx';
import Tasks from './Tasks/Tasks';

function Home(): JSX.Element | null {
	return (
		<OpenFormTaskContext>
			<section>
				<Tasks />
			</section>
			<AddTask />
		</OpenFormTaskContext>
	);
}

export default Home;
