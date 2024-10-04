import userInfo from '../commmon/dummydata/userInfo.jsx';

let users = new Map();
users.set(userInfo[0].Id, userInfo[0]);

// 이름을 사용자가 입력한 값으로 바꾸는 메소드
// userId : 닉네임 or 이름 변경 버튼을 누른 사용자의 id
// input : 사용자가 입력한 string
const rename = (userId, input) => {
    if (!input) {
        console.log('값이 입력되지 않음');
    }

    let user = users.get(userId); // 맵에서 key값을 대조하여 사용자의 정보를 찾음

    if (user.name === input) {
        console.log("같은 값이 입력됨");
    } else {
        user.name = input;
        console.log(user);
        users.set(userId, user); // 새로운 정보로 맵 업데이트
    }
};