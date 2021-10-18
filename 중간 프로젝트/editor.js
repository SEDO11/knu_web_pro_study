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

        // @details contenteditable 속성이 수정 불가인 경우 실행( false )
        if (content.isContentEditable == false) {

            // @details 편집 가능 상태로 변경
            content.contentEditable = true;

            // @details 포커스 지정
            content.focus();
        }

        // @details contenteditable 속성이 수정 가능인 경우 실행( true )
        else {

            // 편집 불가 상태로 변경
            content.contentEditable = false;
            content.style.border = "0px";
        }
    });
});

btnBold.addEventListener('click', function () {
    setStyle('bold');
});
btnItalic.addEventListener('click', function () {
    setStyle('italic');
});
btnUnderline.addEventListener('click', function () {
    setStyle('underline');
});
btnStrike.addEventListener('click', function () {
    setStyle('strikeThrough')
});
btnOrderedList.addEventListener('click', function () {
    setStyle('insertOrderedList');
});
btnUnorderedList.addEventListener('click', function () {
    setStyle('insertUnorderedList');
});
editor.addEventListener('keydown', function () {
    checkStyle();
});
editor.addEventListener('mousedown', function () {
    checkStyle();
});

function setStyle(style) {
    document.execCommand(style); //글자 스타일 변경
    focusEditor();
    checkStyle();
}

// 버튼 클릭 시 에디터가 포커스를 잃기 때문에 다시 에디터에 포커스를 해줌 
function focusEditor() {
    editor.focus({
        preventScroll: true
    });
}

function checkStyle() {
    if (isStyle('bold')) {
        btnBold.classList.add('active');
    } else {
        btnBold.classList.remove('active');
    } if (isStyle('italic')) {
        btnItalic.classList.add('active');
    } else {
        btnItalic.classList.remove('active');
    } if (isStyle('underline')) {
        btnUnderline.classList.add('active');
    } else {
        btnUnderline.classList.remove('active');
    } if (isStyle('strikeThrough')) {
        btnStrike.classList.add('active');
    } else {
        btnStrike.classList.remove('active');
    } if (isStyle('insertOrderedList')) {
        btnOrderedList.classList.add('active');
    } else {
        btnOrderedList.classList.remove('active');
    } if (isStyle('insertUnorderedList')) {
        btnUnorderedList.classList.add('active');
    } else {
        btnUnorderedList.classList.remove('active');
    }
}

//글자 스타일 변경
function isStyle(style) {
    return document.queryCommandState(style);
}