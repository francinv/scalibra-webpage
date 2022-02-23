async function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById("name-field");
    const company = document.getElementById("company-field");
    const email = document.getElementById("email-field");
    const phone = document.getElementById("tel-field");

    const data = {
        "name": name.value,
        "company_name": company.value,
        "email": email.value,
        "phone_number": phone.value 
    }

    const headers = buildHeaders();

    const rawResponse = await fetch("http://127.0.0.1:8000/api/forms/", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    });
    const r = rawResponse.status;

    const section = document.getElementById("section-s1");
    section.classList.add("scrollable-expanded");

    if (r === 201) {
        const alert_box = document.getElementById("alert-box");
        alert_box.classList.add("alert-success");
        alert_box.innerHTML ="Din forespørsel har blitt sendt. Vi tar kontakt innen 24 timer.";
        alert_box.style.display = "block";
        name.value = '';
        company.value = '';
        email.value = '';
        phone.value = '';
    }
    else if (r === 400) {
        const alert_box = document.getElementById("alert-box");
        alert_box.classList.add("alert-danger");
        alert_box.innerHTML ="Det var noe feil med forespørselen. Sjekk at alle felt er korrekt.";
        alert_box.style.display = "block";
    }
}

function buildHeaders() {
    const headers = {
        "Content-Type": "application/json"
    };
    return headers;
}

const contactForm = document.getElementById("homepage-contact-form");

if(contactForm) {
    contactForm.addEventListener("submit", function(e){
        submitForm(e);
    })
}