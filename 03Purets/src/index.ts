// class User {
//     email: string
//     name: string
//     private readonly city: string = "Barcelona"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//         this.city
//     }
// }

class User {

    protected _courseCount = 1 //available in the class and the ones that inherit

    readonly city: string = "Barcelona"
    constructor(
        public email: string,
        public name: string,
        private userId: number
        ){
    }
    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail():string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class subUser extends  User {
    //not adquire the private properties

    isFamily: boolean = true
    changeCourseCounte(){
        this._courseCount = 4
    }
}

//const raquel = new User("r@r.com", "raquel");
//raquel.city = "Barcelona";

//raquel.deleteToken()  //Not allowed