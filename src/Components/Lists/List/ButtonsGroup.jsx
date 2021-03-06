import React from 'react';
import s from '../Lists.module.scss';

export const ButtonsGroup = React.memo((
	{
		isSublist, createSublist, setRemoveDescription,
		numberArr, desc, changeItemOrder, id, index,
		setRemoveSublist
	}) => {


	const remove = () => {
		!isSublist
			? setRemoveDescription({id, numberArr})
			: setRemoveSublist({id, numberArr})
	};

	const addSublist = () => {
		createSublist(id);
	};

	const setChangeItemOrder = () => changeItemOrder(index, numberArr);

	return (
		<>
			<button className={s.up}
							disabled={index === desc.length - 1}
							onClick={setChangeItemOrder}>
				↕
			</button>
			<button className={s.add}
							disabled={isSublist}
							onClick={addSublist}>
				Add Sublist
			</button>

			<button className={s.remove}
							onClick={remove}>
				Remove
			</button>
		</>
	);
});

