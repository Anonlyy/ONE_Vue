//图文详情对象
export class IndexImageText {
  constructor(id, content_id, date, picUrl, volume, title, words_info, pic_info,category) {
    this.id = id,
      this.content_id = content_id,//详情页传值id
      this.date = date,//时间
      this.picUrl = picUrl,
      this.volume = volume,//标号
      this.title = title,//标题
      this.words_info = words_info,//出处
      this.pic_info = pic_info,//图片出处'
      this.category = category
  }
}


// 主页分类数据对象
export class IndexCategory {
  constructor(id, content_id, category, picUrl, authorName, title, content, date) {
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

//(音乐、阅读)详情对象
export class ReadDetail {
  constructor(id, authorName, authorDesc, authorImgurl, title, content, author_introduce, copyright, picUrl) {
    this.id = id,
      this.authorName = authorName,
      this.authorDesc = authorDesc,
      this.authorImgurl = authorImgurl, //作者头像
      this.title = title,
      this.content = content,
      this.author_introduce = author_introduce, //编辑作者
      this.copyright = copyright,   //转载声明
      this.picUrl = picUrl //专辑封面图片
  }
}

//影视详情对象
export class MovieDetail {
  constructor(id, authorName, title,content,author_introduce,copyright) {
    this.id = id,
      this.authorName = authorName,
      this.title = title,
      this.content = content,
      this.author_introduce = author_introduce, //编辑作者
      this.copyright = copyright   //转载声明
  }
}


//评论对象
export class Comment{
  constructor(id,content,comment_time,user_name,avatar){
    this.id = id,
    this.content = content, //评论内容
    this.comment_time = comment_time, //评论时间
    this.user_name = user_name,
    this.avatar = avatar  //头像
  }
}

