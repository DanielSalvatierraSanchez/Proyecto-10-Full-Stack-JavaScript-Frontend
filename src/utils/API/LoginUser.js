import { Header } from "../../components/Header/Header";
import { Loader, LoaderOff } from "../../components/Loader/Loader";
import { errorMessage } from "../../components/Messages/Error/ErrorMessage";
import { successMessage } from "../../components/Messages/Success/SuccessMessage";
import { PadelMatches } from "../../pages/PadelMatches/PadelMatches";
import { setUserDataToLocalStore } from "../SetUserData";
import { API } from "./API";

export const loginUser = async (e) => {
    e.preventDefault();
    const [email, password] = e.target;
    const user = {
        email: email.value,
        password: password.value
    };

    try {
        const form = document.querySelector("form");
        const res = await API({ endpoint: "/users/login", method: "POST", body: user });
        console.log("res FETCH =>", res);

        if (!res || !res.user) {
            errorMessage(res, form);
        }

        setUserDataToLocalStore(res);
        Loader(form);
        successMessage(res, form);
        Header();
        setTimeout(() => {
            window.history.pushState("", "", "/padel_matches");
            PadelMatches();
        }, 500);
    } catch (error) {
        console.log("Error en el login del usuario: ", error.message);
    }
};
