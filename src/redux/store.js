import { createStore } from 'redux'
import Vuex from 'vuex'

const initialState = {
  modulState : "",
  HeadModal : "",
  ShowHideAl : "d-none",
  loading : true,
  activePage:1,
  titleModal:""
}

const reducer = (state = initialState, action) => {
	if(action.type==="CHANGE_STATE"){
		if(action.payload.modulState)
			state.modulState = action.payload.modulState;
		if(action.payload.HeadModal)
			state.HeadModal = action.payload.HeadModal;
		if(action.payload.ShowHideAl)
			state.ShowHideAl = action.payload.ShowHideAl;
		if(action.payload.loading){
			state.loading = action.payload.loading;
		}
		if(action.payload.titleModal){
			state.titleModal = action.payload.titleModal;
			
		}
		//break;
		console.log(state)
			
	
	}
	
    return state
}

const storeDM = new Vuex.Store({
	  state: {
		active: 'login',
		login: true,
		register: false,
		titleModal:"Add New User",
		id:2
	  },
	  actions: {
	  changeTitle ({ title }) {
		this.state.titleModal=title
		console.log(title)
	  },
     },
	 mutations: {
                toggleActive: (state) => {
                    return state.active = ! state.active;
                },
				changeTitleModal(state, { title }) {
					state.titleModal = title;
				}
            },
})

const store = createStore(reducer)

//const store} = useContext(ReactReduxContext)

export {store,storeDM}