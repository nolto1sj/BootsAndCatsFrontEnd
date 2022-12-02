console.log("we got here");

var client_id =  "59a2dea8cf794f3494f77b182096c100"; 
var client_secret = "29e6648865d948c0b884599dcf6ca6f1";

var clientInfo = window.btoa(client_id + ':' + client_secret)
console.log(clientInfo);

const getToken = async () => {
    console.log("function entered");
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + clientInfo
        },
        body: 'grant_type=client_credentials'
    });
    
    const data = await result.json();
    console.log("we even got here");
    console.log(data.access_token);
    return data.access_token;
}

let TOKEN = getToken();