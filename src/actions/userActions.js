import {FETCH_USER} from '../actions/types'


export const fetchUser = (name) => dispatch => {
        fetch('http://localhost:3001/',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({name})
            })
            .then(resp => resp.json())
            .then(data => dispatch({
                type: FETCH_USER,
                payload: data
            }))
    }

