import React from 'react';
import s from '../Lists.module.scss';


export const Contacts = React.memo (({setShowDescription, numberArr, editMode, toggleForm,list}) => {


	return (
		<div className={s.showDesc}
				 onDoubleClick={() => !editMode && toggleForm(list.id)
				 }>
						  <span className={s.showDescEmail}>
							✉ {list.email}
						  </span>
			<span className={s.showDescPhone}>
							✆ {list.phone}
						  </span>
			<span className={s.closeDesc}
						onClick={() => !editMode && setShowDescription({
							status: !list.showDesc,
							id: list.id,
							numberArr
						})}>
								X
							</span>
		</div>
	);
});

