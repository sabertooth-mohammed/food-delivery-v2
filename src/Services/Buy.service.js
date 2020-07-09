import Axios from "axios";
import { base_url } from "../Config/AppConfig";
import { getHeaders } from "./Common.service";

export const allPackages = async () => {
    try {
        const header = await getHeaders();
        const resp = await Axios.post(base_url+"get_packages.php",{},{headers:header});
        return resp.data;
      } catch (error) {
        alert(error); // catches both errors
      }
}

export const getOrderDetail = async (data) => {
  try {
      const header = await getHeaders();
      const resp = await Axios.post(base_url+"recharge.php",data,{headers:header});
      return resp.data;
    } catch (error) {
      alert(error); // catches both errors
    }
}

export const getRazorResponse = async (data) => {
  try {
      const header = await getHeaders();
      const resp = await Axios.post(base_url+"razor_response.php",data,{headers:header});
      return resp.data;
    } catch (error) {
      alert(error); // catches both errors
    }
}
