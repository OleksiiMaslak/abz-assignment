
import axios from 'axios';

async function GetTokenData() {   
    try {
        const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token');
        return response.data.token;
    }catch(error) {
        console.log(error);
      }
 }

export default GetTokenData;