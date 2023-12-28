import axios from 'axios';
import IRequestData from '@/interfaces/RequestData';


async function PostRequest(path:string,  requestData : IRequestData, token: string) {
  



    let formData = new FormData();


    if (requestData.position_id) {
        formData.append('position_id', requestData.position_id);
      }
      if (requestData.name) {
        formData.append('name', requestData.name);
      }
      if (requestData.email) {
        formData.append('email', requestData.email);
      }
      if (requestData.phone) {
        formData.append('phone', requestData.phone);
      }
      if (requestData.photo) {
        formData.append('photo', requestData.photo);
      }
    

    axios({
        method: 'post',
        url: path,
        data: formData,
        headers: { 'Token': token }
      })
      .then(function (response) {
        console.log(response.data);
        if(response.data.success) {

          const postSection = document.querySelector('.post-section');
          const succesSection = document.querySelector('.success-section');
          postSection?.classList.add('hidden');
          succesSection?.classList.remove('hidden');
          return Promise.resolve(response.data.success);
          
        } else {
          // proccess server errors
          return Promise.resolve(response.data.success);
        }
        
      })
      .catch(function (error) {
        // proccess network errors
        return Promise.resolve(false);
      });

}

export default PostRequest;
