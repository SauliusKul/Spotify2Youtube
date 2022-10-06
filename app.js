const ui = new UI();

document.querySelector(".convert").addEventListener("click", (e) => {
    const url = document.querySelector(".url-input").value;
    
    const server = new API(url);

    // console.log(server);

    // if (server.getPlaylist() === 1) {
    //     ui.alert("Incorrect url provided", "alert alert-danger");
    //     console.log(1);
    // };

    server.getPlaylist()
    .then(response => console.log(response));
    
    e.preventDefault();
})
