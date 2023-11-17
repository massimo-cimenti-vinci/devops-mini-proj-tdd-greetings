export class Main {

    greet(name,language) {


        if(this.isInvalidString(name)){
            return "Hello, my friend.";
        }

        if(this.isAList(name) && name.length === 2){

            if(this.isFr(language)){
                return "Bonjour, " + name[0] + " et " + name[1] + ".";
            }
            if(this.isNl(language)){
                return "Hallo, " + name[0] + " en " + name[1] + ".";
            }
            
            return "Hello, " + name[0] + " and " + name[1] + ".";
        }

        if(this.isFr(language)){
            return "Bonjour, " + name + ".";
        }
        
        if(this.isNl(language)){
            return "Hallo, " + name + ".";
        }

        if(this.isAList(name) && name.length > 2){
            
            return this.listToString(name,language);
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

    listToString(name,language){

        const translations = {

            'Hello' : {
                'en' : 'Hello',
                'fr' : 'Bonjour',
                'nl' : 'Hallo'
                
            },

            'HELLO' : {
                'en' : 'HELLO',
                'fr' : 'BONJOUR',
                'nl' : 'HALLO'
            },

            'and' : {
                'en' : 'and',
                'fr' : 'et',
                'nl' : 'en'
            },

            'AND' : {
                'en' : 'AND',
                'fr' : 'ET',
                'nl' : 'EN'
            }

        };


        let txt = translations["Hello"][language];
        let uppercaseName = undefined;
        
        for (let i = 0; i < name.length-1; i++){


            if(this.isUpperCase(name[i])){
                uppercaseName = name[i];
            
            }else{
                txt += ", " + name[i];
               
            }
            
        }

        
        txt += " " + translations["and"][language] + " " + name[name.length-1] + ".";
        
        if(uppercaseName){
            txt += translations["AND"][language] + " " + translations["HELLO"][language] + " " + uppercaseName + " !";
        }
        
        return txt
    }

    isFr(language){
        return language === "fr";
    }

    isNl(language){
        return language === "nl"
    }
}