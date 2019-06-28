import {
  FETCH_SMURFS,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURFS_FAILURE,
} from '../actions'


/*
  Be sure to import in all of the action types from `../actions`
*/


 //Your initial/default state for this project could *Although does not have to* look a lot like this


 const intialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = intialState, action) => {
  switch(action.type){
    case FETCH_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false
        }
  }
}