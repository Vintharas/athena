export class Welcome{
    constructor(){
        this.heading = "Athena";
        this.subheading = "An Artificial Thinking Human-like Electronic Noetic Assistant";
        this.firstName = 'John';
        this.lastName = 'Doe';
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    welcome(){
        alert(`Welcome, ${this.fullName}!`);
    }
}
