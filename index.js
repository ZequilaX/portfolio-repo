function sendMail() {
    var params = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("emailAddress").value,
        subject: document.getElementById("messageSubject").value,
        message: document.getElementById("messageContent").value
    };

    const serviceID = "service_5br3yy9";
    const templateID = "template_oy0obim"

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("firstName").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("emailAddress").value = "";
            document.getElementById("messageSubject").value = "";
            document.getElementById("messageContent").value = "";
            console.log(res);
            })
        .catch((err) => console.log(err));
}