abstract class TakePhoto {
    constructor(
        publiccameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number {
        //some complex calculation
        return 8
    }

}

//const raquel = new TakePhoto("test","test")

class Instagram2 extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number

    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const raquel = new Instagram("test","test", 3)

raquel.getReelTime()