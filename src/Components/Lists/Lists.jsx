import React from 'react';
import s from './Lists.module.scss';
import {List1} from "./List_1/List1";
import {List2} from "./List_2/List2";
import {List3} from "./List_3/List3";


export const Lists = ({
												listsArr, listsArr1, listsArr2, listsArr3, setShowDescription,
												setRemoveDescription, addNewField, editMode, setShowFormEdit,
												setChangeContent,setChangeItemOrder
											}) => {


	return (
		<div className={s.listsWrapper}>
			<List1 {...{
				listsArr,
				listsArr1,
				setShowDescription,
				setRemoveDescription,
				addNewField,
				editMode,
				setShowFormEdit,
				setChangeContent,
				setChangeItemOrder
			}}/>
			<List2 {...{
				listsArr,
				listsArr2,
				setShowDescription,
				setRemoveDescription,
				addNewField,
				editMode,
				setShowFormEdit,
				setChangeContent,
				setChangeItemOrder
			}}/>
			<List3 {...{
				listsArr,
				listsArr3,
				setShowDescription,
				setRemoveDescription,
				addNewField,
				editMode,
				setShowFormEdit,
				setChangeContent,
				setChangeItemOrder
			}}/>
		</div>
	);
};

