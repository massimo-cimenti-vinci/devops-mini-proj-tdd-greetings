export class Main {
    greet(name,language) {

        

        if(this.isInvalidString(name)){
            return "Hello, my friend.";
        }

        if(language === "fr"){
            return "Bonjour, " + name + ".";
        }
        
        if(language === "nl"){
            return "Hallo, " + name + ".";
        }

        if(this.isAList(name) && name.length > 2){
            return this.listToString(name);
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

    listToString(name){
        let txt = "Hello";
        let uppercaseName = undefined;
        
        for (let i = 0; i < name.length-1; i++){

            if(this.isUpperCase(name[i])){
                uppercaseName = name[i];
                
                
            }else{
                txt += ", " + name[i];
            }
        }

        txt += " and " + name[name.length-1] + ".";

        if(uppercaseName){
            txt += "AND HELLO " + uppercaseName + " !";
        }
        
        
        
        return txt
    }
}