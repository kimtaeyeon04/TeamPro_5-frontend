// 메인 페이지가 작동(=서버에 시연자가 접속)하면
// 1. 모든 개발자 유저 정보를 hashmap 등에 등록한다.
// 2. 모든 채용자 유저 정보를 hashmap 등에 등록한다.
// 3. 모든 공유된 템플릿 정보를 hashmap에 등록한다.
// ... 수정할 때마다 업데이트 필요

// 이미 저장되어 있는 것을 읽어들이지 않는다면, 프로그램을 실행시킬 때마다 데이터를 추가해야 한다.
// 1. 프로그램을 실행하면 외부 파일에서 정보를 불러와 저장한다.
// 2. 추가되는 유저, 템플릿 등은 바로바로 '이미 있는 데이터' 파일에 추가한다.
import Template from "../domain/Template";
import { templateInfo } from "../commmon/dummydata/templateInfo"; // 저장된 모든 템플릿 정보
// import { userInfo } from "../commmon/dummydata/userInfo"; // 저장된 모든 유저 정보

// 유저에게 공유되는 템플릿들
let oriTemplates = new Map();
templateInfo.forEach((data) => {
    template = new Template(data.templateId);
    oriTemplates.set(data.templateId, template);
});