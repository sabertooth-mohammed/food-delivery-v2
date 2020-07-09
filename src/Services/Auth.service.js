import Axios from "axios";
import { base_url } from "../Config/AppConfig";
//import * as SecureStore from 'expo-secure-store';
import { AsyncStorage } from 'react-native';

export const appLogin = async (data) => {
    try {
        const resp = await Axios.post(base_url+"/api/login",data);
        return resp.data;
      } catch (error) {
        alert(error); // catches both errors
      }
}

export function appLogout() {
  try {
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('package');
  } catch (error) {
    alert(error);
  }
}
