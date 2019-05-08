import { UPDATE_NOTES, CLEAN_NOTES } from './actions'
import { traverseInputs, uncheckAllInputs, getCheckedInputs, nodeToArray } from '../helpers'

export const initialState = {
  notes: [-1, -1, -1, -1, -1, -1]
}

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAN_NOTES:
      uncheckAllInputs()
      return { notes: initialState.notes }

    case UPDATE_NOTES:
      const inputs = traverseInputs()
      const checkedInputs = getCheckedInputs(inputs)
      const notes = nodeToArray(checkedInputs)
      return { notes }
      
    default:
      return state
  }
}