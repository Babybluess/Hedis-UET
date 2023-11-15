const initialState = {
  data : ''
}

const FavorReducer = (state = initialState, action,) => {
    switch(action.type){
      case 'UPDATEDFAVOR': 
          return {
            ...state,
            data : state.data
          }
        default:
          return state
    } 
}

export default FavorReducer;