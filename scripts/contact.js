// Author: Darren K.J. Chen

const to_addr = "kjchen@protonmail.ch";
const init = '';

function submitHandler() {
	var name = name_text.value;
	var subject = subject_text.value;
	var email_addr = email_addr.value;
	var msg = subject_text.value;

	var body  = "Msg. From my personal website ( darren-k-chen.github.io )";
	    body += "%0A | Client Name: " + name;
		body += "%0A | Subject: " + subject;
		body += "%0A | Client E-mail Addr. >> " + email_addr;
		body += "%0A [ Client Msg ] %0A" + msg;

	mailTo.href = "mailto:" + email_addr + "?subject=" + subject + "&body=" + body;
	mailTo.click();
}

function init() {
	subject_text.value = init;
	msg_text.value = init;
}
