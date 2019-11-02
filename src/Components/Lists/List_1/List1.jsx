import React, {useState, useEffect} from 'react';
import s from './../Lists.module.scss';
import {TextField} from "../TextField/TextField";
import ContactForm from "../Form/ContactForm";

export const List1 = ({
												listsArr1, setShowDescription, setRemoveDescription,
												addNewField, editMode, setShowFormEdit, setChangeContent,
												setChangeItemOrder
											}) => {

	const [desc, setDesc] = useState(listsArr1);
	const [IdAndArrNumber, setNewIdAndArrNumber] = useState(null);
	useEffect(() => {
		setDesc(listsArr1)
	}, [listsArr1, listsArr1.length]);


	const onSubmit = (formData) => {
		const newContentForSubmit = {
			name: formData.name,
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
		setIdAndArrNumber(date);
		setShowFormEdit(date)

	};
	const changeItemOrder = (i, list = 0) => {
		[desc[i], desc[i + 1]] = [desc[i + 1], desc[i]];
		const newArray = desc.filter(d => d);
		setChangeItemOrder({newArray, list})
	};

	return (
		<div className={s.list_1_Wrapper}>
			<div><b>List_1</b></div>
			{desc.length && desc.map((list, i) =>
				<div className={s.list_1} key={Math.random()}>
					{list.showDesc &&
					<>
						{list.showForm && <ContactForm {...{toggleForm, onSubmit, list: 0, id: list.id}} />}
						<div className={s.showDesc} onDoubleClick={() =>!editMode && toggleForm({id: list.id, list: 0})
						}>
						<span className={s.showDescEmail}>
							{list.email}/
						</span>
							<span className={s.showDescPhone}>
							/{list.phone}
						</span>
						</div>
					</>}
					<div className={s.description}
							 onDoubleClick={() => setShowDescription({status: !list.showDesc, id: list.id, list: 0})}>
						{list.name}
					</div>
					<button className={s.up} disabled={i === desc.length - 1} onClick={() => changeItemOrder(i)}>↕</button>
					<button className={s.add}>Add Sublist</button>
					<button className={s.remove} onClick={() => setRemoveDescription({id: list.id, list: 0})}>Remove</button>
				</div>
			)}
			<TextField list={0} addNewField={addNewField}/>
		</div>
	);
};

