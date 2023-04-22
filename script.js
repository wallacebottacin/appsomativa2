function greet() {
    const name = document.getElementById("name").value;
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    if (hour >= 0 && hour < 6) {
        greeting = "Boa madrugada";
    } else if (hour >= 6 && hour < 12) {
        greeting = "Bom dia";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Boa tarde";
    } else {
        greeting = "Boa noite";
    }
    const regex = /\d+/g;
    if (name.match(regex)) {
        alert("O nome não pode conter números");
        return;
    }
    document.getElementById("greeting").innerHTML = greeting + ", " + name + "!";
}
