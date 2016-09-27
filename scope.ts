let dogName: string = 'Fido';

function doSomething() {

    let dogName: string = 'Havoc';
    let dogBreed: string = 'Lab';

    if (dogName == 'Havoc') {

        let dogBreed: string = 'Black Lab';
        console.log(dogBreed); // what will output? "black lab"
    }

    console.log(dogName);  // what will output? "Havoc"
    console.log(dogBreed); // what will output? "Lab"
}
doSomething();

console.log(dogName);  // what will output? "Fido"
//console.log(dogBreed); // what will output? undefined
