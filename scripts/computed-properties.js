/*
Udemy: The Modern Javascript Bootcamp Course (2022)
Colt Steele & Stephen Grider
*/
// ************************************************************************************************** //

const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// The old way:
// Make the object
// const team = {};

// Then add a property using dynamic key:
// team[role] = person;
// team[role2] = person2;

// ************************************************************************************************** //

/* Kamil:
A computed property is a property whose value is dynamically evaluated at program runtime.

This is especially useful  whenever you wish to use the variables as values for object properties/keys.

    const role1 = 'host';
    const name = "John Doe"
    const team = {}
 
team[role1]  = name;
In the example above, role1 is a variable identifier name which points to  textual value  - "host" .
This variable identifier also acts as a computed property key on the team object.

When you run your program ,the  engine evaluates the variable identifier, replacing role1 with "host"

If you were to run console.log(team), you would see "host" as a key on the team object, as opposed to role1
*/

// ************************************************************************************************** //

// USING COMPUTED PROPERTIES!
const team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen',
};

// function addProp(obj, k, v) {
// const copy = { ...obj };
//   copy[k] = v;
//   return copy;
// }

const addProp = (obj, k, v) => ({ ...obj, [k]: v });
const res = addProp(team, 'happy', ':)');

console.log(res);
// ************************************************************************************************** //
