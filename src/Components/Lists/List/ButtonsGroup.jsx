import React from 'react';
import s from '../Lists.module.scss';

export const ButtonsGroup = React.memo(({setRemoveDescription, listArr, desc, changeItemOrder,list,index}) => {


	return (
		<>
			<button className={s.up} disabled={index === desc.length - 1}
							onClick={() => changeItemOrder(index, listArr)}>↕
			</button>
			<button className={s.add}>
				Add Sublist
			</button>
			<button className={s.remove}
							onClick={() => setRemoveDescription({id: list.id, list: listArr})}>
				Remove
			</button>
		</>
	);
});

