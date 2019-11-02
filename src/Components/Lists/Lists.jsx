import React from 'react';
import s from './Lists.module.scss';
import {List} from "./List/List";



export const Lists = ({listsArr1, listsArr2, listsArr3,...props}) => {

	return (
		<div className={s.listsWrapper}>
			<List
				listsArray={listsArr1}
						listArr={0}
						{...props}
			/>
			<List
				listsArray={listsArr2}
				listArr={1}
				{...props}
			/>
			<List
				listsArray={listsArr3}
				listArr={2}
				{...props}
			/>
		</div>
	);
};

