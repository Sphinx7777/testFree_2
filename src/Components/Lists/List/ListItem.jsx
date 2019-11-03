import React from 'react';
import s from '../Lists.module.scss';
import {TextField} from "../TextField";
import ContactForm from "../Form/ContactForm";
import {Contacts} from "./Contacts";
import {ButtonsGroup} from "./ButtonsGroup";

export const ListItem = React.memo(({
																			setShowDescription, setRemoveDescription, numberArr,
																			addNewField, editMode, desc, toggleForm, onSubmit,
																			changeItemOrder, createSublist, isSublist, setRemoveSublist,
																		}) => {


	return (
		<div className={!isSublist ? s.listWrapper : (s.listWrapper + ' ' + s.sublist)}>
			<div>List_{!isSublist ? numberArr + 1 : `${numberArr + 1}_1`}</div>
			{desc.length && desc.map((list, index) =>
				<React.Fragment key={Math.random()}>
					<div className={s.list}>
						{list.showDesc &&
						<>
							{list.showForm && <ContactForm {...{toggleForm, onSubmit, id: list.id}} />}
							<Contacts {...{
								setShowDescription, numberArr, editMode, toggleForm, list
							}} />
						</>}
						<div className={s.descName}
								 onDoubleClick={() =>
									 !editMode && setShowDescription({
										 status: !list.showDesc,
										 id: list.id,
										 numberArr
									 })}>
							{list.name}
						</div>
						<ButtonsGroup {...{
							isSublist, setRemoveSublist, createSublist, setRemoveDescription,
							numberArr, desc, changeItemOrder, id: list.id, index
						}} />
					</div>
					{list.sublist && list.sublist.length && <ListItem
						{...{
							isSublist: 'sublist' in list, desc: list.sublist,
							setShowDescription, setRemoveDescription, numberArr,
							addNewField, editMode, toggleForm, onSubmit,
							changeItemOrder, createSublist, setRemoveSublist
						}} />}
				</React.Fragment>
			)}
			<TextField numberArr={numberArr} addNewField={addNewField}/>
		</div>
	);
});

