import { Button } from "../Button/Button";
import { FieldForm } from "../FieldForm/FieldForm";
import "./RegisterForm.css";
import { API } from "../../utils/API/API.js";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches.js";

export const RegisterForm = (form) => {
    form.className = "register-form";
    form.innerHTML = `
    <h2>Registro de Usuario</h2>
    ${FieldForm({ labelText: "Nombre de Usuario:", inputType: "text", inputPlaceholder: "Nombre de Usuario" })}
    ${FieldForm({ labelText: "Email:", inputType: "email", inputPlaceholder: "email@email.email" })}
    ${FieldForm({ labelText: "Contraseña:", inputType: "password", inputPlaceholder: "********" })}
    ${FieldForm({ labelText: "Teléfono:", inputType: "tel", inputPlaceholder: "123456789" })}
    ${FieldForm({ labelText: "Imagen de perfil:", inputType: "file" })}
    <button type="submit">Crear Cuenta</button>
    `;

    form.addEventListener("submit", registerUser());

    // form.append(
    //     Button({
    //         text: "Crear Cuenta",
    //         fnc: async () => {},
    //         className: "btn-registerForm"
    //     })
    // );
};

export const registerUser = async (e) => {
    const URL = "http://localhost:3000/api/v1/appadel/users";
    e.preventDefault();
    const formData = new FormData(e);
    formData.append("name", e.target[0].value);
    formData.append("email", e.target[1].value);
    formData.append("password", e.target[2].value);
    formData.append("phone", e.target[3].value);
    formData.append("image", e.target[4].files[0]);
    try {
        // const user = { name: e.target[0].value };
        // , email: e.target[1].value, password: e.target[2].value, phone: e.target[3].value
        // console.log("User Data =>", user);
        // const userJSON = JSON.stringify(user);
        // console.log("JSON.stringify(user) =>", userJSON);

        const response = await fetch(URL + "/register", {
            // body: userJSON,
            method: "POST",
            body: formData
            // headers: { "Content-type": "multipart form data" }
        });
        console.log("response =>", response);

        const res = await response.json();
        e.preventDefault();
        console.log("res FINAL =>", res);
        console.log("Usuario registrado correctamente.");

        return res;
    } catch (error) {
        console.error("Error en el registro del usuario:", error);
        alert(`Error en el registro: ${error.message}`);
    }
};
