export class Main {
    greet(name) {
        if(this.isInvalidString(name)){
            return "Hello, my friend."
        }
        return "Hello, " + name + ".";
    }

    isInvalidString(name){
        return name === null || name === undefined || name === "";
    }
}