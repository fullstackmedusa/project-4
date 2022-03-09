import tokenService from "./tokenService"

const BASE_URL = '/api';

export function create(taskInfoFromTheForm, groupId){
	// Make a post request to the server
	return fetch(`${BASE_URL}/${groupId}/newtask`, {
		method: 'POST',
		
		headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(taskInfoFromTheForm)
		
	}).then(res => {
		// Valid login if we have a status of 2xx (res.ok)
		if (res.ok) return res.json();
		throw new Error('Error submitting the Form! Hey Check the Express Terminal');
	  })
}

