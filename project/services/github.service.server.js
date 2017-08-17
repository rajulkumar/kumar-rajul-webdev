var request=require('request-promise');

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
    "createProject":createProject
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