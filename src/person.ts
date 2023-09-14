import { getInputFromUserOrEnv } from './inputs';


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
		this.name = getInputFromUserOrEnv('NAME', 'Enter your name: ');
		this.age = getInputFromUserOrEnv('AGE', 'Enter your age: ');
		this.heigth = getInputFromUserOrEnv('HEIGTH', 'Enter your height(cm): ');
		this.weigth = getInputFromUserOrEnv('WEIGTH', 'Enter your weight(Kg): ');
		this.gender = getInputFromUserOrEnv('GENDER', 'Enter your gender: ');
		this.activity = getInputFromUserOrEnv('ACTIVITY', 'Please enter sedentary (1), slightly active (2), moderately active (3), very active (4), or extremely active (5): ');
		this.objective = getInputFromUserOrEnv('OBJECTIVE', 'Please enter your objective, loss weight(1), gain weight(2), maintain weight(3): ');
		this.kgToLoseOrgain = getInputFromUserOrEnv('KGTOLOSEORGAIN', 'Please enter number of kg to lose or gain per week: ');
	}; 

	amountOfCalories() {
		try {
			let dailyCalorieExpenditure = 0;
			if (this.gender === 'male') {
				const tmb = (13.75 * this.weigth) + (5 * this.heigth) - (6.76 * this.age) + 66.5;
				if (this.activity === '1') dailyCalorieExpenditure += +(tmb * 1.2).toFixed(2);
				else if (this.activity === '2') dailyCalorieExpenditure += +(tmb * 1.375).toFixed(2);
				else if (this.activity === '3') dailyCalorieExpenditure += +(tmb * 1.55).toFixed(2);
				else if (this.activity === '4') dailyCalorieExpenditure += +(tmb * 1.725).toFixed(2);
				else if (this.activity === '5') dailyCalorieExpenditure += +(tmb * 1.9).toFixed(2);
				else throw new Error('\n' + 'In your activity must choose between 1 and 5');
			} else if (this.gender === 'female') {
				const tmb = (9.56 * this.weigth) + (1.85 * this.heigth) - (4.68 * this.age) + 665;
				if (this.activity === 'sedentary') dailyCalorieExpenditure += +(tmb * 1.2).toFixed(2);
				else if (this.activity === 'slightly active') dailyCalorieExpenditure += +(tmb * 1.375).toFixed(2);
				else if (this.activity === 'moderately active') dailyCalorieExpenditure += +(tmb * 1.55).toFixed(2);
				else if (this.activity === 'very active') dailyCalorieExpenditure += +(tmb * 1.725).toFixed(2);
				else if (this.activity === 'extremely active') dailyCalorieExpenditure += +(tmb * 1.9).toFixed(2);
				else throw new Error('\n' + 'In your activity must choose between 1 and 5');
			} else throw new Error('\n' + 'Must be Male or Female');

			if (this.kgToLoseOrgain < 0) throw new Error('\n' + 'Number of Kg shoud be bigger than zero!');
			const howManyCalories = this.kgToLoseOrgain * 500;
			if (this.objective === '1') {
				const result = dailyCalorieExpenditure - howManyCalories;
				return '\n' + 'In order to lose ' + this.kgToLoseOrgain + ' Kg per week you need to consume '  + result + ' Kcal per day mantaining your level of activity!';
			} else if (this.objective === '2') {
				const result = dailyCalorieExpenditure + howManyCalories;
				return '\n' + 'In order to gain ' + this.kgToLoseOrgain + ' Kg per week you need to consume '  + result + ' Kcal per day mantaining your level of activity!';
			} else if (this.objective === '3') {
				return '\n' + 'In order to maintain your current weigth you have to consume ' + dailyCalorieExpenditure + ' Kcalories';
			} else throw new Error('\n' + 'In you objective you must choose between loss weigth, gain weight or mantain weigth');
		} catch (error: any) {
			return error.message;
		}
	}
}