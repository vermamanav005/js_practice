//shadowing,typeof,check undef,deconstructive assignment...
let num =13 

let func = ()=> { let num =14
    console.log(num)
}

func()
//----------
console.log(typeof(num))
//----------
let check_undef = (temp)=> {return (temp === undefined )}

console.log(check_undef(num))

//----------

const arr = [1,2,3,4]

const[a,b,c,d] = arr

console.log(a)



