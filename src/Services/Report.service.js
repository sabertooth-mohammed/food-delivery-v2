import Axios from "axios";
import { base_url } from "../Config/AppConfig";
import { getHeaders } from "./Common.service";


//CREDIT REPORT HOME PAGE
export const getCreditReport = async () => {
      try {
        const header = await getHeaders();
        const resp = await Axios.post(base_url+"credit_report.php",{},{headers:header});
        return resp.data;
      } catch (error) {
        alert(error); // catches both errors
      }
}

//GET ALL MESSAGE REPORT
export const getReport = async (params) => {
  try {
    const header = await getHeaders();
    const resp = await Axios.post(base_url+"get_report.php",params,{headers:header});
    return resp.data;
  } catch (error) {
    alert(error); // catches both errors
  }
}
//SUMMARY OF MONTH
export const getMonthlySummary = async (data) => {
  console.log(data);
  try {
    const header = await getHeaders();
    const resp = await Axios.post(base_url+"monthly_summary_report.php",data,{headers:header});
    return resp.data;
  } catch (error) {
    alert(error); // catches both errors
  }
}

export const getDailySummary = async (data) => {
  try {
    const header = await getHeaders();
    const resp = await Axios.post(base_url+"daily_summary_report.php",data,{headers:header});
    return resp.data;
  } catch (error) {
    alert(error); // catches both errors
  }
}