import axios from 'axios'


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

const FETCH_SMURFS = 'FETCH_SMURFS';
const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS })
  axios
    .get('http://localhost:3333/api/smurfs')
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: err});
    })
}