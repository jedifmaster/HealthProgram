import readlineSync from 'readline-sync';
require('dotenv').config();


export function getInputFromUserOrEnv(envVarName: string, prompt: string): string {
	const envValue = process.env[envVarName];
	if (envValue) {
		return envValue;
	}
	return readlineSync.question(prompt);
}