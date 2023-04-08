let initialState={
  msgs:[]
}


function reducer(state=initialState,action){
  console.log(action)
const {type,payload}=action
switch(type){
  case "makeKeyword":
    return {
      ...state.msgs,
      msgs:[
        ...state.msgs,payload.message,
        
        
      ],

    }
}
}

export default reducer