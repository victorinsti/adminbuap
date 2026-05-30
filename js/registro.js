import { auth } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const form = document.getElementById("registroForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const correo =
        document.getElementById("correo").value;

    const password =
        document.getElementById("password").value;

    try {

        await createUserWithEmailAndPassword(
            auth,
            correo,
            password
        );

        alert("Cuenta creada correctamente");

        window.location.href =
            "dashboard.html";

    } catch(error){

        alert(error.message);

    }

});