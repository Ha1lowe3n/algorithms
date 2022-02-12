/* 
	TODO: Структуры данных

	-----------------------------------------------
	! Stack 
	Стек следует принципу LIFO (Last In First Out — последним вошел, первым вышел). 
	Если вы сложили книги друг на друга, и захотели взять самую нижнюю книгу, 
	то сначала возьмете верхнюю, затем следующую и т.д. 
	Кнопка «Назад» в браузере позволяет перейти (вернуться) на предыдущую страницу.

	push: добавить новый элемент
	pop: удалить верхний элемент, вернуть его
	peek: вернуть верхний элемент
	length: вернуть количество элементов в стеке
	-----------------------------------------------
*/

//	Собственный стэк
class Stack {
    count: number;
    storage: object;

    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push(value: number) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) return undefined;
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    peek() {
        return this.storage[this.count - 1];
    }

    size() {
        return this.count;
    }
}
const stack = new Stack();

// stack.push(2)
// stack.push(7)
// console.log(stack.peek()); // 7
// stack.pop()
// stack.push(3);
// stack.push(4);
// console.log(stack.peek()); // 4
// stack.pop()
// console.log(stack.peek()); // 3

//	? Написать функцию которая проверяет балансированую скобочную последовательность
//	(){}[]
//	то есть скобка должна иметь закрывающую себя пару
const s1 = "()({[]}())", //	true
    s2 = "{}", //	true
    s3 = "}{", //	false
    s4 = "", //	true
    s5 = "(()", //	false
    s6 = "())", //	false
    s7 = "[(])"; //	false

function isBalanced(str: string): boolean {
    const stack = [];
    const isOpen = (bracket: string) => {
        return bracket === "(" || bracket === "{" || bracket === "[";
    };
    const isPair = (open: string, close: string) => {
        return (
            (open === "(" && close === ")") ||
            (open === "{" && close === "}") ||
            (open === "[" && close === "]")
        );
    };

    for (let i = 0; i < str.length; i++) {
        if (isOpen(str[i])) {
            stack.push(str[i]);
        } else {
            if (isPair(stack[stack.length - 1], str[i])) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced(s1));
console.log(isBalanced(s2));
console.log(isBalanced(s3));
console.log(isBalanced(s4));
console.log(isBalanced(s5));
console.log(isBalanced(s6));
console.log(isBalanced(s7));
