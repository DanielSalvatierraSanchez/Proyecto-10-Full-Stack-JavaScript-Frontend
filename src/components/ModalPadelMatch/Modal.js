import "./Modal.css";
import { dateFormat } from "../../utils/DateFormatted";
import { buttonJoin } from "../../utils/ButtonJoin";
import { buttonClose } from "../../utils/ButtonClose";

export const modal = (parentElement, data, user) => {
    const isFull = data.players.length === 4;
    const isUserJoined = data.players.some((player) => player.userId === user._id); // user.id RETIRARSE y user.userId UNIRSE
    const dateFormatted = dateFormat(data.date);
    const playersList = data.players.length > 0 ? data.players.map((player) => player.userName).join(", ") : "Ninguno";

    parentElement.innerHTML = `
                <div class="modal-container">
                <h3 class="modal-title">${data.title}</h3>
                <img class="modal-img" src=${data.image}>
                <div class="modal-description-container">
                <p class="modal-date"><strong>Fecha:</strong> ${dateFormatted}</p>
                <p class="modal-location"><strong>Lugar:</strong> ${data.location}</p>
                <p class="modal-place"><strong>Pista:</strong> ${data.place}</p>
                <p class="modal-author"><strong>Creador:</strong> ${data.author?.name}</p>
                </div>
                <button class="join-btn" 
                padelMatch-id="${data._id}" ${isFull ? "disabled" : ""}>
                ${
                    isFull && !isUserJoined
                        ? `<img class="completed-btn-img" src="/assets/full.png">PARTIDO COMPLETADO<img/>`
                        : isUserJoined
                        ? `<img class="removed-btn-img" src="/assets/borrar-usuario.png">RETIRARSE<img/>`
                        : `<img class="joined-btn-img" src="/assets/agregar-usuario.png">UNIRSE<img/>`
                }
                </button>
                <p class="modal-players" data-type="assistants"><strong>Asistentes ${data.players.length}/4:</strong></p>
                <p class="modal-players-list" data-type="assistants">${playersList}</p>
                <img class="close-btn" src="./assets/close.png"></img>
                </div>
                `;

    buttonJoin(parentElement, data);
    buttonClose(parentElement);
};

/*
<img class="join-btn-img" src="/assets/player.png">
poner debajo del button para ver imagen

&& !isUserJoined
poner detras de los 2 isFull
*/
