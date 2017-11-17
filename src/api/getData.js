import axios from  'axios';

export default ({
  getIdList(){
    return axios.get('http://v3.wufazhuce.com:8000/api/onelist/idlist');
  }
})
