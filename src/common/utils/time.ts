export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":") // Array de strings recebe o valor e divide a partir do ":". Se não for passado algum valor, será zero (por isso o ='0' atribuído a cada item do array)

    const horasEmSegundos = Number(horas) * 3600; // Transforma o valor de horas em número e multiplica por 3600 para converter em segundos
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos); // Retorna a soma das horas e minutos convertidas com os segundos
}