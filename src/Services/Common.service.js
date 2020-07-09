import * as SecureStore from 'expo-secure-store';
import Axios from "axios";
import {
  base_url
} from '../Config/AppConfig';

export const getToken = async () => {
  const token = await SecureStore.getItemAsync('userToken');
  return token;
}

export const getUserData = async () => {
  const name = await SecureStore.getItemAsync('name');
  const email = await SecureStore.getItemAsync('email');
  const mobile = await SecureStore.getItemAsync('mobile');
  return {name,email,mobile};
}

export const getHeaders = async () => {
  // console.log(getToken());
  const token = await getToken();
  return {
    'Authorization': 'Bearer ' + `${token}`
  }
}

export const getUserName = async () => {
  const username = await SecureStore.getItemAsync('username');
  return username;
}

export const getAllContacts = async (contact) => {
  var mobilecontacts = [];
  contact.map((data) => {
    if (data.phoneNumbers.length > 0) {
      const mobilenumber = data.phoneNumbers[0].number;
      const obj = {
        "name": data.displayName,
        "mobile": mobilenumber
      }
      mobilecontacts.push(obj)
    }

  })
  const response = await importcontact(mobilecontacts);
  return response;
}

export const importcontact = async (contacts) => {
  try {
    const header = await getHeaders();
    const resp = await Axios.post(base_url + "import_contacts.php", {
      "contacts": contacts
    }, {
      headers: header
    });
    return resp.data;
  } catch (error) {
    alert(error); // catches both errors
  }
}