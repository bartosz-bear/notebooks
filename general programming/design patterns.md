## DECORATOR PATTERN

- decorator pattern extends (decorates) an object's behavior dynamically
- the ability to add new behavior at runtime is accomplished by a Decorator object which 'wraps itself' around the original object. Multiple decorators can add or override functionality to the original object.

- decorators provide flexibility to statically typed languages by allowing runtime changes as opposed to inheritance whcih takes place at compile time

- Javascript however is a dynamic language and the ability to extend an object at runtime is baked into the language itself

- an example of a decorator is security management where business actors are given  additional access to privileged information depending on the privilages of the the authenticated user. For example, an HR manager gets to work with an employee object that has been appended (is decorated with) the employee's salary record to that salary information can be viewed.

```js
var User = function (name) {
  this.name = name;

  this.say = function () {
    console.log('User:', this.name)
  }
}

var DecoratedUser = function (user, street, city) {
  this.user = user
  this.name = user.name
  this.street = street
  this.city = city

  this.say = function () {
    console.log("Decorated User: " + this.name + ", " +
    this.street + ", " + this.city);
  }
}

var myUser = new User('Kelly')
user.say()

var decorated = new DecoratedUser(myUser, 'Broadway', 'NYC')
decorated.say()
```
