import cn from 'classnames';

import Item from './Item/Item.tsx';

import { TTaskId } from '@/types/task.types.ts';
import styles from './List.module.scss';
import useList from './useList.ts';

interface IProps extends TTaskId {
	isVisible: boolean;
	toggleList: () => void;
}

function List({ _id, isVisible, toggleList }: IProps): JSX.Element | null {
	const { onEdit, onDelete } = useList(_id, toggleList);

	return (
		<div
			className={cn(styles.box, { [styles.visible]: isVisible })}
			//@ts-ignore
			inert={!isVisible ? '' : null}
		>
			<ul>
				<Item label="Редактирование" onClick={onEdit} />
				<Item
					label="Удалить"
					className="before:!bg-red/55 hover:text-white"
					onClick={onDelete}
				/>
			</ul>
		</div>
	);
}

export default List;
