var request=require('request-promise');

var url="https://api.github.com";
var auth = "Basic " + new Buffer("projectx-org" + ":" + "8747066fead273459724d1109a7d9c5b3a9a9882").toString("base64");
//var auth = "Basic " + new Buffer("projectx-org" + ":" + process.env.GITHUB_TOKEN).toString("base64");
var options = {
    method: 'POST',
    uri: 'https://api.github.com/user/repos',

    headers: {
        'User-Agent': 'projectx-org',
        'Authorization': auth
    },
    json: true
    // JSON stringifies the body automatically
};

module.exports={
    "createProject":createProject,
    "searchProject":searchProject,
    "getProject":getProject,
    "createBp":createBp,
    "getBp":getBp,
    "updateBp":updateBp,
    "deleteBp":deleteBp
};

function getProject(projectName){
    options.method='GET';
    options.uri=url+"/repos/projectx-org/"+projectName;
    return request(options)
        .then(function (response) {
            return response;
        })
        .catch(function (err) {
            console.log(err);
        })
}

function searchProject(searchTerm){
    options.method='GET';
    options.uri=url+"/search/repositories?q="+searchTerm+"+user:projectx-org";
    return request(options)
        .then(function (response) {
            return response;
        })
        .catch(function (err) {
            console.log(err);
        })
}

function createProject(title,desc) {
    options.body={"name":title,"description":desc};
    return request(options)
        .then(function (response) {
            return response;
        })
        .catch(function (err) {
            console.log(err);
        })

}

function createBp(project,fileName,description,message){
    options.method='PUT';
    options.body={"message":message,"content": new Buffer(description).toString("base64")};
    options.uri=url+"/repos/projectx-org/"+project+"/contents/"+fileName.toString()+".txt";

    return request(options)
        .then(function (response){
            return response;
        })
        .catch(function (err){
            return err;
        })

}

function getBp(project,fileName){
    options.uri=uri+"/repos/project-x/"+project+"/contents/"+fileName+".txt";
    options.method="GET";

    return request(options)
        .then(function (response){
            return response;
        })
        .catch(function (err){
            return err;
        })
}

function updateBp(project,fileName,description,message,sha){
    options.body={"message":message,"content":new Buffer(description).toString("base64"),"sha":sha};
    options.uri=uri+"/repos/project-x/"+project+"/contents/"+fileName+".txt";
    options.method="PUT";

    return request(options)
        .then(function (response){
            return response;
        })
        .catch(function (err){
            return err;
        })

}

function deleteBp(project,fileName,sha){
    options.body={"message":"deleted","sha":sha};
    options.uri=uri+"/repos/project-x/"+project+"/contents/"+fileName+".txt";
    options.method="DELETE";

    return request(options)
        .then(function (response){
            return response;
        })
        .catch(function (err){
            return err;
        })

}