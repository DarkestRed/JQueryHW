$(document).ready(() => {
    let $addNote = $(".addNote");
    let $notes = $(".notes");
    let $addNoteField = $(".addNoteField");
    let $cancel = $(".cancel");
    let $add = $(".add");
    let $noteName = $(".noteName");
    let $noteText = $(".noteText");
    let $delDialog = $(".delDialog");
    let $delY = $(".delY");
    let $delN = $(".delN");
////////////////////////////////// Добавить/////////////////////////////////////////////
    $addNote.on("click", () => $addNoteField.show(500));
    $cancel.on("click", () => $addNoteField.hide(500));
    $add.on("click", () => {
        $addNoteField.hide(500);
        let note = document.createElement("div");
        note.className = "note";
        note.innerHTML = $noteName.val() +
            "<div class='delNote'>X</div>" +
            "<div class='toNote'>></div>";
        let desc = document.createElement("div");
        desc.className = "desc";
        desc.innerHTML = "<div>" + $noteName.val() + "</div>" +
            "<div>" + $noteText.val() + "</div>" +
            "<div class='close'>Закрыть</div>";
        $notes.append(note, desc);
        $noteName.val("");
        $noteText.val("");
    });
/////////////////////////////////// Просмотреть//////////////////////////////////////////
    $notes.on("click", ".toNote", e => {
        e.target.parentNode.classList.add("s");
        $(".s").next().show(500);
    });
    $notes.on("click", ".close", () => {
        $(".s").removeClass("s");
        $(".desc").hide(500);
    });
//////////////////////////////////// Удалить/////////////////////////////////////////////
    $notes.on("click", ".delNote", e => {
        e.target.parentNode.classList.add("d");
        $delDialog.show(500);
    });
    $delY.on("click", () => {
        $(".d").remove();
        $delDialog.hide(500);
    });
    $delN.on("click", () => {
        $(".d").removeClass("d");
        $delDialog.hide(500);
    });
});