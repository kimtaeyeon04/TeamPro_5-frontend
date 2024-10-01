import {LinkedList} from '../DataStructure/linkedList.jsx';
import dummyData from '../commmon/dummydata/dummydata.jsx'

let input; // 사용자가 입력한 string
// let templates; // DB 내의 모든 템플릿

const search = (input, dummyData) => {
    if (!input) {
        return;
    }

    let searchedTemplates = new LinkedList(); // 검색 결과를 저장할 linked list, 초기화하여 이전 검색 결과를 지움

    dummyData.forEach((post) => {
        // 템플릿 이름, 템플릿 내용으로 검색
        const isItTarget = post.postTitle.toLowerCase().includes(input) || post.postContent.toLowerCase().includes(input);
        if (isItTarget) {
            searchedTemplates.append(post);
        }
    });

    console.log(searchedTemplates);
    return searchedTemplates;
}

input = '제목';
search(input, dummyData);