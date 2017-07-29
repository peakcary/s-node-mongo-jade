var express = require('express')
var path = require('path')
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser())
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('server running on  port 3000')

// index page
app.get('/', function (req, res) {
  res.render('index', {
    title: '首页',
    movies: [
      {
        title: '机械战警',
        _id: 1,
        poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
      }, {
        title: '机械战警',
        _id: 2,
        poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
      }, {
        title: '机械战警',
        _id: 3,
        poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
      }, {
        title: '机械战警',
        _id: 4,
        poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
      }, {
        title: '机械战警',
        _id: 5,
        poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
      }, {
        title: '机械战警',
        _id: 6,
        poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
      }
    ]
  })
})

// detail page
app.get('/movie/:id', function (req, res) {
  res.render('detail', {
    title: '详情页',
    movie: {
      doctor: "何塞.博迪利亚",
      country: "美国",
      title: "机械战警",
      year: 2014,
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
      language: '英语',
      flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
      summary: '是一部2014年美国科幻动作片，翻拍自1987年的同名电影，为机械战警系列的第四部作品。巴西导演何塞·帕蒂尔哈执导，乔尔·金纳曼、加里·奥德曼、迈克尔·基顿、塞' +
          '缪尔·杰克逊、艾比·考尼什和杰基·厄尔·哈利主演。美国和英国于2014年2月14日上映[1]，台湾、香港和中国大陆分别在同年1月31日、2月13日和2月28日上' +
          '映。'
    }
  })
})

// admin page
app.get('/admin/movie', function (req, res) {
  res.render('admin', {
    title: '录入页',
    movie: {
      title: '',
      doctor: '',
      country: '',
      year: '',
      poster: '',
      flash: '',
      summary: '',
      language: ''
    }
  })
})

// list page
app.get('/admin/list', function (req, res) {
  res.render('list', {
    title: '列表页',
    movies: [
      {
        _id:1,
        doctor: "何塞.博迪利亚",
        country: "美国",
        title: "机械战警",
        year: 2014,
        poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
        language: '英语',
        flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
        summary: '是一部2014年美国科幻动作片，翻拍自1987年的同名电影，为机械战警系列的第四部作品。巴西导演何塞·帕蒂尔哈执导，乔尔·金纳曼、加里·奥德曼、迈克尔·基顿、塞' +
          '缪尔·杰克逊、艾比·考尼什和杰基·厄尔·哈利主演。美国和英国于2014年2月14日上映[1]，台湾、香港和中国大陆分别在同年1月31日、2月13日和2月28日上' +
          '映。'
      }
    ]
  })
})
