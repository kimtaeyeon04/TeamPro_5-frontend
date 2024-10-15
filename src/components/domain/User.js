class User {
    constructor(id, password, name, email, nickname=null, link=null, career=null, education=null) {
        this.id = id; // pk
        this.password = password;
        this.name = name;
        this.email = email;
        this.nickname = nickname;
        this.link = link;
        this.career = career;
        this.education = education;
    }

    ownPage(myPage) {
        return myPage.pageId === this.pageId; // Mypage와 relation 검증
    }
}

export default User;