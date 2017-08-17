var request=require('request-promise');

var url="https://api.github.com";
var auth = "Basic " + new Buffer("projectx-org" + ":" + "d683b8884a6bb2bb054ba2595faf2df194504152").toString("base64");
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
    "createBp":createBp,
    "getBp":getBp,
    "updateBp":updateBp,
    "deleteBp":deleteBp
};

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