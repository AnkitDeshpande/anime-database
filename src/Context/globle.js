import React, { createContext, useContext, useReducer } from "react";

const GlobleContext = createContext();
const baseUrl = "https://api.jikan.moe/v4";

const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_ARING_ANIME = "GET_ARING_ANIME";

const reducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case GET_POPULAR_ANIME:
            return { ...state, popularAnime: action.payload, loading: false };
        default:
            return state;
    }
};

export const GlobleContextProvider = ({ children }) => {
    const initialState = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        searchingResults: [],
        isSearch: false,
        loading: false,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getPopularAnime = async () => {
        dispatch({ type: LOADING });
        const response = await fetch(
            `${baseUrl}/top/anime?filter=bypopularity`
        );
        const data = await response.json();
        console.log(data.data);
        dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
    };

    React.useEffect(() => {
        getPopularAnime();
    }, []);

    return (
        <GlobleContext.Provider value={{ ...state }}>
            {children}
        </GlobleContext.Provider>
    );
};

export const useGlobleContext = () => {
    return useContext(GlobleContext);
};
