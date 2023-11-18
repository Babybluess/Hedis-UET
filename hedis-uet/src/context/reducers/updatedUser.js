const initialState = {
    name : '',
    image: '',
    email: '',
    password: ''
  }
  
  const UserReducer = (state = initialState, action) => {
      switch(action.type){
        case 'UPDATEDUSER': 
        return {
              ...state,
              screenList : action.dataUser
        }
          default:
            return state
      } 
  }
  
  export default UserReducer;