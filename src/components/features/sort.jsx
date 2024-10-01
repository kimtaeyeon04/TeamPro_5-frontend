import { oriTemplates } from "../domain/MainPage";
import { LinkedList } from "../DataStructure/LinkedList.jsx"

const sort = ( oriTemplates, category, sortOption, filterOption ) => {
    if ( category == null && sortOption == null && filterOption == null ){
        return;
    }

    let sortedTemplates = new LinkedList();
    oriTemplates.forEach((data) => {
        
    });
}