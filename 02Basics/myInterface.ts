interface User3 {
    readonly dbId: number,
    email: string,
    userId: number, 
    googleId?: string,
    //startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string): number
}

interface User3 {
    githubToken: string
}

interface Admin2 extends User {
    tole: string
}

const raquel3: User3 = {
    dbId: 22, 
    email: "example", 
    userId: 2211,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "raquel") => {
        return 10
    },
    githubToken: "hola"
}