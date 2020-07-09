import Axios from "axios";
import { base_url } from "../Config/AppConfig";
import { getHeaders } from "./Common.service";

//Single SMS SEND
export const singleSms = async (data) => {
  try {
      const header = await getHeaders();
      const resp = await Axios.post(base_url+'send_sms.php',data,{headers:header})
      // const resp = await Axios.post(base_url+"sendsms.php",data,{header});
      return resp.data;
    } catch (error) {
      alert(error); // catches both errors
    }
}

//GET ALL SENDERS
export const getSenders = async () => {
  try {
    const header = await getHeaders();
    const resp = await Axios.post(base_url+"get_senderids.php",{},{headers:header});
    return resp.data;
  } catch (error) {
    alert(error); // catches both errors
  }
}

//TOTAL SMS COUNT,ENCODING, OTHER STUFF
export const count = async (text) => {
    var multiMessageLength = {
      GSM_7BIT: 153,
      GSM_7BIT_EX: 153,
      UTF16: 67
    };
    var messageLength = {
      GSM_7BIT: 160,
      GSM_7BIT_EX: 160,
      UTF16: 70
    };

    var GSM_7BIT_EX = 'GSM_7BIT_EX';


    var encoding, length, messages, per_message, remaining;
    encoding = this.detectEncoding(text);
    length = text.length;
    if (encoding === GSM_7BIT_EX) {
      length += this.countGsm7bitEx(text);
    }
   
    per_message = messageLength[encoding];
    if (length > per_message) {
      per_message = multiMessageLength[encoding];
    }
    messages = Math.ceil(length / per_message);
    remaining = (per_message * messages) - length;
    if(remaining == 0 && messages == 0){
      remaining = per_message;
    }
    return {
      encoding: encoding,
      length: length,
      per_message: per_message,
      remaining: remaining,
      messages: messages,

    };
  };

  countGsm7bitEx = (text) =>{
   var gsm7bitExChar = "\\^{}\\\\\\[~\\]|€";
   var gsm7bitExOnlyRegExp = RegExp("^[\\" + gsm7bitExChar + "]*$");

    var char2, chars;
    chars = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = text.length; _i < _len; _i++) {
        char2 = text[_i];
        if (char2.match(gsm7bitExOnlyRegExp) != null) {
          _results.push(char2);
        }
      }
      return _results;
    }).call(this);
    return chars.length;
  };

  
  detectEncoding = (text) => {

    var gsm7bitChars = "@£$¥èéùìòÇ\\nØø\\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !\\\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà";

    var gsm7bitExChar = "\\^{}\\\\\\[~\\]|€";

    var gsm7bitRegExp = RegExp("^[" + gsm7bitChars + "]*$");

    var gsm7bitExRegExp = RegExp("^[" + gsm7bitChars + gsm7bitExChar + "]*$");

    var gsm7bitExOnlyRegExp = RegExp("^[\\" + gsm7bitExChar + "]*$");


    var GSM_7BIT = 'GSM_7BIT';

    var GSM_7BIT_EX = 'GSM_7BIT_EX';

    var UTF16 = 'UTF16';

    // var GSM_7BIT = 'TEXT';

    // var GSM_7BIT_EX = 'TEXT';

    // var UTF16 = 'UNICODE';


    switch (false) {
      case text.match(gsm7bitRegExp) == null:
        return GSM_7BIT;
      case text.match(gsm7bitExRegExp) == null:
        return GSM_7BIT_EX;
      default:
        return UTF16;
    }
  };
