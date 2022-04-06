class Person {
  static isLife = true

  constructor(name, age) {
    this.name = name
    this.age = age
    this.isMarried = false
  }

  introduce() {
    console.log(`My name is ${this.name} and i'm ${this.age} also my married status is ${this.isMarried}`);
  }

  static animal(food) {
    const foodBasket = ['plant', 'meat']
    return foodBasket.includes(food.toLowerCase())
  }

}

// const person1 = new Person('ivan', 21)
// console.log(Person.name)
const person = new Person('ivan', 21)
person.introduce()
console.log(Person.animal('meat'));
console.log(Person.animal('human'));
