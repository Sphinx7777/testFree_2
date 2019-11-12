import React from 'react';
import s from '../Lists.module.scss';


export const Contacts = React.memo((
	{
		showDescription, numberArr, editMode,
		toggleForm, list, isSublist, toggleFormSublist
	}) => {

	const setToggleForm = () => {
		!isSublist
			?
			toggleForm(list.id, isSublist)
			:
			toggleFormSublist(list.id, isSublist)
	};
	const setToggleShowForm = () => !editMode && setToggleForm(list.id);

	const toggleShowDescription = () => !editMode &&
		showDescription(
			{
				status: !list.showDesc,
				id: list.id,
				numberArr
			}
		);

	return (
		<div className={s.showDesc} title='DoubleClick for edit'
				 onDoubleClick={setToggleShowForm}>
						  <span className={s.showDescEmail}>
							✉ {list.email}
						  </span>
			<span className={s.showDescPhone}>
							✆ {list.phone}
			</span>
			<span className={s.closeDesc}
						onClick={toggleShowDescription}>
								X
			</span>
		</div>
	);
});

