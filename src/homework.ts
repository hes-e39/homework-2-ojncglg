/*
 * Add two numbers. If b is not provided, assign b to 0.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b as a number
 */
export const addTwoNumbers = (a: number, b?: number): number => {
  //if b is not provided, lets assume its 0
  return a + (b ?? 0);
};

// /**
//  * Calculates the total sum of an array of numbers.
//  * @param values - An array of numbers or strings.
//  * @returns The sum of the numbers.
//  */
export const sumArray = (numbers: (number | string)[]): number => {
  return numbers.reduce((acc: number, curr) => {
    //if it is a string, it will try to convert it to a number
    const numValue = typeof curr === 'string' ? parseFloat(curr) : curr;
    return acc + (isNaN(numValue) ? 0 : numValue);
  }, 0);
};

// Create type "Person" with the following properties:
// - name: string
// - age: number
export type Person = {
  name: string;
  age: number;
}

// Create type "User" which extends "Person" and adds the following properties:
// - type: 'user' (literal type)
//User is all the things that a person plus a type property 'User'
export type User = Person & {
  type: 'user';
};

// Create type "Admin" which extends "Person" and adds the following properties:
// - isSuperAdmin: boolean
// is this person an admin? 
export type Admin = Person & {
  isAdmin: boolean; 
};

// Create a type "AllPeople" which is a union of "Person", "User", and "Admin"
//Allpeople can be a person, a user, or admin 
export type AllPeople = Person | User | Admin;

// Add function "isAdmin" that returns true if "u" is an admin
//takes AllPeople object and checks if it has an isAdmin property, if it does u will be treated as an Admin
export const isAdmin = (u: AllPeople): u is Admin => {
  return 'isAdmin' in u;  
};

// Add function "isUser" that returns true if "u" is a user
//Takes AllPeople, checks if it has a type property AND if it is a user. If both are true then u will be treated as a User
export const isUser = (u: AllPeople): u is User => {
  return 'type' in u && u.type === 'user';
};

/**
 * If a "Admin" calls userGreetingMessage, return "Hello, {name}. You are an admin."
 * If a "User" calls userGreetingMessage, return "Hello, {name}. You are a user."
 * If a "Person" calls userGreetingMessage, return "Hello, {name}. You do not have access."
 * @param user - The user to greet
 * @returns A greeting message
 */
export const userGreetingMessage = (u: AllPeople): string => {
  //checks if the object is an Admin using the isAdmin function, If true, returns a greeting string calling them an admin
  //checks if object is a User using isUser function.
  //if not a user or admin, then you dont have access
  if (isAdmin(u)) {
    return `Hello, ${u.name}. You are an admin.`;
  } else if (isUser(u)) {
    return `Hello, ${u.name}. You are a user.`;
  } else {
    return `Hello, ${u.name}. You do not have access.`;
  }
};
