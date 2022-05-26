
var dirMdata='metadata';
var dirLogins=dirMdata+'/logins';
var examData=dirMdata+'/exam';
var testPaper=dirMdata+'/testPaper';
var fResults=dirMdata+'/results';
const usersXml = dirLogins+'/users.xml';
var allUsersById = [];

//---------------------- All Answers ----------------------------

var allAns = {};
allAns['karmUdayBandh']=[3, 3, 5, 5, 19, 14, 20, 16, 11, 12, 15, 14, 14, 15, 19, 20, 30, 20, 23, 26, 33, 32, 36, 30, 39, 32, 40, 34, 30, 31, 45, 40, 39, 42, 49, 46, 50, 46, 44, 42, 54, 50, 56, 48, 52, 48, 59, 58, 62, 58, 63, 62, 61, 62, 60, 58, 62, 60, 73, 68, 74, 70, 77, 72, 78, 68, 71, 70, 73, 78, 75, 79, 77, 82, 84, 77, 81, 79, 83, 81, 85, 83, 94, 86, 97, 94, 100, 96, 94, 92, 104, 100, 107, 102, 104, 105, 109, 106, 105, 102, 106, 107, 116, 112, 118, 114, 121, 116, 123, 114, 125, 116, 127, 124, 123, 124, 129, 128, 132, 124, 133, 132, 127, 132, 138, 134, 135, 134, 141, 140, 140, 141, 143, 143, 142, 151, 140, 153, 153, 153, 142, 143, 157, 152, 158, 154, 148, 149, 158, 152, 153, 153, 166, 162, 163, 164];
allAns['margnaBandh']=[44, 44, 53, 46, 48, 46, 50, 51, 52, 50, 51, 53, 54, 55, 57, 61, 68, 58, 66, 65, 63, 64, 63, 66, 75, 69, 73, 70, 78, 74, 75];


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
    // Handle Registration
    if(req.body.postType=='setTitle') {
        console.log(req.body.postType+" Req Came");
        var examTitle='';
        var testDir='metadata/testPaper';
        do {
            examTitle='Title_'+Math.floor(Math.random() * 10001);
        } while (fs.existsSync(testDir+'/'+examTitle+'.json'));
        console.log("Create File : "+testDir+'/'+examTitle+'.json');
        fs.writeFile(testDir+'/'+examTitle+'.json', JSON.stringify({title:examTitle}), 'utf8', function callback(e) {
            console.log("HaHa");
            console.log(e);
            if(!e) {
                res.send({status:true, dir:testDir, title:examTitle});
            } else {
                res.send({status:false});
            }
            return(res);
        });
    } else {
        console.log("Unexpected Post Came. Ignoring it");
    }
});

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/', express.static(__dirname + ''));

