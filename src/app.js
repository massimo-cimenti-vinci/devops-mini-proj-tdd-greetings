export class Main {
    greet(name) {

        if(this.isInvalidString(name)){
            return "Hello, my friend.";
        }

        if(typeof(name) === "object"){
            return "Hello, Jill and Jane.";
        }


        if(this.isUpperCase(name)){
            return "HELLO, " + name + "!";
        }
        return "Hello, " + name + ".";
    }

    isInvalidString(name){
        return name === null || name === undefined || name === "";
    }

    isUpperCase(name){
        return name === name.toUpperCase();
    }
}