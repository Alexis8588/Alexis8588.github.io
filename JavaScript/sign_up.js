function idCheck() {
    // input 이니까 value
    const id = document.getElementById('id').value;
    console.log(id);

    const exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/

    // span 이니까 innerHTML
    const idCheck = document.getElementById('idCheck');
    
    const idLength = id.length;
    if (idLength == 0) {
        idCheck.innerHTML ='필수요소입니다.'
        idCheck.style.color = 'red';
    } else if (idLength < 8 || idLength > 20) {
        idCheck.innerHTML = '8 ~ 20자 이내로 입력하세요'
        idCheck.style.color = 'red';
    } else {
        idCheck.innerHTML = '적절한 아이디입니다.'
        idCheck.style.color = 'green';
    }
}

function pwCheck() {
    const pw = document.getElementById('pw').value;
    console.log(pw);

    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-_!@#])(?=.*\d)[a-zA-Z\d-_!@#]{5,30}$/

    const pwCheck = document.getElementById('pwCheck');
    
    const pwLength = pw.length;

    if (pwLength == 0) {
        pwCheck.innerHTML = '필수요소입니다.';
        pwCheck.style.color = 'red';
    } else {
        if (pw.match(exp)) {
            pwCheck.innerHTML = '적절한 비밀번호입니다.';
            pwCheck.style.color = 'green';
        } else {
            pwCheck.innerHTML = '부적절한 비밀번호입니다.';
            pwCheck.style.color = 'red';
        }
    }

    // if (pwLength == 0) {
    //     pwCheck.innerHTML = '필수요소입니다.';
    //     pwCheck.style.color = 'red';
    // } else if (pw.match(exp)) {
    //     pwCheck.innerHTML = '적합한 비밀번호입니다.';
    //     pwCheck.style.color ='green';
    // } else {
    //     pwCheck.innerHTML = '적합하지 않은 비밀번호입니다.';
    //     pwCheck.style.color = 'red'
    // }

}

function pwCheckResult() {
    const pw = document.getElementById('pw').value;
    const pwResult = document.getElementById('pwResult').value;

    const pwCheckResult = document.getElementById('pwCheckResult');

    if (pw == pwResult) {
        pwCheckResult.innerHTML = '비밀번호가 일치합니다.';
        pwCheckResult.style.color = 'green';
    } else {
        pwCheckResult.innerHTML = '비밀번호가 일치하지 않습니다.';
        pwCheckResult.style.color = 'red';
    }
}

function emailSelect() {
    const emailResult = document.getElementById('emailResult');
    const email = document.getElementById('email').value;
    emailResult.value = email;
}

function email() {
    const email = document.getElementById('em');
    const emailLength = em.length;
    const emailCheck = document.getElementById('emailCheck');

    if (emailLength == 0) {
        emailCheck.innerHTML = '필수항목입니다.'
        emailCheck.style.color = 'red';
    }
}

function record() {

}

function phone() {
    const exp = /^d{3}-\d{4}-\d{4}$/;
    const phone = document.getElementById('phone').value;
    const phoneResult = document.getElementById('phoneResult');
    if (phone.match(exp)) {
        phoneResult.innerHTML = '형식에 맞습니다.'
        phoneResult.style.color ='green';   
    } else {
        phoneResult.innerHTML = '다시 써 주세요'
        phoneResult.style.color ='red';
    }
}

function cal() {
    const cal = document.getElementById('cal').value;
    const calResult = document.getElementById('calResult');
    console.log(cal);

    calResult.innerHTML = cal;
}