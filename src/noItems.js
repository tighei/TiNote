import { Elements } from "./index.js";
const notesCard = document.getElementById("notes-card");
const p = document.createElement("p");

export default function noItems() {
    if (notesCard.childElementCount > 0) {
        notesCard.classList.remove("no-items");
        notesCard.classList.add("items");

        if (notesCard.contains(p)) {
            notesCard.removeChild(p);
        }
    } else {
        notesCard.classList.remove("items");
        notesCard.classList.add("no-items");
        p.textContent = "No notes added yet!";
        notesCard.appendChild(p);
    }
}
