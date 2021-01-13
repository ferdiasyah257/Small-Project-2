const initialState = {
    total: 0,
  }
  
  const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
      return {
        ...state,
        total: state.total + 1
      }
    }
    else if (action.type === 'minSatu') {
      return {
          ...state,
          total: state.total - 1
      }
    }

    else{
        return {
            ...state
        }
    }
  }
  
  export default rootReducer;