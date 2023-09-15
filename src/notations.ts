//Notations (tipagens relacionadas a parâmetros e retornos de função)

const sum = (a: number, b: number): number => {
    return a + b;
}

sum(1, 2);

const noReturn = (message: string):void => {
    console.log(message);
}
