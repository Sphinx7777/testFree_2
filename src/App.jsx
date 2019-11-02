import React, {Component} from 'react';
import s from './App.module.scss';
import {Lists} from "./Components/Lists/Lists";
import {connect} from "react-redux";
import {
	addNewField, setRemoveDescription, setShowDescription, setShowFormEdit,
	setChangeContent, setChangeItemOrder
} from "./Components/Redux/listsReducer";


class App extends Component {

	render() {
		let {setShowDescription, setRemoveDescription, addNewField,
			setShowFormEdit,setChangeContent,setChangeItemOrder
		} = this.props;
		return (
			<div className={s.app}>
				<Lists
					editMode={this.props.editMode}
					listsArr1={this.props.listsArr1}
					listsArr2={this.props.listsArr2}
					listsArr3={this.props.listsArr3}
					setShowDescription={setShowDescription}
					setRemoveDescription={setRemoveDescription}
					addNewField={addNewField}
					setShowFormEdit={setShowFormEdit}
					setChangeContent={setChangeContent}
					setChangeItemOrder={setChangeItemOrder}
				/>
			</div>
		);
	}
}

export default connect(state => ({
	editMode: state.lists.editMode,
	listsArr: state.lists.listsArr,
	listsArr1: state.lists.listsArr[0],
	listsArr2: state.lists.listsArr[1],
	listsArr3: state.lists.listsArr[2],
	addNewFieldStatus: state.lists.addNewFieldStatus,

}), {setShowDescription, setRemoveDescription, setChangeItemOrder,
	addNewField, setShowFormEdit,setChangeContent
})(App);

