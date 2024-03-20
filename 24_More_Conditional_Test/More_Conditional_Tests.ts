console.log("Equality test with strings: ", "Apple" === "Apple");
console.log("Inequality test with strings: ", ("Apple" as string) != "Orange");

console.log("Lower Case function test: ", "LEGEND".toLowerCase() === "legend");

console.log("Equality test with numbers:", 26 === 26);
console.log("Inequality test with numbers: ", (26 as number) !=35);

console.log("Greater than test: ", 10 > 5);
console.log("Less than test: ", 5 < 10);

console.log("Greater than and equal to test: ", 10 >=10);
console.log("less than or equal to test: ", 5 <= 10);

console.log("And operator test: ", 5===5 && 10 > 5);
console.log("Or operator test: ", 5===5 || false);

const fruits :string[] = ['Apple', 'Banana', 'Mango'];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));
console.log('Testing "Apple" is not in array: ', fruits.includes('Apple'));