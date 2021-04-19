function new_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bg_color = "rgb(" + x + "," + y + "," + z + ")";
    $("body").css("backgroundColor", bg_color);
}

function color_to_pink(element) {
    element.parentNode.firstElementChild.style.backgroundColor = "#ffcfdf";
}

function color_to_yellow(element) {
    element.parentNode.firstElementChild.style.backgroundColor = "#fefdca";
}

function color_to_green(element) {
    element.parentNode.firstElementChild.style.backgroundColor = "#e0f9b5";
}

function color_to_blue(element) {
    element.parentNode.firstElementChild.style.backgroundColor = "#a5dee5";
}

function color_to_white(element) {
    element.parentNode.firstElementChild.style.backgroundColor = "#ffffff";
}

function delete_note(element) {
    if (confirm("Are you sure you want to delete?")) {
        var note_tobe_removed = element.parentNode;
        var parent = note_tobe_removed.parentNode;
        parent.removeChild(note_tobe_removed);
    }
}

function add_note() {
    $("div.container").append(
        '<div class="notes">' +
        '<textarea></textarea>' +
        '<input type="button" onclick="color_to_pink(this)" class="change_color_pink" value="█">' +
        '<input type="button" onclick="color_to_yellow(this)" class="change_color_yellow" value="█">' +
        '<input type="button" onclick="color_to_green(this)" class="change_color_green" value="█">' +
        '<input type="button" onclick="color_to_blue(this)" class="change_color_blue" value="█">' +
        '<input type="button" onclick="color_to_white(this)" class="change_color_white" value="█">' +
        '<input type="button" onclick="delete_note(this)" class="delete" value="🗑️">' +
        '</div>'
    );
}