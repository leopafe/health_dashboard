var request = require('superagent');

export function getHealth(url) {
    request
        .get(url)
        .end(function(err, res){
            if(err || !res.ok){
                alert('Error getting health: ' + err);
            }
            else{
                console.log(5);
                console.log(res);
                return(res.body);
            }
        });
}