
//mensaje para en envio de contacto//
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        
        setTimeout(() => {
            successMessage.style.display = "block";
            form.reset(); 
        }, 500); 
    });
});
//final//

