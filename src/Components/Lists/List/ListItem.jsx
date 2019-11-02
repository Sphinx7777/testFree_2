import React from 'react';
import s from '../Lists.module.scss';
import {TextField} from "../TextField";
import ContactForm from "../Form/ContactForm";
import {Contacts} from "./Contacts";
import {ButtonsGroup} from "./ButtonsGroup";

export const ListItem = React.memo (({
											 setShowDescription, setRemoveDescription, listArr,
											 addNewField, editMode, desc, toggleForm, onSubmit,
											 changeItemOrder

										 }) => {


	return (
		<div className={s.listWrapper}>
			<div><b>List_{listArr + 1}</b></div>
			{desc.length && desc.map((list, index) =>
				<div className={s.list} key={Math.random()}>
					{list.showDesc &&
					<>
						{list.showForm && <ContactForm {...{toggleForm, onSubmit, list: listArr, id: list.id}} />}
						<Contacts {...{
							setShowDescription, listArr, editMode, toggleForm,list:list
						}} />
					</>}
					<div className={s.descName}
							 onDoubleClick={() =>
								 !editMode && setShowDescription({
								 status: !list.showDesc,
								 id: list.id,
								 list: listArr
							 })}>
						{list.name}
					</div>
					<ButtonsGroup {...{setRemoveDescription, listArr, desc, changeItemOrder,list:list,index}} />
				</div>
			)}
			<TextField list={listArr} addNewField={addNewField}/>
		</div>
	);
});

