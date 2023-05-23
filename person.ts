import readlineSync from 'readline-sync';

export default class Person {
    name: any;
    age: any;
    heigth: any;
    weigth: any;
    gender: any;
    activity: any;
    objective: any;
    kgToLoseOrgain: any;

    constructor() {
        this.name = readlineSync.question('Enter your name: ');
        this.age = readlineSync.question('Enter your age: ');
        this.heigth = readlineSync.question('Enter your height: ');
        this.weigth = readlineSync.question('Enter your weight: ');
        this.gender = readlineSync.question('Enter male or female: ');
        this.activity = readlineSync.question(
          'Please enter sedentary, slightly active, moderately active, very active, or extremely active: '
        );
        this.objective = readlineSync.question('Please enter your objective: loss, gain, or maintain: ');
        this.kgToLoseOrgain =readlineSync.question('Please enter number of kg to loss or gain: ')
    }; 

    amountOfCalories(){
        try {
            let dailyCalorieExpenditure = 0

            if (this.gender === "male") {
                let tmb = (13.75 * this.weigth) + (5 * this.heigth) - (6.76 * this.age) + 66.5
                if (this.activity === "sedentary") dailyCalorieExpenditure += +(tmb * 1.2).toFixed(2);
                else if (this.activity === "slightly active") dailyCalorieExpenditure += +(tmb * 1.375).toFixed(2)
                else if (this.activity === "moderately active") dailyCalorieExpenditure += +(tmb * 1.55).toFixed(2);
                else if (this.activity === "very active") dailyCalorieExpenditure += +(tmb * 1.725).toFixed(2);
                else if (this.activity === "extremely active") dailyCalorieExpenditure += +(tmb * 1.9).toFixed(2);
            }
            if (this.gender === "female") {
                let tmb = (9.56 * this.weigth) + (1.85 * this.heigth) - (4.68 * this.age) + 665;
                if (this.activity === "sedentary") dailyCalorieExpenditure += +(tmb * 1.2).toFixed(2)
                else if (this.activity === "slightly active") dailyCalorieExpenditure += +(tmb * 1.375).toFixed(2);
                else if (this.activity === "moderately active") dailyCalorieExpenditure += +(tmb * 1.55).toFixed(2);
                else if (this.activity === "very active") dailyCalorieExpenditure += +(tmb * 1.725).toFixed(2);
                else if (this.activity === "extremely active") dailyCalorieExpenditure += +(tmb * 1.9).toFixed(2);
            }
            if(this.kgToLoseOrgain < 0) throw new Error("Number of Kg shoud be bigger than zero!")
            if (this.objective === "loss") {
                let howManyCalories = this.kgToLoseOrgain * 500;
                let result = dailyCalorieExpenditure - howManyCalories;
                return "\n" + "In order to lose " + this.kgToLoseOrgain + " Kg per week you need to consume "  + result + " Kcal per day mantaining your level of " + this.activity + " activity!"
            } 
            if (this.objective === "gain"){
                let howManyCalories = this.kgToLoseOrgain * 500;
                let result = dailyCalorieExpenditure + howManyCalories;
                return "\n" + "In order to gain " + this.kgToLoseOrgain + " Kg per week you need to consume "  + result + " Kcal per day mantaining your level of " + this.activity + " activity!"
            }
            if (this.objective === "maintain"){
                return "\n" + "In order to maintain your current weigth you have to consume " + dailyCalorieExpenditure + " Kcalories";
            }
        } catch (error: any) {
            return error.message
        }
    }
}