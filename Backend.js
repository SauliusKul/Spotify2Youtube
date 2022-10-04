class Backend {
    constructor(url) {
        this.url = url;
    }

    async getPlaylist() {
        // console.log(this.url);

        
        try {
            const response = await fetch('https://jsonplacehoer.typicode.com/todos/1');

            const jsObjectResponse = await response.json();    
            
            console.log(jsObjectResponse);
        } catch (error) {
            return 1;
        }

    }
    
}