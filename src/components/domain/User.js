class User {
    constructor(id, pageId, name, email, nickname=null, link=null) {
        this.id = id; // pk
        this.pageId = pageId; // fk to MyPage
        this.name = name;
        this.email = email;
        this.nickname = nickname;
        this.link = link;
    }

    ownPage(myPage) {
        return myPage.pageId === this.pageId; // Mypage와 relation 검증
    }
}