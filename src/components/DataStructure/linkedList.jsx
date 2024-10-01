class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // 연결 리스트에서 특정 값을 찾는 메서드
    find(value) {
        let currentNode = this.head;
        // head부터 순회하며 value값이 같은지 찾기
        while (currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // tail에 새로운 노드를 추가하는 메서드
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            // 연결 리스트가 비어 있으면 새로운 노드가 head이자 tail이 됨
            this.head = newNode;
            this.tail = newNode;
            this.size++;
        }
        else {
            // 현재 tail 노드의 다음에 새로운 노드 추가
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
        }
    }

    // 연결 리스트에서 특정 값을 삭제하는 메서드
    remove(value) {
        if (this.size === 0) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            size--;
        } else {
            let prevNode = this.head;
            while (prevNode.next.value !== value) {
                prevNode = prevNode.next;
            }

            if (prevNode.next !== null) {
                prevNode.next = prevNode.next.next;
                size--;
            }
        }
    }

}

