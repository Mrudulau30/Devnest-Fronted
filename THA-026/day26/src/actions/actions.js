 const updateName = payload => {
	return {
		type: 'UPDATE_NAME',
		payload,
	};
};

 const updateEmail = payload => {
	return {
		type: 'UPDATE_EMAIL',
		payload,
	};
};
export {updateName,updateEmail};