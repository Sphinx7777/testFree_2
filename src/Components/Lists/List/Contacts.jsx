import React from 'react';
import s from '../Lists.module.scss';


export const Contacts = React.memo (({setShowDescription, listArr, editMode, toggleForm,list}) => {


	return (
		<div className={s.showDesc}
				 onDoubleClick={() => !editMode && toggleForm({id: list.id, list: listArr})
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
							list: listArr
						})}>
								X
							</span>
		</div>
	);
});

