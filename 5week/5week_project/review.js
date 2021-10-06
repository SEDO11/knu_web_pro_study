//내용에 아무것도 없을 때
function warnEmpty() {
    alert("내용이 입력되지 않았습니다.")
}
//현재시간 슬라이싱
function dateToString(date) {
    const dateString = date.toISOString();
    const dateToString = dateString.substring(0, 10) +" "+ dateString.substring(11, 16);
    return dateToString;
}
//리뷰 작성
function submitComment() {
    //이름, 리뷰 내용을 html에서 받아옴
    const usernameEL = document.getElementById("username");
    const newcommentEL = document.getElementById("new-review");
    //가져온 내용의 공백을 제거한 후 저장
    const username = usernameEL.value.trim();
    const newcomment = newcommentEL.value.trim();

    if(newcomment){
        const dateEL = document.createElement('div');
        dateEL.classList.add("comment-data");
        const dateString = dateToString(new Date());
        dateEL.innerText = "시간: " + dateString;

        const nameEL = document.createElement('div');
        nameEL.classList.add('comment-name');
        nameEL.innerText = "유저: " + username;

        const contentEL = document.createElement('div');
        contentEL.classList.add('comment-content');
        contentEL.innerText = "내용: " + newcomment;

        const commentEL = document.createElement('div');
        commentEL.classList.add('comment-row');
        commentEL.appendChild(dateEL);
        commentEL.appendChild(nameEL);
        commentEL.appendChild(contentEL);

        document.getElementById('comments').appendChild(commentEL);
        newcommentEL.value = "";

        const countEL = document.getElementById('comments-count');
        const count = countEL.innerText;
        countEL.innerText = parseInt(count) + 1;
    }
    else warnEmpty();
}