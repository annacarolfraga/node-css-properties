import prompt from "prompt-sync";

const command = prompt()
const cssProperty = (entrada) => {
    let saida = []
    while (entrada != "sair") {
        saida.push(entrada);
        entrada = command("Insira uma propriedade CSS:")
    }
    let result= saida.sort().join("\n")
    console.log(result)
    
}
cssProperty()
