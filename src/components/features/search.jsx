import {LinkedList} from './linkedList.jsx';

let input; // 사용자가 입력한 string
let templates; // DB 내의 모든 템플릿

const search = (input, templates) => {
    if (!input) {
        return;
    }

    let searchedTemplates = new LinkedList(); // 검색 결과를 저장할 linked list, 초기화하여 이전 검색 결과를 지움

    templates.forEach((template) => {
        // 템플릿 이름, 템플릿 내용으로 검색
        const isItTarget = template.postTitle.toLowerCase().includes(input) || template.postContent.toLowerCase().includes(input);
        if (isItTarget) {
            searchedTemplates.append(template);
        }
    });

    return searchedTemplates;
}