// Author: Darren K.J. Chen

// WARNING: In the production env., the API key needs to be hidden in the back-end.
const send_msg_api_url = "https://api.telegram.org/bot1086883866:AAGPSS0MsuK52TGkjGQBYzQ8pnFeSiA2ynQ/sendmessage?chat_id=992353127&parse_mode=HTML&text="

// Define the date and time display format
var timestamp = new Date();
var datetime  = timestamp.getDate() + "/";
    datetime += timestamp.getMonth()+1 + "/";
    datetime += timestamp.getFullYear() + "-";
    datetime += timestamp.getHours() + ":";
    datetime += timestamp.getMinutes() + ":";
    datetime += timestamp.getSeconds();

	// This function will generate anonymous user stamp
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
	const anonymous_usr_stamp = "USR_" + make_usr_stamp(5);

// This function will notice bot if anyone visit the site
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
				+ "Someone visting your site at: " + datetime
				+ "%0AAssign Anonymous User Stamp: [" + anonymous_usr_stamp + "]%0A%0A"
				+ client_info
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
        body += "%0A | Usr. Stamp: " + anonymous_usr_stamp;
        body += "%0A | Client Name: " + name;
        body += "%0A | Subject: " + subject;
        body += "%0A | Client E-mail: " + email_addr;
        body += "%0A | Client Msg : " + msg;

	// var alert_msg = "Msg. Sent: " + msg;
	click_count++;
	fetch (
		send_msg_api_url + body + '%0A%0A[' + anonymous_usr_stamp + "] CTR (Button and Link): " + click_count
	);
	// alert(alert_msg);
}

// This function will notice bot if anyone click the button
function button_clink_notice(button_name) {
	click_count++;
	fetch (
		send_msg_api_url + "The button [ " + button_name + " ] has been clicked by [ " + anonymous_usr_stamp + " ]%0A%0A"
		+ '[' + anonymous_usr_stamp + "] CTR (Button and Link): " + click_count
	);
}

// This function will notice bot if anyone click the link
function link_click_notice(click_name) {
	click_count++;
	fetch (
		send_msg_api_url + "The link [ " + click_name + " ] has been clicked by [ " + anonymous_usr_stamp + " ]%0A%0A"
		+ '[' + anonymous_usr_stamp + "] CTR (Button and Link): " + click_count
	);
}

const fn = location.search.substr(6);
function get_file() {
	if (fn != '') {
		var fp  = "assets/" + fn;
		window.open(fp);

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
				tt = client_info;
				fetch (
					send_msg_api_url
					+ "Someone request the file " + fn
					+ "%0A%0A" + client_info
				);
			}
		);
		// history.back();
	}
}
