abstract class Car {
	protected mileage: number;
	protected fuel: number;

	constructor(mileage: number, fuel: number) { }

	public abstract drive(km: number);
	public abstract refuel(fuel: number);
}


class Tesla extends Car {
	constructor(mileage: number, fuel: number) {
		super(mileage, fuel);
		this.mileage = mileage;
		this.fuel = fuel;
	}

	public get statusFuel(): number {
		return this.fuel;
	}

	public get statusMileage(): number {
		return this.mileage;
	}

	/**
	 * 
	 * @param km 
	 * метод drive увеличивает пробег и уменьшает к-во бензина в зависимости от расхода
	 */
	drive(km: number): void {
		if (km < 0) return console.log('введите к-во км больше нуля');
		this.mileage += km;
		this.fuel -= km / 10; // расход 10л на 100км
		if (this.fuel <= 0) return console.log('нужно заправиться');
	}

	/**
	 * 
	 * @param fuel 
	 * метод refuel рассчитывает к-во бензина после заправки
	 */
	refuel(fuel: number): void {
		if (fuel < 0) return console.log('введите к-во бензина больше нуля');
		this.fuel += fuel;
	}
}

let auto = new Tesla(100, 50);
auto.drive(300);
auto.refuel(50);
console.log(auto);