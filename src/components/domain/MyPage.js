class MyPage {
    constructor(pageId, tempalteIds=null, myStack = null) {
        this.pageId = pageId; // pk
        this.tempalteIds = tempalteIds; 
        this.myStack = myStack;
    }

    ownTemplate(templateId) {
        return (this.tempalteIds.includes(templateId)); // Template과 relation 검증
    }
}