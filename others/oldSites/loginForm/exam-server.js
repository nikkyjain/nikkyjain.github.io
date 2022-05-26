
var dirMdata='metadata';
var dirLogins=dirMdata+'/logins';
var dirData=dirMdata+'/data';
const usersXml = dirLogins+'/users.xml';
var allUsersById = [];


//---------------------- Server Main Code ------------------------
var express = require('express');
var fs = require('fs');
var DOMParser = require('xmldom').DOMParser;
const prettifyXml = require('prettify-xml')

var app = express();
var bodyParser = require("body-parser");
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.post('/post', function(req, res){
    // get query params as object
    //console.log("Received body data:");
    //console.log(req.body);
    // Handle Registration
    if(req.body.postType=='register') {
        console.log("Registration Req from "+req.body.regName+ ", Mobile "+req.body.regMobile);
        registerUser(req, res);
    }
    if(req.body.postType=='login') {
        console.log("User "+req.body.loginUname+ ", Logging In");
        loginUser(req, res);
    }
});

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/', express.static(__dirname + ''));

var server = app.listen(3001, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

// --------------- Functions Goes Here ----------------------

createDir(dirMdata);
createDir(dirLogins);
createDir(dirData);
createUserXml(usersXml);
getAllUsersFromXml(allUsersById);

function createDir(d) {
    if (!fs.existsSync(d)) {
        fs.mkdirSync(d);
    }
}

function createUserXml (xml) {
    var builder = require('xmlbuilder');
    var doc = builder.create('xml', {
        version: '1.0',
        encoding: 'UTF-8'
    }).ele('users')
    .end({ pretty: true });
    //console.log(doc.toString());
    fs.writeFile(xml, doc.toString(), function(err, data) {
        if(err) {
            console.log("Error During XML Creation");
            return console.log(err);
        }
        console.log("XML file created : "+xml);
        fs.readFile(xml, 'utf-8', function(err, data) {
            var xmlDoc = new DOMParser().parseFromString(data, 'application/xml');
            // See if userID is already taken
            var xmlUsers = xmlDoc.getElementsByTagName('users')[0];
            var newEle = xmlDoc.createElement("uname");
            newEle.setAttribute('id','admin');
            newEle.appendChild(xmlDoc.createElement('mobile')).appendChild(xmlDoc.createTextNode('9663379741'));
            newEle.appendChild(xmlDoc.createElement('passwd')).appendChild(xmlDoc.createTextNode('03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'));
            newEle.appendChild(xmlDoc.createElement('registered')).appendChild(xmlDoc.createTextNode(new Date().toLocaleString()));
            newEle.appendChild(xmlDoc.createElement('previledge')).appendChild(xmlDoc.createTextNode('admin'));
            xmlUsers.appendChild(newEle);
            fs.writeFile(usersXml, prettifyXml(xmlDoc.toString()), function(err, data) {
                if(err) {
                    console.log("Error During XML Write Admin Data.");
                    return console.log(err);
                }
                console.log("Admin Entry Created In XML. All Set, ready for other user logins now");
            })
        });
    });
}



function numAttribute (xml, node, attr, val) {
    var xmlNodes = xml.getElementsByTagName(node);
    for(var i=0; i<xmlNodes.length; i++) {
        if(xmlNodes[i].getAttribute(attr)==val) {
            return(1);
        }
    }
    return(0);
}

function numNodes (xml, node, val) {
    var xmlNodes = xml.getElementsByTagName(node);
    for(var i=0; i<xmlNodes.length; i++) {
        if(xmlNodes[i].firstChild.nodeValue==val) {
            return(1);
        }
    }
    return(0);
}

function registerUser(req, res) {
    // Function to register a new user
    fs.readFile(usersXml, 'utf-8', function(err, data) {
        var xmlDoc = new DOMParser().parseFromString(data, 'application/xml');
        // See if userID is already taken
        if(!numAttribute(xmlDoc, 'uname', 'id', req.body.regName)) {
            // See if email is already taken
            if(!numNodes(xmlDoc, 'mobile', req.body.regMobile)) {
                var xmlUsers = xmlDoc.getElementsByTagName('users')[0];
                var newEle = xmlDoc.createElement("uname");
                newEle.setAttribute("id",req.body.regName);
                newEle.appendChild(xmlDoc.createElement('mobile')).appendChild(xmlDoc.createTextNode(req.body.regMobile));
                newEle.appendChild(xmlDoc.createElement('passwd')).appendChild(xmlDoc.createTextNode(req.body.regPasswd));
                newEle.appendChild(xmlDoc.createElement('registered')).appendChild(xmlDoc.createTextNode(new Date().toLocaleString()));
                newEle.appendChild(xmlDoc.createElement('previledge')).appendChild(xmlDoc.createTextNode('normal'));
                xmlUsers.appendChild(newEle);
                fs.writeFile(usersXml, prettifyXml(xmlDoc.toString()), function(err) {
                    if(err) {
                        console.log(err);
                        ret={status:'false',msg:"Error During XML Creation. Inform Admin."};
                    } else {
                        console.log("User "+req.body.regName+" Registered.");
                        ret={status:'true',msg:"Registration Successful. Login Now."};
                    }
                    res.send(ret);
                })
            } else {
                console.log("Mobile '"+req.body.regMobile+"' already registered. Register with some other name");
                ret={status:'false',msg:"Mobile '"+req.body.regMobile+"' already registered. Skipping"};
                res.send(ret);
            }
        } else {
            console.log("User '"+req.body.regName+"' already registered. Skipping");
            ret={status:'false',msg:"User '"+req.body.regName+"' already registered. Skipping"};
            res.send(ret);
        }
    });
}


function getAllUsersFromXml (allUsersById) {
    if (fs.existsSync(usersXml)){
        fs.readFile( usersXml, 'utf-8', function(err, data) {
            var xmlDoc = new DOMParser().parseFromString(data, 'application/xml');
            var myAllIds=xmlDoc.getElementsByTagName("uname");
            var myAllPwds=xmlDoc.getElementsByTagName("passcode");
            var myAllEmails=xmlDoc.getElementsByTagName("email");
            for(var i=0; i<myAllIds.length; i++) {
                var myUname=myAllIds[i].getAttribute('id');
                allUsersById[myUname]={};
                var myId=allUsersById[myUname];
                myId['name']=myAllNames[i].firstChild.nodeValue;
                myId['pcode']=myAllPwds[i].firstChild.nodeValue;
                myId['email']=myAllEmails[i].firstChild.nodeValue;
            }
        });
    }
}

function loginUser(req, res) {
    if(! (req.body.loginUname in allUsersById) ) {
        console.log("User '"+req.body.loginUname+"' tried logging in. Login doesnt exist. Rejected");
        ret={status:'false',msg:"User '"+req.body.loginUname+"' doesnt exist. Register or use correct userName."};
    } else if ( (req.body.loginPasswd != allUsersById[req.body.loginUname]['passwd']) ) {
        console.log("User '"+req.body.loginUname+"' entered wrong password. Rejected");
        ret={status:'false',msg:'Password Incorrect'};
    } else {
        console.log("User '"+req.body.loginUname+"' logged in");
        ret={status:'true',msg:'Welcome '+req.body.loginUname};
    }
    res.send(ret);
    return;
}
