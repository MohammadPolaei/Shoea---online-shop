export const sessionToken = document.cookie
	? document.cookie.split(";")[0].replace("sessionToken=", "")
	: null;
export const authToken = document.cookie
	? document.cookie.split(";")[1].replace("authToken=", "")
	: null;
