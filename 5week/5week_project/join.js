var nameData = new Array();
var idData = new Array();
var pwData = new Array();

window.addEventListener('load', function () {
    let signup = document.querySelector('#btnJoin');

    //signup버튼을 클릭했을때
    signup.addEventListener('click', function () {
        // 아이디와 비번,성별,취미,생일,나이,이메일,메모 객체 셋팅  
        let user = document.querySelector('user');
        let id = document.querySelector('#id');
        let pw1 = document.querySelector('#pw1');
        let pw2 = document.querySelector('#pw2');

        // 전체 검사
        // 아이디가 공백이거나 4글자 미만이면
        if (id.value == '' || id.value.length < 4) {
            alert('아이디는 4자리 이상 이어야 합니다.');
            //id포커스
            id.focus();
            return;
            // 비밀번호가 4자리 미만이거나 숫자가 아닐때
        } else if (pw1.value.length < 4 || isNaN(pw1.value)) {
            alert('비번 번호는 4자리 이상이어야 합니다.');
            //비밀번호 포커스
            pw1.focus();
            return;
            // 비밀번호가 처음입력한 값과 다를시
        } else if (pw1.value != pw2.value) {
            alert('패스워드가 일치하지 않습니다.');
            pw2.focus();
            return;
            // 옳을때
        } else {
            setdata(user, id, pw1);
        }
    });
});

function setdata(name, id, pw) {
    nameData.push(name);
    idData.push(id);
    pwData.push(pw);
}

