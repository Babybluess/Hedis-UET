const initialState = {
  favorList : []
}

const FavorReducer = (state = initialState, action) => {
    switch(action.type){
      case 'UPDATEDFAVOR': 
          return {
            ...state,
            favorList: action.favorList
          }
        default:
          return state
    } 
}

export default FavorReducer;