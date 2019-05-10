import { UPDATE_NOTES, CLEAN_NOTES } from './actions'
import { traverseInputs, uncheckAllInputs, getCheckedInputs, nodeToArray } from '../helpers'

export const reducer = (state = initialState, action) => {
  const handler = action.type ? handlers[action.type] : null

  if(!handler) return state
  return handler(state, action.payload)
}

export const initialState = {
  notes: [-1, -1, -1, -1, -1, -1]
}

export const handlers = {
  [CLEAN_NOTES]: (state) => {
    uncheckAllInputs()
    return { notes: initialState.notes }
  },
  [UPDATE_NOTES]: (state) => {
    const inputs = traverseInputs()
    const checkedInputs = getCheckedInputs(inputs)
    const notes = nodeToArray(checkedInputs)
    return { notes }
  }
}