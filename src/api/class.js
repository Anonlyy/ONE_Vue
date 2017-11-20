export class IndexImageText{
  constructor(id,content_id,date,picUrl,volume,title,words_info,pic_info){
    this.id = id,
    this.content_id = content_id,//详情页传值id
    this.date = date,//时间
    this.picUrl = picUrl,
    this.volume = volume,//标号
    this.title = title,//标题
    this.words_info = words_info,//出处
    this.pic_info = pic_info//图片出处
  }
}


// 主页分类数据对象
export class IndexCategory{
  constructor(
    id, content_id,  category,picUrl,authorName,title,content, date){
      this.id = id,
      this.content_id = content_id, //详情页传值id
      this.category = category,   //类型(阅读:1 音乐:4 影视:5)
      this.picUrl = picUrl,
      this.authorName = authorName,
      this.title = title,    //标题
      this.content = content,  //正文
      this.date = date
  }
}
