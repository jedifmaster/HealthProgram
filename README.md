# HealthProgram
Health program who is going to help people to lose or gain or maintain weight

# IMPORTANT INFO!!!
- KEEP IN MIND THAT THIS PROGRAM IS MERELY INFORMATIVE!!
- IT WAS CREATED FOR EDUCATIONAL PURPOSES ONLY AND IS NOT A MEDICAL PROGRAM, SO THE AIM IS NOT TO REPLACE ANY MEDICAL OPINION!!
- IF YOU REALLY NEED HELP OR ARE THINKING ABOUT LOSING OR GAINING OR CONTROLLING YOUR WEIGHT THROUGH THE CALORIC COUNTING METHOD, PLEASE, FOR YOUR HEALTH, SEEK EXPERT HELP!!

# Specs of the project
This project is created in typescript, so in order to run it on your machine, you need to have installed:

- NPM
- nodeJS

After that and in order to install all the dependicies needed and specified on the package.json for the project you need to run:

 - npm install

Then you have two options to run it:

	1º transpile the code in typescript to javascript runing the command:
		- npx tsc
		- a folder named transpilateCode will appear on the repo with the files in js, perform the next commands:
			- cd transpilateCode
			- node main.js
	
	2º run the code in typescript relly easy, running the next commands:
		- cd src
		- npx ts-node main.ts

# How it works
Some questions will be prompted to you, you just need to answer it: and the a result will be prompted to you.
- Enter your name:
- Enter your age: 
- Enter your height(cm): 
- Enter your weight(Kg): 
- Enter you gender: 
- Please enter sedentary(1), slightly active(2), moderately active(3), very active(4), or extremely active(5): 
- Please enter your objective, loss weigth(1), gain weigth(2) , maintain weigth(3): 
- Please enter number of kg to loss or gain per week: 

The a result will be prompted to you:

- In order to lose xxx Kg per week you need to consume xxxx Kcal per day mantaining your level of activity!