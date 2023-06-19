function addTwo (num: number): number{
    return num + 2
}

function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string, email:string, password:number, isPaid: boolean){

}

let loginUser = (name:string, email:string, isPais:boolean = false) => {}
const getHello = (s:string):string => {
    return ""
}

let myValue = addTwo(5)
getUpper("hitesh")
signUpUser("A", "B",123, true )
loginUser("A", "B")

const heros = ["thor","spiderman","ironman"]

heros.map((hero):string => {
    return `hero is ${hero}`
})

function consoleError(errmsg:string): void {
    console.log(errmsg);
}
function handleError(errmsg:string): never {
    throw new Error(errmsg);
}


export{}