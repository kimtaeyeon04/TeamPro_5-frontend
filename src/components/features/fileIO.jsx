const fs = require('fs');
const path = require('path');

// filePath로 입력된 파일 뒤에 이어서 string을 입력한다.
const appendStringToFile = (filePath, string) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('파일을 읽는 중 오류가 발생했습니다:', err);
            return;
        }

        // 기존 데이터에 새로운 문자열 추가
        const newData = data + '\n' + stringToAdd;

        // 파일 다시 쓰기
        fs.writeFile(filePath, newData, 'utf8', (err) => {
            if (err) {
                console.error('파일을 저장하는 중 오류가 발생했습니다:', err);
            } else {
                console.log('문자열이 성공적으로 추가되었습니다.');
            }
        });
    });
}

// filePath로 입력된 파일 뒤에서 numCharsToRemove만큼 삭제한다.
const removeFromFileEnd = (filePath, numCharsToRemove) => {
    // 파일 읽기
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('파일을 읽는 중 오류가 발생했습니다:', err);
            return;
        }

        // 파일 크기에서 numCharsToRemove만큼 잘라내기
        const newData = data.slice(0, -numCharsToRemove);

        // 잘라낸 데이터를 다시 파일에 쓰기
        fs.writeFile(filePath, newData, 'utf8', (err) => {
            if (err) {
                console.error('파일을 쓰는 중 오류가 발생했습니다:', err);
            } else {
                console.log(`${numCharsToRemove}글자가 성공적으로 삭제되었습니다.`);
            }
        });
    });
};

export { appendStringToFile, removeFromFileEnd };