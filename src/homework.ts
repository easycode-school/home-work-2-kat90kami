abstract class Car {
	protected mileage: number;
	protected fuel: number;

	constructor(mileage: number, fuel: number) {
		if (mileage < 0 || fuel < 0) {
			console.log('ошибка ввода данных');
		} else {
			this.mileage = mileage;
			this.fuel = fuel;
		}
	}

	public abstract drive(km: number);
	public abstract refuel(fuel: number);
}


class Tesla extends Car {
	public get statusFuel(): number {
		return this.fuel;
	}

	public get statusMileage(): number {
		return this.mileage;
	}

	drive(km: number): void {
		if (km < 0) {
			console.log('введите к-во км больше нуля');
		} else {
			this.mileage += km;
			this.fuel -= km / 10; // расход 10л на 100км
			if (this.fuel <= 0) {
				console.log('нужно заправиться');
			}
		}
	}

	refuel(fuel: number): void {
		if (fuel < 0) {
			console.log('введите к-во бензина больше нуля')
		} else {
			this.fuel += fuel;
		}
	}
}

let auto = new Tesla(100, 50);
auto.drive(300);
auto.refuel(50);
console.log(auto);