import tokenService from "./tokenService"

const BASE_URL = '/api/newtask'

export function create(taskInfoFromTheForm, groupid){
	// Make a post request to the server
	return fetch(`${BASE_URL}/${groupid}`, {
		method: 'POST',
		
		headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(taskInfoFromTheForm)
		
	}).then(res => {
		// Valid login if we have a status of 2xx (res.ok)
		if (res.ok) return res.json();
		throw new Error('Error submitting the Form! Hey Check the Express Terminal');
	  })
}

export function getAll(id) {
	return fetch(BASE_URL + id, {
	  headers: {
		'Authorization': 'Bearer ' + tokenService.getToken()
	  }
	})
	.then(res => res.json());
  }