import React, {useState, useEffect} from 'react';
import {ListItem} from "./ListItem";

export const List = ({
											 listsArray, setShowDescription, setRemoveDescription, listArr,
											 addNewField, editMode, setShowFormEdit, setChangeContent,
											 setChangeItemOrder
										 }) => {

	const [desc, setDesc] = useState(listsArray);
	const [IdAndArrNumber, setNewIdAndArrNumber] = useState(null);

	useEffect(() => {
		setDesc(listsArray)
	}, [listsArray, listsArray.length]);

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
	const changeItemOrder = (i, listArr) => {
		[desc[i], desc[i + 1]] = [desc[i + 1], desc[i]];
		const newArray = desc.filter(d => d);
		setChangeItemOrder({newArray, list: listArr})
	};

	return (
		<>
		<ListItem {...{
			setShowDescription, setRemoveDescription, listArr,
			addNewField, editMode, desc, toggleForm, onSubmit,
			changeItemOrder
		}} />
		</>
	);
};

