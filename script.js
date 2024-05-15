// Exercise 3.1
const cost_payment = (transaction) => transaction * 0.001 + 3;
console.log(cost_payment(200));

// Exercise 3.2
// Part 1
const greeting = (name1, name2, name3) =>
	`Welcome ${name1}, ${name2}, ${name3}`;
console.log(greeting("Cat", "Dog", "Bird"));

// Part 2
const age = (birth_year) => 2024 - birth_year;
console.log(age(2001));

// Part 3
const greeting_with_age = (
	name1,
	birth_year1,
	name2,
	birth_year2,
	name3,
	birth_year3
) =>
	`Welcome ${name1}, you are ${age(
		birth_year1
	)}. Welcome ${name2}, you are ${age(
		birth_year2
	)}. Welcome ${name3}, you are ${age(birth_year3)}`;
console.log(greeting_with_age("Cat", 2001, "Dog", 2003, "Bird", 2005));

// Challenge
// Part 1 - 3
// use switch case
const grading_switch = (score) => {
	switch (true) {
		case score == 11:
			return "Perfect";
		case score < 11 && score >= 9:
			return "Excellent";
		case score < 9 && score >= 5:
			return true;
		case score < 5 && score >= 0:
			return false;
		default:
			return "Error!";
	}
};
console.log(grading_switch(11));

// use if-else
const grading_if = (score) => {
	score == 11
		? console.log("Perfect")
		: score < 11 && score >= 9
		? console.log("Excellent")
		: score < 9 && score >= 5
		? console.log(true)
		: score < 5 && score >= 0
		? console.log(false)
		: console.log("Error!");
};
grading_if(12);
