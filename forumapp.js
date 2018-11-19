const express = require('express');
const app = express();
var serialize = require('node-serialize');
var cookieParser = require('cookie-parser');
var escapehtml = require('escape-html');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('172.16.1.150:27017/applicationusers');//need to change to a hostname to be translated by docker
var commentsdb =monk('172.16.1.150:27017/usercomments');//need to change to a hostname to be translated by docker
const port = 3000;


app.use(function(req,res,next){
	req.db = db;
	next();
});
app.use(function(req,res,next){
	req.commentsdbdb = commentsdb;
	next();
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res) =>{
	if(!req.cookies.IgnoreMe)
	{
		res.cookie('IgnoreMe', "e2FkbWluOnRydWV9IFQyZ3NJSGx2ZFNkeVpTQjBjbmxwYm1jZ2RHaHBjeUJXTWxaellrTkNNR0ZIYkhwSlIyeDZZbWxrTUVsSVpHOVpXRkZuWlZjNU1Vb3pTbXhKU0U0eFkwaENkbU15Vm10SlNGSjJTVWRTZGt4cE5IVkpRMEpVVlRCS2NWZFdZekJhTVc5NVlrUktZVlV3U1RGWmFrNVdXakZzVkZGdE9XaFdlbFYzVTFWa2MySlZiRWxpU0ZwclZUQktObHBGWXpWa01HeElWVzE0V2sxcWJISlpWbU14WW10c1NGSnVWbUZSTUVvMlYyeGpNV0V3YkVoUFdGWnBVMGQwYmxkV1RrTmhiVWw1VDFoS2FGWXhWbTVaYlRGSFpFWndXRlZYWkZOTmJYZDVWMnhWZUdKR1RraGlTRlpyVTBVeGJsWXlkRzlXTWtWNFkwWlNVbUpZYUZoYVZ6RXdUa1pWZUZadFJtcE5WMUpZVmtjMVUySkdTbGxSYkZKVlZteGFZVlJXV21GWFJURkZVbTEwVG1FeFdUQldWRVp2WXpKS1IxTnJXbGhpUjNoaFdXeFNSazFHVm5KWGJrNXFZa2RTTUZWdGN6VmhWbHBYVjFSS1dGWnNXbWhhUkVaVFpFWk9jMkpIYUZOV2JIQmFWbTB4TkZNeFRrZFdXR3hPVm0xU1dWVnRlSGRsVmxwMFpVVjBhRlpyYkRWWlZXaHJWakZaZW1GR1VsZGhhMXBNVm1wR2QxSXhjRWRoUjJ4WFZtNUNWMVpyV2xkVk1WbDNUVlZrVjFkSGVISlZNRlV4WWpGc2NsWnVaR3hpUmxZMVdsVmpOVll3TVhKWGJteFhUVzVSTUZacVFYaFdNazVJWVVad1RsWnVRa2xYV0hCSFlUSk9jazlXWkdGU01uaFZWV3hXZDFsV1duUmxSazVVWVhwR1dGWnNhSE5WTWtweVRsWldWMDFIVVRCWmFrWlhaRVV4V0U5V2FGTmlXR2cxVmpKMFZrMVdVbk5YYms1VVlrWndWMWxzYUc5Tk1XeHlWMnQwYTFacldubFpNRnB2WVVVeFdWRnNWbGhXYkhCb1YxWmtUMk14Y0VkV2JFcHBVakZLV1ZkWGVHRlNiVkY0VjJ4c2FsSlhVbGhVVmxwelRrWmtjbUZGZEZkTmEzQkhXVEJhYjFadFJuSk9WVGxWWWtWVk5WVkdSVGxRVVQwOQ====",{maxAge: 180000000, httpOnly:true});
	}
	if(req.cookies.GiveMeHints)
	{
		res.cookie('Hint', "WW91J3JlIHN1cHBvc2VkIHRvIGJ5cGFzcyB0aGlzIGF1dGhlbnRpY2F0aW9uIHdpdGhvdXQgYSBjb29raWUsIGdvb2QgbHVjayA7KQ==",{maxAge: 180000000, httpOnly:true});
	}
	res.write('<html>');
	res.write('<head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><script src="/loginjs"></script></head>');
	res.write('<body>');
	res.write("<h1 align='center'>Welcome to Bagle Challenge Box</h1>");
	//res.write("<h3 align='center'>Attempt to seize control of this server</h3>");
	res.write("<h2 align='center'>Stage 1 - Bypass this login</h2>");
	res.write("<h3 align='center'>You must authenticate to post comments</h3>");
	res.write('<input type="text" name="username" /><br/><input type="password" name="password"><br /><button onclick="login()">Login</button>');
	res.write('</body></html>');
	res.send();
});
//app.get('/endgame',(req,res)=>
app.get('/logout', (req,res) =>{
		res.cookie('EizeKosem', '');
		res.writeHead(302, {'Location':'/'});
		res.send();
});
app.get('/loginjs',(req,res) => {
	res.writeHead(200, {'Content-Type':'application/javascript'});
	res.write('function SetXHR(a,b){var xhr=new XMLHttpRequest();xhr.open(a,b);return xhr}function login(){var c=SetXHR("POST","/");c.setRequestHeader("Content-Type","application/json;charset=UTF-8");c.send(JSON.stringify({"username":document.getElementsByTagName("input")[0].value,"password":document.getElementsByTagName("input")[1].value}));c.onreadystatechange = function(){if(this.readyState==4&&this.status==200){eval(this.responseText)}}}');
	res.send();
});
app.get('/admin',(req,res)=>{
	res.send('lol');
});
app.get('/forumapi',(req,res)=>{
	if(req.headers['x-powered-by-bamba']=='VGhpcyBpcyBqdXN0IHRoZSBBUEkgdG9rZW4=')
	{
		res.send('baglealert("it vorks!")')//document.getElementsByTagName("h1").innerHTML+=\x22\x5cx3cscript\x5cx3ealert(1337)\x5cx3c\x5cx2fscript\x5cx3e\x22');//write forum data pulling from mongodb here
	}
	else
	{
		res.send("you're unauthenticated");
	}
});
/*app.post('/forumapi', (req,res)=>{
	//need to write the deserialization here, as we unserialize the payload only if the payload contained the serialize flag was set to true, and we filter the contents by a regex
	var commentsdb=req.commentsdb;
	var ReqJSON = req.body;
})
*/	
app.get('/authenticatedjs',(req,res)=>{
	if(req.headers['x-powered-by-bamba']=='VGhpcyBpcyBqdXN0IHRoZSBBUEkgdG9rZW4=')
	{//only need to add bagle once until you hit a res.send
	res.write("bagledocument.getElementsByTagName('h2')[0].innerHTML='Stage 2 - Execute code on our server';document.getElementsByTagName('h3')[0].innerHTML='Authenticated! Attempt to seize control of this server';document.getElementsByTagName('input')[0].name='postername';document.getElementsByTagName('input')[1].name='comment';document.getElementsByTagName('input')[0].value='';document.getElementsByTagName('input')[1].innerHTML='';document.getElementsByTagName('button')[0].value='Post Comment';document.getElementsByTagName('button')[0].setAttribute('onclick','apitoken(\x22POST\x22,\x22/forumapi\x22)');apitoken('GET','/forumapi')");
	//need to add a res.write with js that sends XHR to /forumapi and onreadystatechange adds the forum, along with it's elements
	res.send();
	}
	else
	{
		res.send("well now you're just cheating");
	}
});
app.post('/',(req,res) =>{
	var x = {"username":req.body.username,"password":req.body.password};
	var db = req.db;
	var collection = db.get('applicationusers');
	collection.find(x,{},function(e,docs){
			if(docs.length==1)
			{	//perhaps a better practise would be to create a single XHR var, create a function for it to open and send and onreadystatechange in the loginjs, which will receive the method and directory;
				res.send("var apitoken=function(b,a){var bisli=SetXHR(b,a);bisli.setRequestHeader('X-Powered-By-Bamba','VGhpcyBpcyBqdXN0IHRoZSBBUEkgdG9rZW4=');bisli.send();bisli.onreadystatechange = function(){if(this.readyState==4&&this.status==200){if(this.responseText.indexOf('bagle')==0){eval(this.responseText.slice(5))}else{alert(1337)}}}};apitoken('GET','/authenticatedjs')");
				//create the forum using js, fetching user comments but not passing their comments through eval
				// 
				// ideally create a function that will be invoked by calling the valueOf method through if to hint - will still need to create a source code disclosure to further hint this - maybe only after the user tries the ND func with iife? even put the if the same way as in the client side
				// can create an if statement here that will fetch the comments from the db only if the user is correct, but pay attention to the async nature of pulling data from mongo
				// Need to think of how to hint of the js serialization of the comments, as it should be performed on the comment posting part
			}
			else
			{
				if(docs.length>1)
				{
					res.send("alert('You\'re close!\nBut you only need the admin user')");
				}
				else
				{
					res.send("alert('Wrong password buddy')");
				}
			}
	}
	);
});
app.listen(port,()=>console.log(`App is listening on port ${port}!`));