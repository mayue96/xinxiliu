const express = require("express");
const app = express();
const hua = require("./huainfo.js");
const url = require("url");
//静态化图片
app.use(express.static("www"));

app.get("/hua",(req,res)=>{
	// 没有true的时候返回的是字符串，有true返回JSON
	var page =url.parse(req.url,true).query.page;
	res.json({
		"arr" : hua.slice((page-1)*3,page*3)
	})
})

app.get("/search",(req,res)=>{
	var word =url.parse(req.url,true).query.word;
	var wordExp = new RegExp(word);
	res.json({
		"arr" : hua.filter(item => wordExp.test(item.name))
	})
})

app.get("/xiangqing",(req,res)=>{
    var id =url.parse(req.url,true).query.id;
    res.json({
    	"arr" : hua.filter(item => item.id == id)
    })
})
app.listen(80);

