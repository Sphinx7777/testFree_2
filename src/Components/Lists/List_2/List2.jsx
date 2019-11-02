import React, {useState, useEffect} from 'react';
import s from './../Lists.module.scss';
import {TextField} from "../TextField/TextField";
import ContactForm from "../Form/ContactForm";

export const List2 = ({
												 listsArr2, setShowDescription, setRemoveDescription,
												addNewField, editMode, setShowFormEdit,setChangeContent,
											}) => {

	const [desc, setDesc] = useState(listsArr2);
	const [IdAndArrNumber, setNewIdAndArrNumber] = useState(null);
	useEffect(() => {
		setDesc(listsArr2)
	}, [listsArr2, listsArr2.length]);
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
		<div className={s.list_2_Wrapper}>
			<div><b>List_2</b></div>
			{desc.length && desc.map(list =>
				<div className={s.list_2} key={Math.random()}>
					{list.showDesc &&

					<div className={s.showDesc} onDoubleClick={() => {
						setIdAndArrNumber({id: list.id, list: 1});
						toggleForm({id: list.id, list: 1});
					}}>
						<span className={s.showDescEmail}>
							{list.email}/
						</span>
						<span className={s.showDescPhone}>
							/{list.phone}
						</span>
					</div>
					}
					{list.showForm && <ContactForm {...{toggleForm, onSubmit, list: 1, id: list.id}} />}
					<div className={s.description}
							 onDoubleClick={() => setShowDescription({status: !list.showDesc, id: list.id, list: 1})}>
						{list.name}
					</div>
					<button className={s.up}>↕</button>
					<button className={s.down}>↕</button>
					<button className={s.add}>Add Sublist</button>
					<button className={s.remove} onClick={() => setRemoveDescription({id: list.id, list: 1})}>Remove</button>
				</div>
			)}
			<TextField list={1} addNewField={addNewField}/>
		</div>
	);
};

