export class Main {
    greet(name) {
        if(this.isInvalidString(name)){
            return "Hello, my friend.";
        }

        if(name === name.toUpperCase()){
            return "HELLO, " + name.toUpperCase() + "!";
        }
        return "Hello, " + name + ".";
    }

    isInvalidString(name){
        return name === null || name === undefined || name === "";
    }
}