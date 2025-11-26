export let sessionToken = document.cookie
	? document.cookie.split(";")[0].replace("sessionToken=", "")
	: null;
export let authToken = document.cookie
	? document.cookie.split(";")[1].replace("authToken=", "")
	: null;
