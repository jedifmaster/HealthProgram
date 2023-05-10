class Person {
    constructor(readonly name: string, readonly age: number, readonly heigth: number, readonly weigth: number) {
        if(this.name === "" || this.name === undefined ) throw new Error("Invalid Name");
        if(this.age <= 0 || this.age >= 100) throw new Error("invalid age");
        if(this.heigth <= 100 || this.heigth >= 250) throw new Error("Invalid height");
        if(this.weigth <= 30 || this.weigth >= 300) throw new Error("Invalid weight");
    }
}