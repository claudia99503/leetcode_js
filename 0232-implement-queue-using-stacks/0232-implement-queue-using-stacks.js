var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};
/*
함수 MyQueue():
    stack1을 빈 리스트로 초기화
    stack2을 빈 리스트로 초기화
/*

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};
/*
함수 push(x):
    x를 stack1에 푸시
*/

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
};
/*
함수 pop():
    만약 stack2가 비어있다면:
        stack1이 빌 때까지:
            stack1에서 stack2로 최상단 요소를 이동
    stack2에서 최상단 요소를 팝하고 반환
*/

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2[this.stack2.length - 1];
};
/*
함수 peek():
    만약 stack2가 비어있다면:
        stack1이 빌 때까지:
            stack1에서 stack2로 최상단 요소를 이동
    stack2의 최상단 요소를 반환 (팝하지 않음)
*/

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
};
/*
함수 empty():
    stack1과 stack2가 모두 비어있으면 True 반환
    그렇지 않으면 False 반환
*/

// Example usage:
const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2]
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */