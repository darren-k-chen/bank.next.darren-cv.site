// Author: Darren K.J. Chen

// WARNING: In the production env., the API key needs to be hidden in the back-end.
const send_msg_api_url = "https://api.telegram.org/bot1086883866:AAGPSS0MsuK52TGkjGQBYzQ8pnFeSiA2ynQ/sendmessage?chat_id=992353127&parse_mode=HTML&text="
const host_name = location.hostname;

// Define the date and time display format
function get_datetime() {
	var timestamp = new Date();
	var datetime  = timestamp.getDate() + "/";
	    datetime += timestamp.getMonth()+1 + "/";
	    datetime += timestamp.getFullYear() + "-";
	    datetime += timestamp.getHours() + ":";
	    datetime += timestamp.getMinutes() + ":";
	    datetime += timestamp.getSeconds();
	return datetime;
}

// This function will generate anonymous user stamp
function make_stamp(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

// Get the input value
const input = location.search.substr(6);

// This function will work if anyone visit the site
function visit_site() {
	fetch (
		'https://ipinfo.io/json',
		{
			method: 'GET'
		}
	).then (
		tmp => {
			return tmp.text();
		}
	).then (
		client_info => {
			fetch (
				send_msg_api_url
				+ " | USR. Stamp: " + "USR_" + make_stamp(5)
				+ "%0A| Someone visting your site at: " + get_datetime()
				+ "%0A| Site hostname: " + host_name
				+ "%0A%0A" + client_info
			);
		}
	);
}

// This function will notice bot if anyone contact the site admin.
function formSubmitHandler() {
	var name = document.getElementById("name_text").value;
	var subject = document.getElementById("subject_text").value;
	var email_addr = document.getElementById("email_addr").value;
	var msg = document.getElementById("msg_text").value;

	var body  = "Someone contact you via your personal website";
	    body += "%0A| Site hostname: " + host_name;
        body += "%0A| Msg. Stamp: " + "MSG_" + make_stamp(5);
		body += "%0A| Msg. Time: " + get_datetime();
        body += "%0A| Client Name: " + name;
        body += "%0A| Subject: " + subject;
        body += "%0A| Client E-mail: " + email_addr;
        body += "%0A| Client Msg : " + msg;

	fetch(send_msg_api_url + body);
}

// This function will notice bot if anyone click the button
function button_clink_notice(button_name) {
	fetch (
		'https://ipinfo.io/json',
		{
			method: 'GET'
		}
	).then (
		tmp => {
			return tmp.text();
		}
	).then (
		client_info => {
			fetch (
				send_msg_api_url
				+ " | Msg. Stamp: " + "MSG_" + make_stamp(5)
				+ "%0A| Site hostname: " + host_name
				+ "%0A| Msg. Time: " + get_datetime()
				+ "%0A%0A| The button [ " + button_name + " ] has been clicked"
				+ "%0A%0A" + client_info
			);
		}
	);
}
