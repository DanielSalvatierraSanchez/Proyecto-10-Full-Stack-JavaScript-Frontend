import "./PostPadelMatchForm.css";
import { FieldForm, FieldSelect } from "../FieldForm/FieldForm";
import { postPadelMatch } from "../../utils/API/PostPadelMatch";

export const PostPadelMatchForm = (form) => {
    form.className = "postPadelMatch-form";
    form.innerHTML = `
    ${FieldForm({ inputLabel: "Título", inputType: "text", inputPlaceholder: "Título" })}
    ${FieldForm({ inputLabel: "Ubicación", inputType: "text", inputPlaceholder: "Ubicación" })}
    ${FieldForm({ inputLabel: "Fecha y Hora", inputType: "datetime-local", inputPlaceholder: "DD / MM / YYYY - HH : MM" })}
    ${FieldSelect({ inputLabel: "Tipo de pista", inputOption1: "Indoor", inputOption2: "Outdoor" })}
    ${FieldForm({ inputLabel: "Imagen", inputType: "file" })}
    <button class="btn-postPadelMatchForm" type="submit">Crear Partido</button>
    `;
    form.addEventListener("submit", postPadelMatch);
};

// form.append(Button({ text: "Crear Partido", fnc: async () => {}, className: "btn-postPadelMatchForm" }));
// ${FieldForm({ inputLabel: "Tipo de Pista", inputType: "text", inputPlaceholder: "Indoor / Outdoor" })}
/*
${FieldForm({ inputLabel: "Día del Partido", inputType: "number", inputPlaceholder: "Del 1 al 31" })}
${FieldForm({ inputLabel: "Mes", inputType: "text", inputPlaceholder: "Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre" })}
${FieldForm({ inputLabel: "Hora del Partido", inputType: "text", inputPlaceholder: "HH:MM" })}
${FieldForm({ inputLabel: "Fecha del Partido", inputType: "date", inputPlaceholder: "DD / MM / YYYY" })}
<label>Tipo de pista</label>
<select>
    <option value="Indoor">Indoor</option>
    <option value="Outdoor">Outdoor</option>
</select>
*/