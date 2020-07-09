

import Axios from "axios";
import { base_url } from "../Config/AppConfig";
import { getHeaders } from "./Common.service";

//GET ALL THE GROUPS AS PER USER
export const getAllGroup = async () => {
      try {
        const header = await getHeaders();
        const resp = await Axios.post(base_url+"get_groups.php",{},{headers:header});
        return resp.data;
      } catch (error) {
        alert(error); // catches both errors
      }
}
