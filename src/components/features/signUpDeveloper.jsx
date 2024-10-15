import { oriUsers } from "../domain/startProgram";
import { User } from "../domain/User";
import { appendStringToFile, removeFromFileEnd } from "../features/fileIO";

let idCheck = false;
let emailCheck = false;
let phoneNumCheck = false;

const idSignUpDeveloper = (name, birthday, id, password, rePassword, phoneNumber) => {
    if (!isIdChecked()) return;
    if (!isPassword(password, rePassword)) return;

    // oriUsers 링크드 리스트와 userInfo.jsx에 유저 추가
    // oriUsers의 마지막 유저로부터 pageId를 얻기 위해
    const lastId = Array.from(oriUsers.key()).pop();
    const lastUser = oriUsers.get(lastId);
    // user의 Id는 본인이 설정한 것, MyPage 연결로의 id는 숫자로 부여한다.
    pageId = (lastUser.pageId) + 1;
    const user = new User(id, pageId, password, name, phoneNumber, birthday);
    oriUsers.set(id, user);

    // userInfo.jsx에 해당 유저를 추가한다.
    const filePath = path.join(__dirname, '..', 'commmon', 'dummydata', 'userInfo.jsx');
    const string = `
        {
            id: "${id}",
            pageId: ${pageId},
            password: "${password}",
            name: "${name}",
            phoneNumber: "${phoneNumber}",
            birthday: "${birthday[0]}-${birthday[1]}-${birthday[2]}",
            email: "",
            nickname: "",
            link: "",
            career: "없음",
            education: ""
        }`;
    removeFromFileEnd(filePath, 3);
    appendStringToFile(filePath, `,${string}\n];`);
}

const emailSighUpDeveloper = (name, birthday, email, password, rePassword, phoneNumber) => {
    if (!isEmailChecked()) reutrn;
    if (!isPassword(password, rePassword)) return;

    // oriUsers 링크드 리스트와 userInfo.jsx에 유저 추가
    // oriUsers의 마지막 유저로부터 pageId를 얻기 위해
    const lastId = Array.from(oriUsers.key()).pop();
    const lastUser = oriUsers.get(lastId);
    // user의 Id는 본인이 설정한 것, MyPage 연결로의 id는 숫자로 부여한다.
    pageId = (lastUser.pageId) + 1;

    // 아이디를 생성하지 않았으므로 랜덤 문자열 생성
    // 기존 아이디와 비교하여 존재하지 않는 경우에만 설정
    let randomId = getRandomId();
    while (onlyIsIdExists(randomId)) randomId = getRandomId();

    const user = new User(randomId, pageId, password, name, phoneNumber, birthday, email);
    oriUsers.set(randomId, user);

    // userInfo.jsx에 해당 유저를 추가한다.
    const filePath = path.join(__dirname, '..', 'commmon', 'dummydata', 'userInfo.jsx');
    const string = `
        {
            id: "${randomId}",
            pageId: ${pageId},
            password: "${password}",
            name: "${name}",
            phoneNumber: "${phoneNumber}",
            birthday: "${birthday[0]}-${birthday[1]}-${birthday[2]}",
            email: "${email}",
            nickname: "",
            link: "",
            career: "없음",
            education: ""
        }`;
    removeFromFileEnd(filePath, 3);
    appendStringToFile(filePath, `,${string}\n];`);
}

const isIdExists = (id) => {
    // 유저 DB에 이미 해당 아이디가 존재하면 true 반환, 없으면 false
    oriUsers.forEach((value, key) => {
        if (key === id) {
            alert('이미 사용 중인 아이디입니다.');
            return;
        }
    });

    // 아이디 설정 조건에 들어맞는가
    // 영소문, 숫자, _, . 으로 이루어진 6자 이상 20자 이하
    const idPattern = /^[a-z0-9_.]{6,20}$/;
    const idMatcher = id.match(idPattern);
    if (!idMatcher) {
        alert('아이디는 영소문, 숫자, _, .만을 이용하여 6자 이상, 20자 이하로 입력하세요.');
        return;
    }

    idCheck = true;
}

const isEmailExists = (email) => {
    // 유저 DB에 이미 해당 이메일이 존재하면 true 반환, 없으면 false
    oriUsers.forEach((value, key) => {
        if (value.email === email) {
            alert('이미 계정이 존재합니다.');
            return;
        }
    });

    // 임의처리한다.
    emailCheck = true;
}

const isPhoneNumExists = (phoneNumber) => {
    // 유저 DB에 이미 해당 핸드폰 번호가 존재하면 true 반환, 없으면 false
    oriUsers.forEach((value, key) => {
        if (value.phoneNumber === phoneNumber) {
            alert('이미 계정이 존재합니다.');
            return;
        }
    });

    // 이것은 번호인증을 실제로 진행할 수 없으므로 임의 처리하는 것이다.
    // 이통통신기(010-XXXX-XXXX)의 형태를 갖추었는가
    const firstThree = phoneNumber.slice(0, 4);
    const mid = phoneNumber.slice(8, 9);
    const second = phoneNumber.slice(4, 8);
    const last = phoneNumber.slice(9, 13);
    const numPattern = /^[0-9]$/;
    if (firstThree !== "010-" || mid !== "-" || !(second.match(numPattern)) || !(last.match(numPattern))) {
        alert('올바른 전화번호를 입력하세요.');
        return;
    }

    phoneNumCheck = true;
}

const onlyIsIdExists = (id) => {
    oriUsers.forEach((value, key) => {
        if (key === id) {
            return true;
        }
    });
    return false;
}


// 아이디나 전화번호 중복 체크 후에 입력값이 변하면 다시 체크해야 하므로
const changedId = () => idCheck = false;
const changedPhoneNumber = () => phoneNumCheck = false;

// 중복 체크가 되어 있지 않으면 실행지 않는다
const isIdChecked = () => {
    if (idCheck === false) {
        alert('아이디 중복 체크를 해야합니다.');
        return 0
    }
    if (phoneNumCheck === false) {
        alert('전화번호 중복 체크를 해야 합니다.');
        return 0;
    }
    return 1;
}

const isEmailChecked = () => {
    if (emailCheck === false) {
        alert('이메일 중복 체크를 해야 합니다.');
        return 0;
    }
    if (phoneNumCheck === false) {
        alert('전화번호 중복 체크를 해야 합니다.');
        return 0;
    }
    return 1;
}

const isPassword = (password, rePassword) => {
    // 비밀번호와 비밀번호 확인란이 동일한가
    if (password !== rePassword) {
        alert('비밀번호와 재입력한 비밀번호가 일치하지 않습니다');
        return 0;
    }

    // 비밀번호가 조건에 들어맞는가
    // 영문+특문+숫자로 12자 이상, 20자 이하
    const passPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{12,20}$/;
    const passMatcher = password.match(passPattern);
    if (!passMatcher) {
        alert('비밀번호는 영문+특수문자+숫자로 12자 이상, 20자 이하로 입력하세요.');
        return 0;
    }
    return 1;
}

const generateRandomString = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789_.';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

const getRandomId = () => {
    // 길이를 6에서 20 사이로 랜덤하게 설정
    const length = Math.floor(Math.random() * (20 - 6 + 1)) + 6;
    return generateRandomString(length);
}