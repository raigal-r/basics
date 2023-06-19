let score: number | string = 33

score = 44

score = "55"

type Users = {
    id: number;
    username: string
    
}
type Admin = {
    id: number;
    username: string
    
}

let raquel: Users | Admin = {username: "raquel", id: 334}

function getDbId(id: number | string){
    //console.log(`DB id is; ${id}`);
    if (typeof id == "string"){
        id.toLowerCase()

    } else {
        id + 2
    }
}

getDbId(3)
getDbId("3")


//array

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number)[] = [1,2,"3"]


