console.log('started ...')
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done!')
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObject = merge({name: 'mohammad'}, {age: 29})
console.log(mergedObject);

interface Lengthy {
    length: number

}

function CountAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'description Text';
    if (element.length > 0) {
        descriptionText = 'description Text : ' + element.length
    }
    return [element, descriptionText]
}

console.log(CountAndDescribe('mohammad'))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value : ' + obj[key]
}

console.log(extractAndConvert({name: 'mohammad'}, 'name'))

class DataStorage<T extends string | number | boolean | object> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('mamad');
textStorage.addItem('Mohammad');
textStorage.removeItem('mamad');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
const objectStorage = new DataStorage<object>();
objectStorage.addItem({name: 'Mohammad'});
objectStorage.addItem({name: 'rostami'});
objectStorage.removeItem({name: 'rostami'});
console.log(objectStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    // return {title: title, description: description, completeUntil: date}
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names2: Readonly<string[]> = ['mohammad', 'mamad'];