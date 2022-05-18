


function microondas (alimento,tempo){

    // Pipoca

if ( alimento == "pipoca" && tempo >= 10 && tempo <= 20 ){
    console.log ("Prato pronto, bom apetite!!!")
}

else if (alimento == "pipoca" && tempo < 10){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Tempo insuficiente!")
}


else if (alimento == "pipoca" && tempo >= 20 && tempo < 30){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Comida queimou!")
}


else if (alimento == "pipoca" && tempo >= 30){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Kabumm!")
}

// Macarrão

if ( alimento == "macarrão" && tempo >= 8 && tempo <= 16 ){
    console.log ("Prato pronto, bom apetite!!!")
}

else if (alimento == "macarrão" && tempo < 8){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Tempo insuficiente!")
}


else if (alimento == "macarrão" && tempo >= 16 && tempo <= 23){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Comida queimou!")
}


else if (alimento == "macarrão" && tempo >= 24){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Kabumm!")
}



// Carne 

if ( alimento == "carne" && tempo >= 15 && tempo <= 30 ){
    console.log ("Prato pronto, bom apetite!!!")
}

else if (alimento == "carne" && tempo < 15){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Tempo insuficiente!")
}


else if (alimento == "carne" && tempo > 30 && tempo < 45){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Comida queimou!")
}


else if (alimento == "carne" && tempo >= 45){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Kabumm!")
}






// Feijão

if ( alimento == "feijão" && tempo >= 12 && tempo <= 24 ){
    console.log ("Prato pronto, bom apetite!!!")
}

else if (alimento == "feijão" && tempo < 12){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Tempo insuficiente!")
}


else if (alimento == "feijão" && tempo > 24 && tempo < 36){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Comida queimou!")
}


else if (alimento == "feijão" && tempo >= 36){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Kabumm!")
}

// Brigadeiro 

if ( alimento == "brigadeiro" && tempo >= 8 && tempo <= 16 ){
    console.log ("Prato pronto, bom apetite!!!")
}

else if (alimento == "brigadeiro" && tempo < 8){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Tempo insuficiente!")
}


else if (alimento == "brigadeiro" && tempo >= 16 && tempo <= 23){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Comida queimou!")
}


else if (alimento == "brigadeiro" && tempo >= 24){
    console.log ("Prato pronto, bom apetite!!!")
    console.log("Kabumm!")




}

}





microondas("pipoca",10)
microondas("macarrão",8)
microondas("carne",15)
microondas("feijão",12)
microondas("brigadeiro",8)