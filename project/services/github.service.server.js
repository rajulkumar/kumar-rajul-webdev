var request=require('request-promise');

var url="https://api.github.com";
var auth = "Basic " + new Buffer("projectx-org" + ":" + "dc8b6820739f64bb00d57610245c1270da47b2e2").toString("base64");
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
    "createBp":createBp,
    "getBp":getBp,
    "updateBp":updateBp,
    "deleteBp":deleteBp
};

function searchProject(searchTerm){
    options.method='GET';
    options.uri=url+"/search/repositories?q="+searchTerm;
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
    options.body={"message":message,"content":new Buffer(description).toString("base64")};
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