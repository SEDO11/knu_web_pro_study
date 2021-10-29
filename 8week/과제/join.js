//숫자, 영 대 소문자, 특수문자, 한글 체크
var pattern_num = /[0-9]/;	// 숫자 
var pattern_eng = /[a-zA-Z]/;	// 영어 대, 소문자 
var pattern_spc = /[-~!@#$%^&*()_+|<>?:{}]/; // 특수문자
var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글

//내용 입력 확인
function non(e) {
    var worker = new Worker("worker.js");

    worker.postMessage("");
    worker.onmessage = function (event) {
        var msg = "Worker: " + event.data;
        alert(msg);
    }
}

//이름 확인
function nameCheck(e) {
    var pattern_kor_name = /[가-힣]/; // 한글
    var name = e.value.toString();
    //한글만 입력
    if (!(pattern_num.test(name)) && !(pattern_eng.test(name)) && !(pattern_spc.test(name)) && (pattern_kor_name.test(name))) {
        if (name.length <= 6 && name.length >= 2) {
            alert('이름이 제대로 입력되었습니다.');
        } else {
            alert('이름은 2자리 이상,  6자리 이하어야 합니다.');
        }
    } else {
        alert("이름을 제대로 입력해주세요");
    }
}

//나이 확인
function ageCheck(e) {
    var age = e.value.toString();
    //숫자만 입력
    if ((pattern_num.test(age)) && !(pattern_eng.test(age)) && !(pattern_spc.test(age)) && !(pattern_kor.test(age))) {
        if (age.length < 4 && age > 0 && age < 135) {
            alert('나이가 제대로 입력되었습니다.');
        } else { //기네스북에 등재된 최고령 나이 134
            alert('나이는 최소 1살부터 최대 134살 까지 입력 가능합니다.');
        }
    } else {
        alert("숫자만 입력 가능합니다.");
    }
}

//아이디 확인
function idCheck(e) {
    var id = e.value.toString();
    var pattern_eng_small = /[a-z]/;
    //숫자, 영어만 입력
    if ((pattern_eng_small.test(id)) && !(pattern_spc.test(id)) && !(pattern_kor.test(id))) {
        if ((id.length >= 4 && id.length <= 10) || pattern_num.test(id)) {
            alert('아이디가 제대로 입력되었습니다.');
        } else {
            alert('아이디는 4자리 이상 10자리 이하로 입력해야 합니다.');
        }
    } else {
        alert("아이디는 최소 4자리이상 숫자, 영어 소문자만 입력 가능합니다.");
    }
}

//비밀번호 확인
function pwCheck(e) {
    var pw = e.value.toString();
    var pattern_eng_small = /[a-z]/;
    //숫자, 영어, 특수문자만 입력
    if ((pattern_num.test(pw)) && (pattern_eng_small.test(pw)) && (pattern_spc.test(pw)) && !(pattern_kor.test(pw))) {
        if (pw.length >= 6 && pw.length <= 14) {
            alert('이메일이 제대로 입력되었습니다.');
        } else {
            alert('비밀번호는 6자리 이상 14자리 이하로 입력해야 합니다.');
        }
    } else {
        alert("비밀번호는 6자리 이상 14자리 이하로 숫자, 영어 소문자, 특수문자조합으로 이루어야 합니다.");
    }
}

//이메일 확인
function mailCheck(e) {
    var mail = e.value.toString();
    var pattern_spc_at = /[@]/; //골뱅이
    //숫자, 영어, 특수문자만 입력
    if (((pattern_num.test(mail)) || (pattern_eng.test(mail))) && (pattern_spc_at.test(mail)) && !(pattern_kor.test(mail))) {
        if (mail.length >= 10 && mail.length <= 30) {
            if (mail.slice(mail.length - 4) === ".com" || mail.slice(mail.length - 4) === ".net") {
                alert('이메일이 제대로 입력되었습니다.');
            } else {
                alert('이메일형식이 옳바르지 않습니다. \n(.com or .net이 아닙니다.)');
            }
        } else {
            alert('이메일은 10자리 이상 30자리 이하로 입력해야 합니다.');
        }
    } else {
        alert("이메일은 숫자, 영어 대 소문자, @으로 이루어야 합니다.");
    }
}

//전화번호 확인
function pnCheck(e) {
    var pn = e.value.toString();
    //숫자만 입력
    if ((pattern_num.test(pn)) && !(pattern_eng.test(pn)) && !(pattern_spc.test(pn)) && !(pattern_kor.test(pn))) {
        if (pn.length < 11) {
            alert('전화번호는 11자리이어야 합니다.');
        } else {
            alert('전화번호가 제대로 입력되었습니다.');
        }
    } else {
        alert("숫자만 입력 가능합니다.");
    }
}

//입력하지 않은 값 확인 및 출력
function nullCheck() {
    var name = document.getElementById('userName').value;
    var age = document.getElementById('age').value;
    var id = document.getElementById('userId').value;
    var pw = document.getElementById('pw').value;
    var address = document.getElementById('addressList').value;
    var tel = document.getElementById('tel').value;

    var msg = "";

    if (name === "") {
        msg += "이름, ";
    }
    if (age === "") {
        msg += "나이, ";
    }
    if (id === "") {
        msg += "아이디, ";
    }
    if (pw === "") {
        msg += "비밀번호, ";
    }
    if (address === "") {
        msg += "주소, ";
    }
    if (tel === "") {
        msg += "전화, ";
    }
    if (msg === "") {
        alert('모든 정보가 확인 되었습니다.');
    } else {
        alert(msg + '입력하지 않았습니다.');
    }
}