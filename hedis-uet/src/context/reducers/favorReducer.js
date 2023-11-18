const initialState = {
  favorList : []
}

const FavorReducer = (state = initialState, action) => {
    switch(action.type){
      case 'UPDATEDFAVOR': 
          return {
            ...state,
            favorList: state.favorList.concat(action.favor)
          }
      case 'DELETEDFAVOR': 
          return {
            ...state,
            favorList: state.favorList.filter((x) => x !== action.favor)
          }
        default:
          return state
    } 
}

export default FavorReducer;