
// (element,index,array)

Array.prototype.myFilter = function (callback){

    let res = []

    for(let i=0;i<this.length;i++){

        if(i in this){
            let element = this[i]

            if(callback(element,i,this)){
                res.push(element)
            }
        }
    }

    return res
}

let arr = [2,5,19,40,71,33]

const output = arr.myFilter((x)=>x%2===0)

console.log(output);
