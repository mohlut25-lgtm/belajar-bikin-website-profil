function scrolltocontact() {
    document.getElementById("projects").scrollIntoView({
        behavior: 'smooth'
    })
}

document.getElementById("contactform").addEventListener("submit", function(event){
    event.preventDefault();
        document.getElementById("message").innerText =
        "Pesan berhasil dikirim. Terima Kasih!";
    
});