import {LinkedList} from '../DataStructure/linkedList.jsx';
import { oriPortfolios, oriUsers } from '../domain/startProgram.js';

const search = (input) => {
    if (!input) {
        return;
    }

    let searchedPortfolios = new LinkedList(); // 검색 결과를 저장할 linked list, 초기화하여 이전 검색 결과를 지움

    oriPortfolios.forEach((pofol) => {
        // 포트폴리오 이름, 포트폴리오 공유자의 닉네임으로 검색
        const isItTarget = pofol.title.toLowerCase().includes(input) || oriUsers.get(pofol.owner).nickname.toLowerCase().includes(input);
        if (isItTarget) {
            searchedPortfolios.append(pofol);
        }
    });

    searchedPortfolios.print();
    return searchedPortfolios;
}

export default search;