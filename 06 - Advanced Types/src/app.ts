console.log('started...')
type Admin = {
    name: string;
    privileges: string[]
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Mohammad',
    privileges: ['front-end developer'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: string, b: string): string;
function add(n1: number, n2: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'mamd', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving ...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck ...');
    }

    loadCarGo(amount: number) {
        console.log('amount car go ' + amount)
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCarGo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed
            break
        case "horse":
            speed = animal.runningSpeed
            break
    }
    console.log('speed is : ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 60});
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'hi';

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'email is invalid',
    username: 'username is invalid',
};

const result = add('Mohammad', 'Rostami') as string;
result.split(' ')

const fetchedUserData = {
    id: 'm1',
    name: 'mamad',
    job: {
        title: 'front-end',
        description: 'freelancer'
    }
};
console.log(fetchedUserData?.job?.title);
const userInput = null;
const storedData = userInput ?? 'default';
console.log(storedData);