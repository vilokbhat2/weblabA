const testNumber=(num)=>new Promise((resolve,reject)=>
{
    if(num>20)
    {
        resolve('The number is greater');
    }
    else
    {
        reject("The number is smaller");
    }
})


function onFullfilled(value)
{
    console.log(value);
}


function onRejected(err)
{
    console.log(err);
}


const promise=testNumber(25);
promise.then(onFullfilled,onRejected)