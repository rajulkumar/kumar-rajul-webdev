var http=require('http');

var options={
    host:'https://api.github.com'
};

var authOptions={
    
    host:'https://api.github.com',
    auth: 'projectx-org:f60c3c81b0d8e07fd9720707ea1e942b8921d09d'
};

var callback=function(response){
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data',function(chunk){
        return chunk;
    })
};

module.exports={
    "gitCreateProject":gitCreateProject
};

function gitCreateProject(title,desc){
    authOptions.path='/user/repos';
    authOptions.method='POST';
    var body={"name":title,"description":desc};
    var request=http.request(authOptions,callback);
    request.write(body);
    request.end();
}