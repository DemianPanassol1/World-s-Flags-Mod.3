import axios from 'axios';
import { CLEAR_ERROR, RESET_PESQUISA, RESET_PESQUISA_DETALHADA, SET_ERROR, SET_LOADING, SET_PESQUISA, SET_PESQUISA_DETALHADA } from './types';

const pesquisa = async (filtro1, filtro2, dispatch) => {

    if (filtro1 === 'região') {
        await search('region', filtro2, dispatch);

    } else if (filtro1 === 'capital') {
        await search('capital', filtro2, dispatch);

    } else if (filtro1 === 'lingua') {
        await search('lang', filtro2, dispatch);

    } else if (filtro1 === 'país') {
        await search('name', filtro2, dispatch);

    } else if (filtro1 === 'moeda') {
        (filtro2 === 'dolar' || filtro2 === 'dólar') && (filtro2 = 'dollar');

        await search('currency', filtro2, dispatch);

    } else {
        setError('Erro: Um erro interno impediu a realização da pesquisa. Por favor, recarregue a página e tente novamente.', dispatch);
    };
};

const pesquisaDetalhada = async (value, dispatch) => {
    dispatch({ type: SET_LOADING });

    dispatch({ type: RESET_PESQUISA_DETALHADA });

    try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${value}?fields=flags,name,capital,region,subregion,population,languages,nativeName,borders`);

        const data = res.data[0];

        let bordas = [];

        for (let i = 0; i < data.borders.length; i++) {
            const response = await axios.get(`https://restcountries.com/v3.1/alpha/${data.borders[i]}?fields=flags,name`);
            bordas.push(response.data);
        };

        data.borders = bordas;

        dispatch({ type: SET_PESQUISA_DETALHADA, payload: data });

    } catch (error) {
        setError('Não foi possível carregar dados referente a esse país; Tente novamente', dispatch);
    };
};

const limparPesquisa = (dispatch) => {
    dispatch({ type: RESET_PESQUISA });
};

const limparPesquisaDetalhada = (dispatch) => {
    dispatch({ type: RESET_PESQUISA_DETALHADA });
};

const setError = (message, dispatch, time = 5600) => {
    dispatch({ type: SET_ERROR, payload: message });

    setTimeout(() => {
        clearError(dispatch);
    }, time);
};

const clearError = (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
};

export { pesquisa, pesquisaDetalhada, limparPesquisa, limparPesquisaDetalhada, setError, clearError };

const search = async (type, value, dispatch) => {
    dispatch({ type: SET_LOADING });

    limparPesquisa();

    try {
        const res = await axios.get(`https://restcountries.com/v3.1/${type}/${value}?fields=flags,name`);

        dispatch({ type: SET_PESQUISA, payload: res.data });

    } catch (error) {
        setError('Pesquisa não retornou resultados; Tente novamente', dispatch);
    };
};