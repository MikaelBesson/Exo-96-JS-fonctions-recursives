//# Exo-96-JS-fonctions-recursives

// - Créez une fonction récursive qui incrémentera de 2 la variable passée en paramètre et qui affichera à chaque
//   fois le résultat dans un div que vous créerez à la fin
let p1= document.getElementById("p1");

function test(pa, a){
    pa.innerHTML += a+"<br>";
    if(a < 20){
        a= a+2;
        test(p1 ,a );
    }
}

test(p1,0);