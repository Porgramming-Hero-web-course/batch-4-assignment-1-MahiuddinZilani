{
  class Car {
    brand: string;
    model: string;
    private _year: number;
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this._year = year;
    }

    getCarAge(): number {
      let currentYear = new Date();
      let age = currentYear.getFullYear() - this._year;
      return age;
    }
  }

  const car1 = new Car("Honda", "Civic", 2010);
  console.log(car1.getCarAge());
}
