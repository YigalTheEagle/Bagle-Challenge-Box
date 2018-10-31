const express = require('express');
const app = express();
var serialize = require('node-serialize');
var cookieParser = require('cookie-parser');
var escapehtml = require('escape-html');
var bodyParser = require('body-parser');
const port = 3000;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req,res) =>{
	res.write('<html>');
	res.write('<body>');
	res.write("<h1 align='center'>Welcome to Holia Jas</h1>");
	res.write("<h3 align='center'>Safest stored comments on the internet! ;)</h3>");
	res.write("<table align='center' border=black><tr><td>Comment Number</td><td>Name</td><td>Comment</td></tr>");
	if(req.cookies.EizeKosem)
	{
		var serializedCookie = JSON.parse(new Buffer(req.cookies.EizeKosem,'base64').toString());
		var userComments = serialize.unserialize(serializedCookie);
		if(userComments["fname"].length!=userComments["Comment"].length)
		{
			res.cookie('EizeEfes', "eyJZb3UiOiJzdWNrIn0=", {maxAge: 180000000, httpOnly:true});
			res.send("<script>alert('Playing with cookies will get you fired');</script>");
		}
		for(var i=1;i<=userComments["fname"].length;i++)
		{
			res.write('<tr><td>'+i+'</td><td>'+escapehtml(userComments["fname"][i-1])+'</td><td>'+escapehtml(userComments["Comment"][i-1])+'</td></tr>');
		}
	}
	res.write('<tr><td colspan="3"><a href="/flush">Restart Challenge</a></td></tr>');
	res.write('\n');
	res.write('<form action="/" method="post"><input type="text" name="fname" /><br/><input type="text" name="Comment"><br /><button>Save</button></form>');
	res.write('</body></html>');
	res.send();
});
app.get('/strings-everywhere', (req,res) =>{
	if(req.cookies.EizeKosem)
	{
		var serializedCookie=JSON.parse(new Buffer(req.cookies.EizeKosem,'base64').toString());
		serializedCookie=serialize.unserialize(serializedCookie);
		res.send('the cookie is: '+serializedCookie);
	}
	res.send('There\'s no cookie my friend');
});
app.get('/iIFe', (req,res) =>{
	if(req.cookies.EizeKosem)
	{
		var serializedCookie=new Buffer(req.cookies.EizeKosem,'base64').toString();
		serializedCookie=serialize.unserialize(serializedCookie);
		console.log('\n\n\nOfer');
		if(serializedCookie==1)
		{
			res.send("<script>alert('You failed')</script>");
		}
		res.send("<script>alert('You still failed')</script>");
	}
	res.send("Did you even try...?");
});
//app.get('/endgame',(req,res)=>
app.get('/flush', (req,res) =>{
		res.cookie('EizeKosem', '');
		res.writeHead(302, {'Location':'/'});
		res.send();
});
app.post('/',(req,res) =>{
	var userComments = {"fname":[],"Comment":[]};
	if(req.cookies.EizeKosem)
	{
		var serializedCookie = new Buffer(req.cookies.EizeKosem,'base64').toString();
		userComments = serialize.unserialize(serializedCookie);
	}
	userComments["fname"].push(escapehtml(req.body.fname));
	userComments["Comment"].push(escapehtml(req.body.Comment));
	if(userComments["fname"].length > 0 && userComments["Comment"].length > 0)
	{
		var jsonbase64 = Buffer.from(JSON.stringify(userComments)).toString('base64');
		res.cookie('EizeKosem', jsonbase64, {maxAge: 180000000, httpOnly:true});
		res.writeHead(302,{'Location':'/'});
		res.send();
	}
	else
	{
		res.send('Input was incorrect, click <a href="/">here</a> to go back to the forum ');
	}
});
app.listen(port,()=>console.log(`App is listening on port ${port}!`));