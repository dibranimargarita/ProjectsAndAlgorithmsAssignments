class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    display() {
        var listStr = "";
        if(this.head == null) {
            return "Empty list";
        }
        listStr += this.head.value;
        runner = this.head.next;
        while (runner != null) {
            listStr += ", " + runner.value;
            runner = runner.next;
        }
        return listStr;
    }
}