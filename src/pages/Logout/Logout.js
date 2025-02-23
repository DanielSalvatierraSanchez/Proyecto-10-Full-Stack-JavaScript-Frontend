import "./Logout.css";
import { createPage } from "../../functions/CreatePage";
import { Button } from "../../components/Button/Button";
import { Profile } from "../../components/Profile/Profile";
import { buttonBack } from "../../components/ButtonBack/ButtonBack";
import { UserLogout } from "../../components/UserLogout/UserLogout";

export const Logout = () => {
    const div = createPage("Logout");
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("logout-container");
    profileContainer.innerHTML = `<h1 class="title-logout">Perfíl de Usuario</h1>`;

    profileContainer.append(
        Button({
            text: "Actualizar Perfíl",
            fnc: () => {
                window.history.pushState("", "", "/profile");
                Profile();
            },
            className: "btn-update-profile-logout"
        }),
        Button({
            text: "Cerrar Sesión",
            fnc: () => {
                UserLogout({
                    parentElement: profileContainer,
                    message: "cerrar sesión"
                });
            },
            className: "btn-logout-logout"
        })
    );
    buttonBack(profileContainer);
    div.append(profileContainer);
    return div;
};
