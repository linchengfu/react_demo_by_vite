function f1() {
  return this;
}

const r1 = f1();
console.log(f1)

function f2() {

  return this;
}

const r2 = f2();
console.log(r2)

class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto))
  }

  first() { }
  second() { }

  static third() {
  }
}
new Example()

class Base {
  constructor() {
    this.name = 'base';
  }
}

class Child extends Base {
  constructor() {
    super();
    console.log(this)
    this.name = 'child';
  }
}

class Bad extends Base {
  constructor() {
  }
}

class Good extends Base {
  constructor() {
    return { name: 'Good' }
  }
}


const c1 = new Child();
console.log(new Good())
new Bad()
console.log(c1)

const obj = {
  a: 'lin',
  foo: () => {
    const b = (() => this)
    return b
  }
}
console.log(obj.foo())

const f1 = (x) => x + 1;
const f2 = (x) => x + 2;
const f3 = (x) => x + 3;

function compose(...fns) {
  return function (arg) {
    return fns.reduceRight((acc, fn) => fn(acc), arg)
  }

}

compose(f1, f2, f3)(0)


const Box = x => ({
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`
})

const finalRes = str => Box(str).map(x => x + 1).map(x => x + 2)

console.log(finalRes(1))

const Box = x => ({
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`
})

const finalPrice = str => {
  return Box(str).map(x => x + 1).map(x => x + 2)
}

const result = finalPrice(100)

console.log(result) // => Box(110)
