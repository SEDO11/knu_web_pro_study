var editor = document.getElementById('editor');
var btnBold = document.getElementById('btn-bold');
var btnItalic = document.getElementById('btn-italic');
var btnUnderline = document.getElementById('btn-underline');
var btnStrike = document.getElementById('btn-strike');
var btnOrderedList = document.getElementById('btn-ordered-list');
var btnUnorderedList = document.getElementById('btn-unordered-list');

//  contenteditable 속성을 가진경우
content = document.querySelector("[contenteditable]");

document.addEventListener("DOMContentLoaded", function () {

    // @breif 더블클릭시 실행
    content.addEventListener("dblclick", function (event) {

        // contenteditable 속성이 수정 불가인 경우 실행( false )
        if (content.isContentEditable == false) {
            // @details 편집 가능 상태로 변경
            content.contentEditable = true;
            // @details 포커스 지정
            content.focus();
        }

        // contenteditable 속성이 수정 가능인 경우 실행( true )
        else {
            // 편집 불가 상태로 변경
            content.contentEditable = false;
            content.style.border = "0px";
        }
    });
});

function bold() {
    setStyle('bold');
}
function italic() {
    setStyle('italic');
}
function underline() {
    setStyle('underline');
}
function strike() {
    setStyle('strikeThrough');
}
function orderedlist() {
    setStyle('insertOrderedList');
}
function unorderedlist() {
    setStyle('insertUnorderedList');
}

function setStyle(style) {
    document.execCommand(style); //글자 스타일 변경
    focusEditor();
}

// 버튼 클릭 시 에디터가 포커스를 잃기 때문에 다시 에디터에 포커스를 해줌 
function focusEditor() {
    editor.focus({
        preventScroll: true
    });
}

//글자 스타일 변경
function isStyle(style) {
    return document.queryCommandState(style);
}