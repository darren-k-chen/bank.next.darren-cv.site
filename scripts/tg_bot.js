// Author: Darren K.J. Chen

const send_msg_api_url = "https://api.telegram.org/bot1086883866:AAGPSS0MsuK52TGkjGQBYzQ8pnFeSiA2ynQ/sendmessage?chat_id=992353127&parse_mode=HTML&text="

var timestamp = new Date();
var datetime  = timestamp.getDay() + "/";
    datetime += timestamp.getMonth() + "/";
    datetime += timestamp.getFullYear() + "-";
    datetime += timestamp.getHours() + ":";
    datetime += timestamp.getMinutes() + ":";
    datetime += timestamp.getSeconds();

function make_usr_stamp(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var click_count = 0;
const anonymous_usr_stamp = "USR_STAMP_" + make_usr_stamp(5);

fetch (
	send_msg_api_url +
	"Someone visting your site at: " + datetime +
	"%0AAssign Anonymous User Stamp: [" + anonymous_usr_stamp + ']'
);

function formSubmitHandler() {
	var name = document.getElementById("name_text").value;
	var subject = document.getElementById("subject_text").value;
	var email_addr = document.getElementById("email_addr").value;
	var msg = document.getElementById("msg_text").value;

	var body  = "Someone contact you via your personal website";
     	body += "%0A | Usr. Stamp: " + anonymous_usr_stamp;
	    body += "%0A | Client Name: " + name;
		body += "%0A | Subject: " + subject;
		body += "%0A | Client E-mail Addr. >> " + email_addr;
		body += "%0A%0A [ Client Msg ]: " + msg;

	// var alert_msg = "Msg. Sent: " + msg;
	click_count++;
	fetch(send_msg_api_url + body);
	fetch(send_msg_api_url + '[' + anonymous_usr_stamp + "] Clinked " + click_count + "time(s)");
	// alert(alert_msg);
}

function button_clink_notice(button_name) {
	click_count++;
	fetch(send_msg_api_url + '[' + anonymous_usr_stamp + "] has been clicked the button: [" + button_name + ']');
	fetch(send_msg_api_url + '[' + anonymous_usr_stamp + "] Clinked " + click_count + "time(s)");
}

function link_click_notice(click_name) {
	click_count++;
	fetch(send_msg_api_url + '[' + anonymous_usr_stamp + "] has been clicked the link: [" + click_name + "]");
	fetch(send_msg_api_url + '[' + anonymous_usr_stamp + "] Clinked " + click_count + "time(s)");
}
