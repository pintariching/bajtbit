const form = document.getElementById("contact-form");
const recipient = "info@bajtbit.si";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const service = data.get("service");
    const subject = "Povpraševanje" + (service ? " — " + service : "");
    const body = [
        "Ime in priimek: " + (data.get("name") || ""),
        "Podjetje: " + (data.get("company") || ""),
        "E-pošta: " + (data.get("email") || ""),
        "Telefon: " + (data.get("phone") || ""),
        "Storitev: " + (service || ""),
        "",
        "Opis naloge:",
        data.get("body") || "",
    ].join("\n");
    const url = "mailto:" + recipient
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(body);
    window.location.href = url;
});
