import React from "react";
import style from "./relogio.module.scss"

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0"); // padStart determina um padrão, nos parâmetros o número 2 indica a quantidade mínima de caracteres e o segundo qual caractere padrão. No caso um número "8" viraria "08"
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");
    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span> 
        </>
    )
}