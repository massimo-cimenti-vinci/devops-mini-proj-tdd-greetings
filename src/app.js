export class Main {
    greet(name) {

        if(this.isInvalidString(name)){
            return "Hello, my friend.";
        }

        if(this.isAList(name)){
            return "Hello, " + name[0] + " and " + name[1] + ".";
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

    isAList(list){
        return typeof(list) === "object";
    }
}