var server = app.listen(8002, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

// --------------- Functions Goes Here ----------------------

createDir(dirMdata);
createDir(dirLogins);
createDir(examData);
createDir(testPaper);
createDir(fResults);
createUserXml(usersXml);
getAllUsersFromXml(allUsersById);

function createDir(d) {
    if (!fs.existsSync(d)) {
        fs.mkdirSync(d);
    }
}

function delFile (f) {
    console.log("Deleting "+f);
    if (fs.existsSync(f)) {
        fs.unlinkSync(f);
    }
}

function createUserXml (xml) {
    if (!fs.existsSync(xml)) {
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
                newEle.setAttribute('ID','admin');
                newEle.appendChild(xmlDoc.createElement('mobile')).appendChild(xmlDoc.createTextNode('9663379741'));
                newEle.appendChild(xmlDoc.createElement('passwd')).appendChild(xmlDoc.createTextNode('f8a2a1141001a2a3a13575c012157d35998dee9714224e20988bd4120aa3449e'));
                newEle.appendChild(xmlDoc.createElement('registered')).appendChild(xmlDoc.createTextNode(new Date().toLocaleString()));
                newEle.appendChild(xmlDoc.createElement('previledge')).appendChild(xmlDoc.createTextNode('admin'));
                xmlUsers.appendChild(newEle);
                fs.writeFile(usersXml, prettifyXml(xmlDoc.toString()), function(err, data) {
                    if(err) {
                        console.log("Error During XML Write Admin Data.");
                        return console.log(err);
                    }
                    console.log("Admin Entry Created In XML. All Set, ready for other user logins now");
                    allUsersById['admin']={};
                    allUsersById['admin']['passwd']='f8a2a1141001a2a3a13575c012157d35998dee9714224e20988bd4120aa3449e';
                    allUsersById['admin']['mobile']='9663370741';
                    console.log("Total Registered Users : ", Object.keys(allUsersById).length);
                })
            });
        });
    }
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
        if(!numAttribute(xmlDoc, 'uname', 'ID', req.body.regName)) {
            // See if email is already taken
            if(!numNodes(xmlDoc, 'mobile', req.body.regMobile)) {
                var xmlUsers = xmlDoc.getElementsByTagName('users')[0];
                var newEle = xmlDoc.createElement("uname");
                newEle.setAttribute("ID",req.body.regName);
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
                        allUsersById[req.body.regName]={};
                        allUsersById[req.body.regName]['passwd']=req.body.regPasswd;
                        allUsersById[req.body.regName]['mobile']=req.body.regMobile;
                        console.log("Total Registered Users : ", Object.keys(allUsersById).length);
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
            var myAllPwds=xmlDoc.getElementsByTagName("passwd");
            var myAllMobiles=xmlDoc.getElementsByTagName("mobile");
            for(var i=0; i<myAllIds.length; i++) {
                var myUname=myAllIds[i].getAttribute('ID');
                allUsersById[myUname]={};
                var myId=allUsersById[myUname];
                myId['passwd']=myAllPwds[i].firstChild.nodeValue;
                myId['mobile']=myAllMobiles[i].firstChild.nodeValue;
            }
            console.log("Total Registered Users : ", Object.keys(allUsersById).length);
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

function saveData (xml, req, res) {
    fs.readFile(xml, 'utf-8', function(err, data) {
        var xmlDoc = new DOMParser().parseFromString(data, 'application/xml');
        var xmlData = xmlDoc.getElementsByTagName('data')[0];
        var subEle = xmlDoc.createElement('Submitted');
        subEle.setAttribute('Date', new Date().toLocaleString());
        xmlData.appendChild(subEle);
        var marksEle = xmlDoc.createElement('result');
        marksEle.setAttribute('Marks', req.body.marks+"%");
        xmlData.appendChild(marksEle);
        var ansCntr=0;
        for (var que in req.body) {
            if(que!='mainUname' && que!='postType' && que!='examType' && que!='marks') {
                var newEle = xmlDoc.createElement('que');
                newEle.setAttribute('ID',que);
                newEle.appendChild(xmlDoc.createElement('Ans')).appendChild(xmlDoc.createTextNode(req.body[que]));
                //newEle.appendChild(xmlDoc.createElement('Exp')).appendChild(xmlDoc.createTextNode(allAns[req.body.examType][ansCntr++]-ansCntr));
                xmlData.appendChild(newEle);
            }
        }
        fs.writeFile(xml, prettifyXml(xmlDoc.toString()), function(err, data) {
            if(err) {
                console.log("Error During XML Write Data : "+xml);
                console.log(err);
                var ret={status: 'false', msg : "Error During Submission.", exam : req.body.examType+'Done'};
                res.send(ret);
            }
            console.log("Ans Saves in XML : ", xml);
            var ret={status: 'true', msg : "Submitted Answers Successfully. Thanks."};
            res.send(ret);
        })
    });
}

function addToFinalResults (xml, req, res) {
    // Create finalResult.xml if it doesnt exists
    if (!fs.existsSync(xml)) {
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
            updateResultEntry(xml, req, res);
        })
    } else {
        updateResultEntry(xml, req, res);
    }
}

function updateResultEntry (xml, req, res) {
    fs.readFile(xml, 'utf-8', function(err, data) {
        var xmlDoc = new DOMParser().parseFromString(data, 'application/xml');
        var xmlUsers = xmlDoc.getElementsByTagName('users')[0];
        var newEle = xmlDoc.createElement("uname");
        newEle.setAttribute("ID",req.body.mainUname);
        newEle.appendChild(xmlDoc.createElement('Marks')).appendChild(xmlDoc.createTextNode(req.body.marks+'%'));
        newEle.appendChild(xmlDoc.createElement('Submitted')).appendChild(
            xmlDoc.createTextNode(new Date().toISOString().replace('T', ' ').substr(0, 19)));
        xmlUsers.appendChild(newEle);
        fs.writeFile(xml, prettifyXml(xmlDoc.toString()), function(err, data) {
            if(err) {
                console.log("Error During XML Write Final Results.");
                return console.log(err);
            }
            console.log("User "+req.body.mainUname+"'s Final Score Saved");
        })
    })
}

function sendFileData (req, res, xml) {
    let xmlParser = require('xml2json');
    console.log("XML : "+xml);
    fs.readFile(xml, 'utf-8', function(err, data) {
        if(err) {
            res.send({status: 'false', msg : "Result File Doesnt Exist For Exam. Contact Admin"});
        }
        res.send({status: 'true', msg : xmlParser.toJson(data)});
    });
}

function delResult (req, res, xml) {
    fs.readFile(xml, 'utf-8', function(err, data) {
        var xmlDoc = new DOMParser().parseFromString(data, 'application/xml');
        var xmlNodes = xmlDoc.getElementsByTagName('uname');
        for(var i=0; i<xmlNodes.length; i++) {
            if(xmlNodes[i].getAttribute('ID')==req.body.uName) {
                xmlDoc.removeChild(xmlNodes[i]);
                fs.writeFile(xml, prettifyXml(xmlDoc.toString()), function(err, data) {
                    if(err) {
                        console.log("Error During XML Write Data : "+xml);
                        console.log(err);
                        var ret={status: 'false', msg : "Error During Submission.", exam : req.body.examType+'Done'};
                        res.send(ret);
                    }
                    console.log("Removed User " + req.body.uName);
                    var examDataFile=examData+"/"+req.body.examType+"/"+req.body.uName+".xml";
                    delFile (examDataFile);
                    var ret={status: 'true', msg : "Removed User " + req.body.uName};
                    res.send(ret);
                })
            }
        }
    })
}
