export class Main {
    greet(name) {
        if(name === null){
            return "Hello, my friend.";
        }
        if(name === undefined){
            return "Hello, my friend.";
        }
        return "Hello, " + name + ".";
    }
}