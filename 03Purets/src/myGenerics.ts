const score: Array<number> = []
const names: Array<string> = []

function identityOne(val:boolean | number): boolean | number {
    return val
}//no working

function identityTwo(val: any): any {
    return val
} //no working

function identityThree<Type>(val: Type): Type{
    return val
}//working, almost like any, but once you pss something the type will be locked.

//identityThree("3")

// Same but shorter
function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string,
    type: number
}


//identityFour<Bootle>({brand:"test", type:2}) 

function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    //do operqations
    const myIndex = 4
    return products[myIndex]
}


//

interface Database {

    connection: string,
    username: string,
    password: string
}


function anotherFuntion<T,U extends Database>(val1:T,val2: U):object{
    return {
        val1, 
        val2
    }
}

//anotherFuntion(3, {connection: "a", username: "b", password: "c"})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name:string,
    author: string,
    subject: string
}
class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

