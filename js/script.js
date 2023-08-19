document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("button");
		const form = document.getElementById("send");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            btn.value = "Sending...";

            const templateID = "template_9e8sjnv";
            const serviceID = "gmail";

            emailjs.sendForm(serviceID, templateID, this).then(
                () => {
                    btn.value = "Send Email";
                    event.reset();
                },
                (err) => {
                    btn.value = "Send Email";
                    alert(JSON.stringify(err));
                }
            );
            form.reset();
        });
});