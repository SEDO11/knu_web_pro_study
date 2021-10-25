// contenteditable 속성을 가진경우
// @breif contenteditable 속성을 가진경우

contents = document.getElementsByClassName("[contenteditable]");

document.addEventListener("DOMContentLoaded", function () {

    // @breif rowColumn 클래스의 갯수 만큼 반복문을 실행한다.

    Array.from(contents).forEach(function (content) {

        // @breif 마우스로 해당영역을 더블클릭 한경우
        content.addEventListener("dblclick", function (event) {

            if (content.isContentEditable == false) {
                // @details 편집 가능 상태로 변경
                content.contentEditable = true;
                // @details CSS 효과 추가
                content.style.border = "1px thick double #FFB6C1";
                // @details 포커스 지정
                content.focus();
            }

        });

        content.contentEditable = false;
        content.style.border = "0px";
    });

});