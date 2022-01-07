class Animal {
    static version = '0.0.1'
    constructor(name) {
        this.name;
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.namae = name;
    }
}
Animal.version = '0.0.1'





// function Bird() {
//     AnimationPlaybackEvent.apply(this.arguments);
// }

// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;

class Bird extends Animal{
    constructor(name) {
        super(name);
    }

    getName() {
        console.log('log from big bird');
        console.log(super.getName());
    }
}
const bird = new Bird('Karkar')
bird.getName()