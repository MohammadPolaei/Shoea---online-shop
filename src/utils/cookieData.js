export const sessionToken = document.cookie
	.split(";")[0]
	.replace("sessionToken=", "");
export const authToken = document.cookie
	.split(";")[1]
	.replace("authToken=", "");
