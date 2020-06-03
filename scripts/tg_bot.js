// Author: Darren K.J. Chen

const send_msg_api_url = "https://api.telegram.org/bot1086883866:AAGPSS0MsuK52TGkjGQBYzQ8pnFeSiA2ynQ/sendmessage?chat_id=992353127&parse_mode=HTML&text="

function submitHandler() {
	var name = document.getElementById("name_text").value;
	var subject = document.getElementById("subject_text").value;
	var email_addr = document.getElementById("email_addr").value;
	var msg = document.getElementById("msg_text").value;

	var body  = "Someone contact you via your personal website";
	    body += "%0A | Client Name: " + name;
		body += "%0A | Subject: " + subject;
		body += "%0A | Client E-mail Addr. >> " + email_addr;
		body += "%0A%0A [ Client Msg ]: " + msg;

	var alert_msg = "Msg. Sent: " + msg;

	fetch(send_msg_api_url + body);
	alert(alert_msg);
}
