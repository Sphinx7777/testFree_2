import {load} from 'redux-localstorage-simple';

const SHOW_DESCRIPTION = '/listsReducer///SHOW_DESCRIPTION';
const SHOW_FORM_EDIT = '/listsReducer///SHOW_FORM_EDIT';
const REMOVE_DESCRIPTION = '/listsReducer///REMOVE_DESCRIPTION';
const ADD_NEW_FIELD = '/listsReducer///ADD_NEW_FIELD';
const SET_CHANGE_CONTENT = '/listsReducer///SET_CHANGE_CONTENT';
const SET_CHANGE_ITEM_ORDER = '/listsReducer///SET_CHANGE_ITEM_ORDER';


let data = load({namespace: 'lists'});
let initialState = data.lists;

if (!initialState || !initialState.listsArr || !initialState.listsArr.length) {
	initialState = {
		listsArr: [

			[{id: 1, name: '1', phone: '111 11 11 11', email: '111@gmail.com', showDesc: false, showForm: false},
				{id: 2, name: '11', phone: '111 11 11 11', email: '111@gmail.com', showDesc: false, showForm: false},
				{id: 3, name: '111', phone: '111 11 11 11', email: '111@gmail.com', showDesc: false, showForm: false}
			]

			,
			[{id: 1, name: '2', phone: '222 22 22 22', email: '222@gmail.com', showDesc: false, showForm: false},
				{id: 2, name: '22', phone: '222 22 22 22', email: '222@gmail.com', showDesc: false, showForm: false},
				{id: 3, name: '222', phone: '222 22 22 22', email: '222@gmail.com', showDesc: false, showForm: false}
			]
			,
			[{id: 1, name: '3', phone: '333 33 33 33', email: '333@gmail.com', showDesc: false, showForm: false},
				{id: 2, name: '33', phone: '333 33 33 33', email: '333@gmail.com', showDesc: false, showForm: false},
				{id: 3, name: '333', phone: '333 33 33 33', email: '333@gmail.com', showDesc: false, showForm: false}
			]
			,
		],

		addNewFieldStatus: false,
		editMode: false
	};
}


const listsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_DESCRIPTION: {
			return {
				...state, ...state.listsArr[action.list] = state.listsArr[action.list].map(list => {
					if (list.id === action.id) {
						list.showDesc = !list.showDesc;
						return list;
					}
					return list;
				})
			}
		}
		case SHOW_FORM_EDIT: {
			return {
				...state, ...state.listsArr[action.list] = state.listsArr[action.list].map(list => {
					if (list.id === action.id) {
						list.showForm = !list.showForm;
						return list;
					}
					return list;
				}), editMode: !state.editMode
			}
		}
		case SET_CHANGE_CONTENT: {
			return {
				...state, ...state.listsArr[action.list] = state.listsArr[action.list].map(list => {
					if (list.id === action.id) {
						list.email = action.email;
						list.name = action.name;
						list.phone = action.phone;
						list.showForm = false;
						return list;
					}
					return list;
				}), editMode: false
			}
		}
		case REMOVE_DESCRIPTION: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.list] = state.listsArr[action.list].filter(list => list.id !== action.id
				)
			}
		}
		case ADD_NEW_FIELD: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.list].push(action.newField),
				addNewFieldStatus: !state.addNewFieldStatus
			}
		}
		case SET_CHANGE_ITEM_ORDER: {
			return {
				...state, ...state.listsArr, ...state.listsArr[action.list]=action.newArray
			}
		}
		default:
			return state;
	}
};


export const setShowDescription = (date) => ({type: SHOW_DESCRIPTION, ...date});
export const setShowFormEdit = (date) => ({type: SHOW_FORM_EDIT, ...date});
export const setRemoveDescription = (date) => ({type: REMOVE_DESCRIPTION, ...date});
export const addNewField = (date) => ({type: ADD_NEW_FIELD, ...date});
export const setChangeContent = (date) => ({type: SET_CHANGE_CONTENT, ...date});
export const setChangeItemOrder = (date) => ({type: SET_CHANGE_ITEM_ORDER, ...date});


export default listsReducer;