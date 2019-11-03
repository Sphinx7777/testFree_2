import React, {useState, useEffect} from 'react';
import {ListItem} from "./ListItem";


export const List = ({
											 listsArray, setShowDescription, setRemoveDescription, numberArr,
											 addNewField, editMode, setShowFormEdit, setChangeContent,
											 setChangeItemOrder, setNewList, setRemoveSublist
										 }) => {

	const [desc, setDesc] = useState(listsArray);
	const [Id, setId] = useState(null);


	useEffect(() => {
		setDesc(listsArray)
	}, [listsArray, listsArray.length]);

	const onSubmit = (formData) => {
		const newContentForSubmit = {
			name: formData.name,
			phone: formData.phone,
			email: formData.email,
			numberArr,
			id: Id
		};
		setChangeContent(newContentForSubmit);
	};


	const createSublist = (id) => {
		const newSubList = {
			sublist: [
				{
					id: id,
					name: 'new',
					phone: '',
					email: '',
					showDesc: false,
					showForm: false
				}
			]
		};
		setNewList({newSubList, id, numberArr})
	};


	const toggleForm = (id) => {
		setId(id);
		setShowFormEdit({id, numberArr})

	};
	const changeItemOrder = (index, numberArr) => {
		[desc[index], desc[index + 1]] = [desc[index + 1], desc[index]];
		const newArray = desc.filter(d => d);
		setChangeItemOrder({newArray, numberArr})
	};

	return (
		<>
			<ListItem {...{
				setShowDescription, setRemoveDescription, numberArr,
				addNewField, editMode, desc, toggleForm, onSubmit,
				changeItemOrder, createSublist, setRemoveSublist
			}} />
		</>
	);
};

