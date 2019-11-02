import React, {useState, useEffect} from 'react';
import s from './../Lists.module.scss';
import {TextField} from "../TextField/TextField";
import ContactForm from "../Form/ContactForm";

export const List3 = ({
												listsArr3, setShowDescription, setRemoveDescription,
												addNewField, editMode, setShowFormEdit,setChangeContent
											}) => {

	const [desc, setDesc] = useState(listsArr3);
	const [IdAndArrNumber, setNewIdAndArrNumber] = useState(null);
	useEffect(() => {
		setDesc(listsArr3)
	}, [listsArr3, listsArr3.length]);

	const onSubmit = (formData) => {
		const newContentForSubmit = {
			name:formData.name,
			phone: formData.phone,
			email: formData.email,
			list: IdAndArrNumber.list,
			id: IdAndArrNumber.id
		};
		setChangeContent(newContentForSubmit);

	};
	const setIdAndArrNumber = (date) => {
		setNewIdAndArrNumber(date)
	};
	const toggleForm = (date) => {
		setShowFormEdit(date)

	};
	return (
		<div className={s.list_3_Wrapper}>
			<div><b>List_3</b></div>
			{desc.length && desc.map(list =>
				<div className={s.list_3} key={Math.random()}>
					{list.showDesc &&
					<>
						{list.showForm && <ContactForm {...{toggleForm, onSubmit, list: 2, id: list.id}} />}
						<div className={s.showDesc} onDoubleClick={() => {
							setIdAndArrNumber({id: list.id, list: 2});
							toggleForm({id: list.id, list: 2});
						}}>
						<span className={s.showDescEmail}>
							{list.email}/
						</span>
							<span className={s.showDescPhone}>
							/{list.phone}
						</span>
						</div>
					</>}

					<div className={s.description}
							 onDoubleClick={() => setShowDescription({status: !list.showDesc, id: list.id, list: 2})}>
						{list.name}
					</div>
					<button className={s.up}>↕</button>
					<button className={s.down}>↕</button>
					<button className={s.add}>Add Sublist</button>
					<button className={s.remove} onClick={() => setRemoveDescription({id: list.id, list: 2})}>Remove</button>
				</div>
			)}
			<TextField list={2} addNewField={addNewField}/>
		</div>
	);
};

