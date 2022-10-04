class UI {
    constructor() {
        
    }

    alert(message, type) {
        const alertMessage = document.createElement("p");
        const textMessage = document.createTextNode(message);

        alertMessage.appendChild(textMessage);
        alertMessage.classList = type;

        const alertParagraph = document.querySelector(".alert-message");

        alertParagraph.appendChild(alertMessage);
    }
}