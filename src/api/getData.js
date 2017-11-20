import axios from  'axios';

export default ({
  /**
   * 获取前十天的图文id数组集合
   * @returns {Observable<R|T>}
   */
  getIdList(){
    return axios.get('http://v3.wufazhuce.com:8000/api/onelist/idlist');
  },
  /**
   * 根据id获取某一天的图文列表
   * @param id
   * @returns {Observable<R|T>}
   */
  getImageTextDetail(id){
    return axios.get(`http://v3.wufazhuce.com:8000/api/onelist/${id}/0`);
  },
  /**
   * 获取阅读频道最新的10条图文,传入的 id 参数是 data 数组中最后一条阅读的 id,即可获取下一页
   * @param id
   * @returns {Observable<R|T>}
   */
  getReadings(id='0'){
    return axios.get(`http://v3.wufazhuce.com:8000/api/channel/reading/more/${id}`);
  },
  /**
   * 获取音乐频道最新的10条数据,传入的 id 参数是 data 数组中最后一条阅读的 id,即可获取下一页
   * @param id
   * @returns {Observable<R|T>}
   */
  getMusics(id='0'){
    return axios.get(`http://v3.wufazhuce.com:8000/api/channel/music/more/${id}`);
  },
  /**
   * 获取影视频道最新的10条数据,传入的 id 参数是 data 数组中最后一条阅读的 id,即可获取下一页
   * @param id
   * @returns {Observable<R|T>}
   */
  getMovies(id='0'){
    return axios.get(`http://v3.wufazhuce.com:8000/api/channel/movie/more/${id}`);
  },

  /**
   * 获取阅读的详细信息
   * @param id
   * @returns {Observable<R|T>}
   */
  getReadingDetails(id){
    return axios.get(`http://v3.wufazhuce.com:8000/api/essay/${id}`);
  },

  /**
   *获取音乐的详细信息
   * @param id
   * @returns {Observable<R|T>}
   */
  getMusicDetails(id){
    return axios.get(`http://v3.wufazhuce.com:8000/api/essay/${id}`);
  },

  /**
   * 获取影视的详细信息
   * @param id
   * @returns {Observable<R|T>}
   */
  getMovieDetails(id){
    return axios.get(`http://v3.wufazhuce.com:8000/api/movie/${id}/story/1/0`);
  },

  /**
   * 获取影视图片
   * @param id
   * @returns {*}
   */
  getMovieDetailsByPhoto(id){
    return axios.get(`http://v3.wufazhuce.com:8000/api/movie/detail/${id}`);
  }
})






