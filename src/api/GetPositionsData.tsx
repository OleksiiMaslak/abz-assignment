
import axios from 'axios';

async function GetPositionsData() {   
    try {
        const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
        return response.data;
    }catch(error) {
        console.log(error);
      }
 }

export default GetPositionsData;