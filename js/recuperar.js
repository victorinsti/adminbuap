import { auth } from "./firebase-config.js";

import {
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const form =
document.getElementById("recuperarForm");

form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const correo =
    document.getElementById("correo").value;

    try{

        await sendPasswordResetEmail(
            auth,
            correo
        );

        alert(
            "Se envió un correo para recuperar tu contraseña."
        );

    }
    catch(error){

        alert(error.message);

    }

});