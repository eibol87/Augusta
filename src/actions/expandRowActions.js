import {
  UPDATE_STATE_EXPAND,
  LOAD_STATE_EXPAND,
  INIT_STATE_EXPAND
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

export function initStateExpand () {
  return {
    type: INIT_STATE_EXPAND
  };
}
