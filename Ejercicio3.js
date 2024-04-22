function esPalindromo(texto){
    let textoMin = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    let textoRev = textoMin.split('').reverse().join('');
    
    if (textoMin === textoRev){
        console.log("La palabra o frase si es palindromo.")
    }else{
        console.log("La palabra o frase no es un palindromo.")
    }
}

let palabra = "Radar";
let palabra2 = "Mundo"
let frase = "La ruta nos aportó otro paso natural.";

esPalindromo(palabra);
esPalindromo(palabra2)
esPalindromo(frase);