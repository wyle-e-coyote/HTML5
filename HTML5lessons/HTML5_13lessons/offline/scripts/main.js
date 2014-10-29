function initialize() {
    if (supports_html5_storage() == true) {
        // remember default contents of note area
        var defaulthtml = '<div id="note" contenteditable="false">(Enter some text, close your browser and then open this page again.)</div>\n'

        var noteref = document.getElementById("note")

        var mystorage = window.localStorage || (window.globalStorage ? globalStorage[location.hostname] : null)
        if (mystorage) {
            // if there is a note already stored
            if (mystorage.notedata) {
                // re-load it
                noteref.innerHTML = mystorage.getItem('notedata');
            }
            // capture keystrokes and save to local data store
            noteref.onkeyup = function (e) {
                mystorage.notedata = this.innerHTML;
            }
        }
    } else {
        alert('local storage not available with your browser.');
    }
}

function reset_note() {
    noteref.innerHTML = defaulthtml;
    mystorage.notedata = defaulthtml;
}

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] != null;
    } catch (e) {
        return false;
    }
}
