import {fundoClaro, conteudoClaro, textoFundoClaro, fundoEscuto, conteudoEscuro, textoFundoEscuro} from './variaveis';

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,
    filter: ''
};

export const temaEscuro = {
    body: fundoEscuto,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)",
};