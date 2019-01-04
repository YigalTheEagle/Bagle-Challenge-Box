const express = require('express');
const app = express();
var serialize = require('node-serialize');
var cookieParser = require('cookie-parser');
var escapehtml = require('escape-html');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('bagle-db:27017/applicationusers');
var commentsdb =monk('bagle-db:27017/usercomments');
const port = 3000;



//The code below discloses details of the challenge itself.
//If you wish to enjoy the challenge, don't read it.
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
		res.cookie('IgnoreMe', "e2FkbWluOnRydWV9IFQyZ3NJSGx2ZFNkeVpTQjBjbmxwYm1jZ2RHaHBjeUJXTWxaellrTkNNR0ZIYkhwSlIyeDZZbWxrTUVsSVpHOVpXRkZuWlZjNU1Vb3pTbXhKU0U0eFkwaENkbU15Vm10SlNGSjJTVWRTZGt4cE5IVkpRMEpVVlRCS2NWZFdZekJhTVc5NVlrUktZVlV3U1RGWmFrNVdXakZzVkZGdE9XaFdlbFYzVTFWTmQxb3lUWHBWYmxwcVVUQktjbGRzWkU5a2JIQklZa2hXWVdWVlNtaFZNRnBoWTJ4a2MxUnJUbWxTYkc4eVdWUk9iMVpHV2xkalNIQlhUVlp3VUZwRlpGZFNiVTVIVkdzMVYxWnRkRFJXYlhocVpEQXhXRlZZYkZOWFIyaFZWakJrTkdNeFZuSldiVVpZVm0xNE1GUldVbE5WTVVwMFpVaHNWMDFxUmtoV1JFcExWbXhhY1Zkc2NGZFdia0Y2Vm10amVGTXhaRmhTYTFwWFlrZG9XRmxyVm5kVFZscFZVMWhvVjAxWFVraFdNalZMVmpKS1JtTklRbFpoYTNCMldrUkdZVmRIVmtkVWJHUk9WbGhDV1ZZeWRHRmhNV1JJVTJ4YVdHSkdXbFpXYkZwTFYwWlNWbGRzV214V01VcEtWa2N4YjJGV1NsbFJhbHBYVmtWdk1GbHFSbHBsVmtwMVUyeG9hRTB5YUZsV1JscGhaREpHUjJFemFGaGhNbEp4VkZaa1UyVldVWGhYYlhSb1ZtczFSMVV5ZUhkV01rcEhVMnQwVlZac2NGZGFWbHBMWkZaU2MxVnNhRk5OTW1neVZteGpkMlZIU1hoYVJXUnBVMFZ3YUZWc1VsZFVNVnAwWlVWMFYySkdXakJhVldocllWWktjbU5FUmxaV00xSXpWakJrUm1WSFRrZFZiSEJYWWtoQ2IxZFVTalJoTVZwWFVtNU9ZVkp0VW5CV2JYUlhUVEZhYzJGSVpGTk5WbXcwVmpGb2IxbFdUa1pqUm1oYVlURmFNMVl3V2xkalZsSnlUbFU1VmxaRVJsSldWbEY0VlZaV1ZVMUVNRGxWUmtVNVVRPT0=",{maxAge: 180000000, httpOnly:true});
	}
	if(req.cookies.GiveMeHints)
	{
		res.setHeader('This-Is-A-Hint!','You want to log in as admin, and MongoDB has some operators you can look up');
		res.setHeader('A-Hint!','You want to log in as admin, and MongoDB has some operators you can look up');
		res.setHeader('Hint!','You want to log in as admin, and MongoDB has some operators you can look up');
	}
	res.setHeader('Mongo-DB','The NoSQL Server');
	res.write('<html>');
	res.write('<head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><script src="/loginjs"></script></head><link href="styles" rel="stylesheet" type="text/css"/>');
	res.write('<body>');
	res.write("<h1 align='center'>Welcome to Bagle Challenge Box</h1>");
	res.write("<h2 align='center'>Stage 1 - Bypass this login</h2>");
	res.write("<h3 align='center'>You must authenticate to continue</h3>");
	res.write("<div id='avocado' align='center'></div>");
	res.write("<div id='sumo' align='center'></div>");
	res.write("<div align='center'>");
	res.write('<input type="text" name="username" /><br/><input type="password" name="password"><br /><button onclick="if(gamba.pilpel==true){eval(\'$_GET[boom]\')}">Login</button>');
	res.write("</div>");
	res.write('</body></html>');
	res.send();
});
app.get('/logout', (req,res) =>{
		res.writeHead(302, {'Location':'/'});
		res.send();
});
app.get('/loginjs',(req,res) => {
	res.writeHead(200, {'Content-Type':'application/javascript'});
	res.write('var have;var apropo;var aprapo;var apropa;var aprapa;var pomba;var timon=[];var dambo;var cinderella;var hint=false;setInterval(function(){have+"fun";},5000);function SetXHR(a,b,c){var xhr=new XMLHttpRequest();xhr.open(a,b);eval(c);return xhr}var gamba={toString:function(){var bisli=SetXHR(apropa,aprapo,apropo);bisli.send(aprapa),aprapa=null,bisli.onreadystatechange=function(){4==this.readyState&&200==this.status&&(0==this.responseText.indexOf("bagle")?eval(this.responseText.slice(5)):alert(1337))}},pilpel:{valueOf:function(){var c=SetXHR("POST","/");c.setRequestHeader("Content-Type","application/json;charset=UTF-8"),c.send(JSON.stringify({username:document.getElementsByTagName("input")[0].value,password:document.getElementsByTagName("input")[1].value})),c.onreadystatechange=function(){4==this.readyState&&200==this.status&&eval(this.responseText)}}}};var kobi={valueOf: function(){var tokyo=SetXHR(apropa,aprapo,apropo);tokyo.send(aprapa);aprapa=null;tokyo.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var t=JSON.parse(this.responseText);for(i=1;i<timon.length-1;i++){timon[timon.length-1-i].tds[1].innerHTML=timon[timon.length-2-i].tds[1].innerHTML;timon[timon.length-1-i].tds[2].innerHTML=timon[timon.length-2-i].tds[2].innerHTML;}timon[0].tds[1].innerHTML=t.Zebra;timon[0].tds[2].innerHTML=t.Dinasaur;if(t.Topim&&t.Metziltaim&&!hint){cinderella.innerHTML+=(t.Topim);eval(t.Metziltaim);hint=true;}}}}};');
	res.send();
});
app.get('/admin',(req,res)=>{
	res.send('<script>alert("Lol noob you need the API token");document.location="/admin"</script>');
});
app.get('/forumapi',(req,res)=>{
	if(req.headers['x-powered-by-bamba']=='VGhpcyBpcyBqdXN0IHRoZSBBUEkgdG9rZW4=')
	{
		var db = req.commentsdbdb;
		var collection = db.get('forumcomments');
		collection.find({},{},function(e,docs){ 
			var userComments = {"Name":[],"Comment":[]};
			for(var i in docs){
			userComments["Name"].push(escapehtml(docs[docs.length-i-1]['name']));
			userComments["Comment"].push(escapehtml(docs[docs.length-i-1]['content']));
			if(i>39)
			{
				break;
			}
			}
			res.send(userComments);
		});
	}
	else
	{
		res.send('<script>alert("Lol noob you need the API token");document.location="/forumapi"</script>');
	}
});
app.get('/styles',(req,res)=>{
	res.send("p {text-align:left; color:red;} input {float:center;} body {background-color: black; }  yellow{color:yellow;} h1 { color: #ff4411; font-size: 48px; font-family: 'Signika', sans-serif; padding-bottom: 10px;  } h2 { color: #ff4411; font-size: 36px; font-family: 'Signika', sans-serif; padding-bottom: 10px;  }h3 { color: #ff4411; font-size: 25px; font-family: 'Signika', sans-serif; padding-bottom: 10px;}table {border: solid 2px white;border-collapse: collapse;border-spacing: 2;font: normal 13px Arial, sans-serif;}th {background-color: #DDEFEF;border: solid 1px #DDEEEE;color: black;text-align: left;text-shadow: 1px 1px 1px #fff;}td {border: solid 1px #DDEEEE;color: white;text-shadow: 1px 1px 1px #fff;border-spacing: 2;}");
})
app.post('/forumapi', (req,res)=>{
	var checkforiife = function(string){
	var openCurly = 0;
	var closeCurly = 0;
	var inDoubleQuotes = false;
	var inSingleQuotes = false;
	for (var i = 0; i < string.length-1; i++) {
		if (string[i] == "`") {
			return 2;
		}
		if(((string[i]+string[i+1])=="//")||((string[i]+string[i+1])=="*/")||((string[i]+string[i+1])=="/*"))
		{
			return 6
		}
		if (string[i] == '"') {
			if (inDoubleQuotes == false) {
				inDoubleQuotes = true;
			} else {
				inDoubleQuotes = false;
			}
			continue;
		}
		if (string[i] == "'"){
			if (inSingleQuotes == false) {
				inSingleQuotes = true;
			} else {
				inSingleQuotes = false;
			}
			continue;
		} 
		if (!inDoubleQuotes && !inSingleQuotes) {
			if (string[i] == "{") {
				openCurly++;
				continue;
			} else if (string[i] == "}") {
				closeCurly++;
				continue;
			} else if (string[i] != null) {
				if (openCurly == closeCurly && openCurly!=0) {
					return 3;
				}
			}
		}
	}
	return 5;
}
var SuperSecret="who the fuck are you and why are you reading my code?";
	if(req.headers['x-powered-by-bamba']=='VGhpcyBpcyBqdXN0IHRoZSBBUEkgdG9rZW4=')
	{
		var commentsdb=req.commentsdbdb;
		var ReqJSON = req.body;
		var DeserializeThisOne;
		var deserialize=4;
		var TheyGotIt=false;
		var CheckForMultipleProperties=0;
		if(req.headers['serialize-this']=='True'||req.headers['serialize-this']=='true')
		{
			deserialize=1;
			for(i in ReqJSON)
			{
				if(i=="postername"||i=="comment")
				{
					continue;
				}
				CheckForMultipleProperties++;
			}
			for(i in ReqJSON)
			{
				if(ReqJSON[i].indexOf("_$$ND_FUNC$$_function(){")==0)
				{
					deserialize=checkforiife(ReqJSON[i]);
					if(deserialize!=1)
					{
						DeserializeThisOne=i;
						break;
					}
				}
				else
				{
					if(ReqJSON[i].indexOf("_$$ND_FUNC$$_")==0)
					{
						deserialize=7;
						break;
					}
				}
			};
			if(deserialize==5)
			{
				if(DeserializeThisOne=='valueOf')
				{
					evalme={valueOf:ReqJSON[DeserializeThisOne]};
					serialize.unserialize(evalme);
					try
					{
						if(evalme==true)
						{
							//You basically have a reverse shell from the above if statement if you've done it correctly
						}
					}
					catch(err){res.send("This did not go as expected \n"+err)};
				}
				if(DeserializeThisOne=='toString')
				{
					evalme={toString:ReqJSON[DeserializeThisOne]};
					serialize.unserialize(evalme);
					try
					{
						if(evalme==true)
						{
							//You basically have a reverse shell from the above if statement if you've done it correctly
						}
					}
					catch(err){res.send("This did not go as expected \n"+err)};
				}
				
			}
			if(req.cookies.GiveMeHints)
			{
				if(deserialize==6)
				{
					res.setHeader("This-Is-A-Hint!","Comments aren't allowed in your payload");
					res.setHeader("A-Hint!","Comments aren't allowed in your payload");
					res.setHeader("Hint!","Comments aren't allowed in your payload");
				}
				if(deserialize==2)
				{
					res.setHeader("This-Is-A-Hint!","Grave Accent (`) isn't allowed");
					res.setHeader("A-Hint!","Grave Accent (`) isn't allowed");
					res.setHeader("Hint!","Grave Accent (`) isn't allowed");
				}
				if(deserialize==3)
				{
					res.setHeader("This-Is-A-Hint!","You can only send a single function without anything after it, for example '_$$ND_FUNC$$_function(){YOUR_PAYLOAD_HERE}'");
					res.setHeader("A-Hint!","You can only send a single function without anything after it, for example '_$$ND_FUNC$$_function(){YOUR_PAYLOAD_HERE}'");
					res.setHeader("Hint!","You can only send a single function without anything after it, for example '_$$ND_FUNC$$_function(){YOUR_PAYLOAD_HERE}'");
				}
				if(deserialize==1)
				{
					res.setHeader("This-Is-A-Hint!","You're not adding the function flag correctly to your property, look up correct NodeJS Deserialization payloads");
					res.setHeader("A-Hint!","You're not adding the function flag correctly to your property, look up correct NodeJS Deserialization payloads");
					res.setHeader("Hint!","You're not adding the function flag correctly to your property, look up correct NodeJS Deserialization payloads");
				}
				if(deserialize==5)
				{
					if(DeserializeThisOne=='valueOf')
					{
						TheyGotIt=true
					}
					else if(DeserializeThisOne=='valueof')
					{
						res.setHeader("This-Is-A-Hint!","valueOf != valueof");
						res.setHeader("A-Hint!","valueOf != valueof");
						res.setHeader("Hint!","valueOf != valueof");
					}
					if(TheyGotIt==false)
					{
							res.setHeader("This-Is-A-Hint!","You're super close! Learn from var kobi from loginjs how you can invoke a function with an if statement");
							res.setHeader("A-Hint!","You're super close! Learn from var kobi from loginjs how you can invoke a function with an if statement");
							res.setHeader("Hint!","You're super close! Learn from var kobi from loginjs how you can invoke a function with an if statement");
					}
				}
				if(deserialize==4)
				{
					res.setHeader("This-Is-A-Hint!","You're not adding the serialize header, look up the value of apropo (write apropo in the browser console in this page)");
					res.setHeader("A-Hint!","You're not adding the serialize header, look up the value of apropo (write apropo in the browser console in this page)");
					res.setHeader("Hint!","You're not adding the serialize header, look up the value of apropo (write apropo in the browser console in this page)");
				}	
				if(deserialize==7)
				{
					res.setHeader("This-Is-A-Hint!","You've only added _$$ND_FUNC$$_, but the code in '/guide-how-to-send-a-function' shows you it's not gonna work, look closely");
					res.setHeader("A-Hint!","You've only added _$$ND_FUNC$$_, but the code in '/guide-how-to-send-a-function' shows you it's not gonna work, look closely");
					res.setHeader("Hint!","You've only added _$$ND_FUNC$$_, but the code in '/guide-how-to-send-a-function' shows you it's not gonna work, look closely");
				}
				if(CheckForMultipleProperties>1)
				{
					res.setHeader("This-Is-A-Hint","You're sending multiple properties aside from the postername and comment. Send them with only 1 additional propery");
					res.setHeader("A-Hint","You're sending multiple properties aside from the postername and comment. Send them with only 1 additional propery");
					res.setHeader("Hint","You're sending multiple properties aside from the postername and comment. Send them with only 1 additional propery");
				}
			}
		}
		if(req.headers['serialize-this']=='True'||req.headers['serialize-this']=='true')
		{
			res.setHeader('Serialization','True');
			var serializationResponse = {"Zebra":escapehtml(ReqJSON["postername"]),"Dinasaur":escapehtml(ReqJSON["comment"]),"Topim":"<p>Dear Admin, to store your function, it must be safe. A function is considered safe when it complies with the following:</p>\n<p>1.A function must not be an Immediately Invoked Function Expression (IIFE), recognized by the following syntax: \nfunction(){your arguments}<yellow>()</yellow></p>\n\n<p>2.To emphasize on 1, any function that deviates from the following will not be treated as a function: <yellow>function(){YOUR FUNCTION}</yellow>      <---- if you put anything after the function's closing curly bracket, it will not be treated as a function in order to prevent an attacker from writing code to the server</p>\n\n<p>3.Any javascript comments or grave accent should not be used.</p>\n\n<p>4.If you want your function to be deserializd, it must still start with the NodeJS serialize function flag.</p>\n\n\n<p>Should you require any further reference, please inspect the WAF rule we've set up here.</p>","Metziltaim":"apropa='GET';aprapo='/guide-how-to-send-a-function';gamba+'pilpel'"};
			var filteredrequest = {"name":escapehtml(ReqJSON["postername"]),"content":escapehtml(ReqJSON["comment"])};
			commentsdb.collection("forumcomments").insert(filteredrequest,function(err,whatever){
				if(err){ throw err;}
			});
			res.send(serializationResponse)
		}
		else
		{
			res.setHeader('Serialization','False');
			var filteredrequest = {"name":escapehtml(ReqJSON["postername"]),"content":escapehtml(ReqJSON["comment"])};
			var responcomment = {"Zebra":escapehtml(ReqJSON["postername"]),"Dinasaur":escapehtml(ReqJSON["comment"])};
			commentsdb.collection("forumcomments").insert(filteredrequest,function(err,whatever){
				if(err){ throw err;}
				res.send(responcomment);
			});
		}
	}
	else
	{
		res.send('<script>alert("Lol noob you need the API token");document.location="/forumapi"</script>');
	}
})
app.get('/guide-how-to-send-a-function',(req,res)=>{
	if(req.headers['x-powered-by-bamba']=='VGhpcyBpcyBqdXN0IHRoZSBBUEkgdG9rZW4=')
	{
	res.write('baglecinderella.innerHTML+=\x27<img src="data:image/png;base64,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"></br></br></br>\x27');
	res.send();
	}
	else
	{
		res.send('<script>alert("Lol noob you need the API token");document.location="/guide-how-to-send-a-function"</script>');
	}
})
app.get('/authenticatedjs',(req,res)=>{
	if(req.headers['x-powered-by-bamba']=='VGhpcyBpcyBqdXN0IHRoZSBBUEkgdG9rZW4=')
	{
	res.write("bagledocument.getElementsByTagName('h2')[0].innerHTML='Stage 2 - Execute code on our server';document.getElementsByTagName('h3')[0].innerHTML='Authenticated! Attempt to seize control of this server';document.getElementsByTagName('input')[0].name='postername';document.getElementsByTagName('input')[1].outerHTML='<textarea name=\x22comment\x22 placeholder=\x22Enter comment here...\x22>';document.getElementsByTagName('input')[0].value='';document.getElementsByTagName('input')[0].placeholder='Enter name';document.getElementsByTagName('button')[0].innerHTML='Post Comment';document.getElementsByTagName('button')[0].setAttribute('onclick','apropa=\x22POST\x22;aprapo=\x22/forumapi\x22;aprapa=JSON.stringify({\x22postername\x22:document.getElementsByTagName(\x22input\x22)[0].value,\x22comment\x22:document.getElementsByTagName(\x22textarea\x22)[0].value});if(kobi==0){alert(\x22Kobi can never be a 0\x22)}');dambo=document.getElementById('sumo');cinderella=document.getElementById('avocado');pomba=document.createElement('table');pomba.setAttribute('align','center');pomba.setAttribute('border','black');dambo.appendChild(pomba);have={toString:function(){var t=SetXHR('GET','/forumapi',apropo);t.send(),t.onreadystatechange=function(){if (4==this.readyState&&200==this.status){var t=JSON.parse(this.responseText);for(i in t.Name){if((parseInt(i)+1)!=t.Name.length){timon[i].tds[1].innerHTML=t.Name[i],timon[i].tds[2].innerHTML=t.Comment[i];}}}}}};apropa='GET';aprapo='/forumapi';!function(){var t=SetXHR(apropa,aprapo,apropo);t.send(),t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=JSON.parse(this.responseText);for(i in t.Name){if((parseInt(i)+1)!=t.Name.length){for(timon[i]={},timon[i].tds=[],timon[i].tr=document.createElement('tr'),j=0;j<3;j++)timon[i].tds[j]=document.createElement('td'),timon[i].tr.appendChild(timon[i].tds[j]);timon[i].tds[0].innerHTML=parseInt(i)+1;timon[i].tds[1].innerHTML=t.Name[i],timon[i].tds[2].innerHTML=t.Comment[i]}else{for (timon[i] = {}, timon[i].tds = [], timon[i].tr = document.createElement('tr'), j = 0; j < 3; j++) timon[i].tds[j] = document.createElement('th'), timon[i].tr.appendChild(timon[i].tds[j]);timon[i].tds[0].innerHTML='Number';timon[i].tds[1].innerHTML='Name';timon[i].tds[2].innerHTML='Comment'};}for(var z=timon.length-1;z>=0;z--){pomba.appendChild(timon[z].tr);}}}}()");
	res.send();
	}
	else
	{
		res.send('<script>alert("Lol noob you need the API token");document.location="/authenticatedjs"</script>');
	}
});
app.post('/',(req,res) =>{
	var x = {"username":req.body.username,"password":req.body.password};
	var db = req.db;
	var collection = db.get('applicationusers');
	if(req.cookies.GiveMeHints)
	{
		res.setHeader('This-Is-A-Hint!','You want to log in as admin, and MongoDB has some operators you can look up');
		res.setHeader('A-Hint!','You want to log in as admin, and MongoDB has some operators you can look up');
		res.setHeader('Hint!','You want to log in as admin, and MongoDB has some operators you can look up');
	}
	res.setHeader('Mongo-DB','The NoSQL Server');
	try{
	collection.find(x,{},function(e,docs){
		if(e){res.send("alert(\"You\'re doing something wrong, stop, this is not a hint\")")};
		if(docs!=null){
			if(docs.length==1)
			{	
					res.send("apropo=\"xhr.setRequestHeader('X-Powered-By-Bamba','VGhpcyBpcyBqdXN0IHRoZSBBUEkgdG9rZW4=');/*xhr.setRequestHeader('Serialize-This','True');*/xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');\";apropa=\"GET\";aprapo=\"/authenticatedjs\",gamba+'tomato'");
			}
			else
			{
				if(docs.length>1)
				{
					res.send("alert(\"You\'re close!\nBut you only need the admin user\")");
				}
				else
				{
					res.send("alert('Wrong details skiddie')");
				}
			}
		}
	}
	);
	}
	catch(ex){res.send("alert(\"You\'re doing something wrong, stop, this is not a hint\")")};
});
var firstrun= function(){
var checkexistinguserscollection = db.get('applicationusers');
var Check_Admin = {"username": {"$gt":""}};
checkexistinguserscollection.find(Check_Admin,{},function(e,docs){
	if(e){console.log("DB has an issue:\n"+e)}
	if(docs!=null){
		if(docs.length>1)
		{
			console.log("DB is good to go");
		}
		else
		{
			console.log("DB is empty, attempting to fix...");//Was created to simplify application data migration from one environment to another. Don't read this if you haven't solved the challenge yet, misses all the point!
			var Hardcoded_Users = [{"username": "admin","password": "7h!$_p@$$_w!ll_b3_byp@$$3d"},{"username": "edw@rd","password": "$c!$$0rh@nd$"}];	
db.collection("applicationusers").insert(Hardcoded_Users,function(err,whatever){
if(err){console.log("We couldn't add users because of this issue:\n"+err);}})
var allTemplateComments = [{"name": "admin","content": "test"},{"name": "admin","content": "test test"},{"name": "admin","content": "comment test test"},{"name": "admin","content": "comment, testing!"},{"name": "admin","content": "comment, forum seems to work! now I want to use it somehow for my other applications... will update"},{"name": "admin","content": "This forum will be used by me to store my functions"},{"name": "admin","content": "Added functionality to store functions in the server-side as Node.JS code to be able to use them in other applications"},{"name": "admin","content": "Other applications will pull these functions to their code, enabling me to safely send functionality to other applications using this forum!"},{"name": "admin","content": "ND FUNC"},{"name": "&lt;script&gt;alert(1337)&lt;script&gt;","content": "\\x3cdetails/open/ontoggle=\\x27alert`win`\\x27\\x3e\\x3csvg/onload=alert(1337)\\x3e\\u003cimg/src=x/onerror=\\x22alert(1337)\\x22\\u003e"},{"name": "Albert A.","content": "Something smart about physics"},{"name": "Justin","content": "Believer"},{"name": "yourmom","content": "lol what is this"},{"name": "kobi","content": "I post comments ;)"},{"name": "\\x3c\\u003c\\u0022\\u0027","content": "\\x3c\\u003c\\u0022\\u0027"},{"name": "admin","content": "ND FUNC"},{"name": "admin","content": "how do I serialize this?"},{"name": "Anonymous user","content": "I'm next to you"},{"name": "everyone","content": "allow all"},{"name": "&lt;script&gt;alert(1337)&lt;script&gt;","content": "\\x3cdetails/open/ontoggle=\\x27alert`win`\\x27\\x3e\\x3csvg/onload=alert(1337)\\x3e\\u003cimg/src=x/onerror=\\x22alert(1337)\\x22\\u003e"},{"name": "zz","content": "zzzzzzzzzzzz"},{"name": "zz","content": "zzzzzzzzzzzz"},{"name": "zz","content": "zzzzzzzzzzzz"},{"name": "zz","content": "zzzzzzzzzzzz"},{"name": "&lt;script&gt;alert(1337)&lt;script&gt;","content": "\\x3cdetails/open/ontoggle=\\x27alert`win`\\x27\\x3e\\x3csvg/onload=alert(1337)\\x3e\\u003cimg/src=x/onerror=\\x22alert(1337)\\x22\\u003e"},{"name": "&lt;script&gt;alert(1337)&lt;script&gt;","content": "\\x3cdetails/open/ontoggle=\\x27alert`win`\\x27\\x3e\\x3csvg/onload=alert(1337)\\x3e\\u003cimg/src=x/onerror=\\x22alert(1337)\\x22\\u003e"},{"name": "admin","content": "What is this? what's going on?"},{"name": "pomba","content": "I am the table!"},{"name": "admin","content": "Who are you guys? how did you gain access to this forum?"},{"name": "admin","content": "Calling the police..."},{"name": "timon","content": "I am the data in the table!"},{"name": "kobi","content": "Where's my umbrella?"},{"name": "KOBI","content": "KOBI"},{"name": "Hacker","content": "\\x3csvg/onload=\\x22confirm`I win`\\x22\\x3e"},{"name": "blabla","content": "blablablablablablablablablablablablablabla"},{"name": "what","content": "is"},{"name": "this","content": "shit"},{"name": "wtf","content": "wtf"},{"name": "admin","content": "I hate you guys"},{"name": "test","content": "test"},{"name": "\\x3cscript\\x3ealert(1337)\\x3cscript\\x3e","content": "\\x3cdetails/open/ontoggle=\\x27alert`win`\\x27\\x3e\\x3csvg/onload=alert(1337)\\x3e\\u003cimg/src=x/onerror=\\x22alert(1337)\\x22\\u003e"}];
commentsdb.collection("forumcomments").insert(allTemplateComments,function(err,whatever){
				if(err){console.log("We couldn't add comments because of this issue:\n"+err);}else{console.log("Successfully added users and template comments to the DB, App is good to go!")}
				});
		}
	}
	else
	{
		console.log("Can't connect to DB, app won't work");
	}
});
}();
app.listen(port,()=>console.log(`App is listening on port ${port}!`));