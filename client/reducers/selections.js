export default function selections(state=[], action) {


  switch(action.type){
    case "ADD_SELECTION": {
			const addSelectionList = [...state.selections,   {
          id: action.selectionID,
      }];
      return {
        ...state,
				selections: addSelectionList
		 	};
	 	}

    case "REMOVE_SELECTION": {
			const removeSelectionList = [
				...state.selections.slice(0, action.selectionID),
				...state.selections.slice(action.selectionID + 1)
			];
      return {
				...state,
				selections: removeSelectionList
			};
		}

    default:
      return state;
  }
}
