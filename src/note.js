// note.js
import noItems from "./noItems.js";
import renderNotes from "./renderNotes.js";
import { Elements } from "./index.js";
export default function saveNote(noteList) {
    document.addEventListener("DOMContentLoaded", function () {
        const save = document.querySelector(".submit-btn");

        save.addEventListener("click", function (e) {
            if (!Elements.noteArea.value) return e.preventDefault();
            const currentDate = new Date();

            const options = {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
            };
            let date = currentDate.toLocaleString("en-us", options);

            const note = {
                title: Elements.noteTitle.value,
                content: Elements.noteArea.value,
                date: date,
                tag: Elements.tag.value,
            };

            noteList.add(note, function () {
                renderNotes(noteList);
                noItems();
            });

            // Clear input fields after adding a note
            (Elements.noteArea.value = ""),
                (Elements.tag.value = ""),
                (Elements.noteTitle.value = "New Note");
            noItems();
        });
        noItems();
    });
}
