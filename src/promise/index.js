const someThingsWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("HEYY!!")
        } else {
            reject("UPPPS");
        }
    });
}

someThingsWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));

const someThingsWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('UPSSS!!!');
            reject(error);
        }
    });
}

someThingsWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));


Promise.all([someThingsWillHappen(), someThingsWillHappen2()])
.then(response => console.log('Array of results ' + response))
.catch(err => console.error(err));