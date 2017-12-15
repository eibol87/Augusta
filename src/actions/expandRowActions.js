import {
  UPDATE_STATE_EXPAND,
  LOAD_STATE_EXPAND,
  RESET_STATE_EXPAND_EDITED
} from './types'

export function loadExpandRow () {
  return {
    type: LOAD_STATE_EXPAND
  };
}

export function updateStateExpand (id,customer) {
  return {
    type: UPDATE_STATE_EXPAND,
    payload: id,customer
  };
}

export function resetStateExpandEdited () {
  return {
    type: RESET_STATE_EXPAND_EDITED
  };
}
