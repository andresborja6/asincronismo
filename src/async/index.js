const doSomeThingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Do Something Async'), 3000) : reject(new Error('Test Error'))
    })
}

const doSomeThing = async () => {
    const something = await doSomeThingAsync();
    console.log(something);
}
console.log("before");
doSomeThing();
console.log("After")

const anotherFunction = async () => {
    try{
        const something = await doSomeThingAsync();
        console.log(something);
    }
    catch (error) {
        console.error(error);
    }
}

console.log("before 1");
anotherFunction();
console.log("After 2")