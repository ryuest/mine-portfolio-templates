export default function(state = [], action) {

    switch (action.type) {
        case "ADD_SELECTION":
            {
                const addSelectionToList = {
                    id: action.selectionID
                }
                if (!shouldUpdate(state, action.selectionID)) {
                    return [
                        ...state, {
                            selection: addSelectionToList
                        }
                    ];
                } else {
                    return state;
                }
            }

        case "REMOVE_SELECTION":
            {
                const removeSelectionList = [
                    ...state.selections.slice(0, action.selectionID),
                    ...state.selections.slice(action.selectionID + 1)
                ];
                return {
                    ...state,
                    selection: removeSelectionList
                };
            }

        default:
            return state;
    }
}

function shouldUpdate(state, id) {
    let found = false
    if (state.length > 0) {
        state.map((selections) => {
            if (selections.selection.id === id) {
                found = true
            }
        })
    }
    return found
}
