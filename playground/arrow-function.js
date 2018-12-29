var square = (x) => {
  var result = x * x;
  return result;
};
console.log(square(9))

var user = {
  name: 'Brandon',
  sayHi: () => {
    console.log(`Hi, I'm ${this.name}`);
  },
  sayHialt () {
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.sayHialt();
