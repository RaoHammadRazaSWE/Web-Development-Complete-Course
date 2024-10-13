function outer() {
    function parent() {
        const a = 4
        const b = 5
        function add() {
            console.log( a+ b);
        }
        return add
    }

    return parent()
    
}


const add1 = outer()

console.dir(add1);

