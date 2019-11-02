import React,{useState} from 'react';
import s from './../Lists.module.scss';

export const TextField = ({addNewField,list}) => {
	let [description,setDescription] = useState('DoubleClick for change');
	const setNewField = ()=>{
		const newField = {id:Math.random(),name:description,phone:'',email:'',showDesc:false, showForm: false};
		addNewField({newField,list});
		setDescription(null);

	};

	return (
		<div className={s.inputWrapper}>
			<input type="text" maxLength='20' onChange={(e)=>setDescription(e.target.value)} placeholder='Name'/>
			<button onClick={setNewField} disabled={!description || description==='DoubleClick for change'}>Add</button>
		</div>
	);
};

