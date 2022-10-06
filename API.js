class API {

    constructor(url) {
        // Extract playlist ID from the url
        const playlistID = url.split('/').pop();

        this.playlistID = playlistID;
        this.userOAuthToken = "BQAgkse4T3skA-xzwG5jqjc--VrIuWsptNKCnxRpWl2-QiCvj65iZPFYNzIuG1l2Ovty_LeL4YAz6HsX0SdhyrFvmN2Uv4DeKbMBDnL1rBK6GcXotUwcnAUDRS_6fi7LSLIctX5vitx7W5TkF4ZUUUFy-lCCl9RPDVacpi4blsD_"
    }

    // handleError(response) {
    //     if (!response.ok) {
    //         throw Error(response.statusText);
    //     }
    //     return response;
    // }

    async getPlaylist() {
        // console.log(this.url);

        // const playlist = fetch(this.url)
        // .then(this.handleError)
        // .then(response => response.json())
        // .then(data => data)
        // .catch(err => console.log(err));
        
        const response = await fetch(`https://api.spotify.com/v1/playlists/${this.playlistID}`, 
            {
                method: "GET",
                headers: { 'Authorization' : 'Bearer ' + this.userOAuthToken }
            });

        const jsObjectResponse = await response.json();    
        
        return jsObjectResponse;
    }

    // TODO: log in user to Spotify to get their access token
    // TODO: Handle the failed request to display in an alert
    // TODO: Display selected playlist in UI
    // TODO: Handle Yoututbe API
}