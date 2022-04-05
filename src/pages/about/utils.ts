export class Point {
  public x = 1;
  public onPrint() {
    console.log('hello class');
  }
}

export class ColorPoint extends Point {
  private static hh = 'ColorPoint';
  public color;
  public x = 2;

  public constructor(props: { color: string }) {
    super();
    this.color = props.color;
  }
}

class Base {
  protected static getGreeting() {
    return 'Hello world';
  }

  public onPrint() {
    Base.getGreeting();
  }
}

class MyClass {
  private static y = 1;

  protected x = 0;
  private printX() {
    console.log(this.x);
  }
}
