import { resolve } from "q";

export class Custom {

//Vérifier que l'email n'existe pas dans la base de donnée 
    static unique(control) {

        
       

      /*  return new Promise(resolve => {

            //Simulation accés au serveur 
            setTimeout(()=> {

                if (db.indexOf(control.value) !== -1 ){
                        resolve({unique:false})
                }
                resolve(null);
            },400)
        })*/

   

    }
















//Vérifier que l'email contient @
    static checkmail(control) {

     
      
    }
}