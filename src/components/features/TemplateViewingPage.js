import {LinkedList} from './linkedList.js';

const searchInput = document.querySelector('input[placeholder="제목, 공유자 이름 검색"]');
const searchBtn = document.querySelector('img[alt="search"]');

let input; // 사용자가 입력한 string
let templates; // DB 내의 모든 템플릿
let searchedTemplates; // 검색 결과를 저장, linked list

window.addEventListener('DOMContentLoaded', function() {
    return templates; // 첫 화면 렌더링시 DB 내의 모든 템플릿 표시
})

searchBtn.addEventListener('click', onClick);
searchInput.addEventListener('input', onInput);

const onClick = () => {
    search();
}

const onInput = (e) => {
    input = e.target.value;
}

const search = () => {
    if (!input) {
        return;
    }

    // searchedTemplates를 초기화하여 이전 검색 결과를 지움
    searchedTemplates = new LinkedList();

    templates.forEach((template) => {
        const isItTarget = template.templateName.toLowerCase().includes(input) || template.owner.toLowerCase().includes(input);
        if (isItTarget) {
            searchedTemplates.append(template);
        }
    });

    return searchedTemplates;
}