
import axios from 'axios';

async function GetUserData(path:string) {   
    try {
        const response = await axios.get(path);
        return response.data;
    }catch(error) {
        console.log(error);
      }
 }

export default GetUserData;