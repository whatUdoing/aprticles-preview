import { API_URL } from '../../../app/config/';

const URL_PREFIX = `${API_URL}/articles`;

export const fetchFashionArticles = () => {
    return fetch(`${URL_PREFIX}/fashion`).then((resp) => {
        if (resp.ok) {
            return resp.json();
        }

        resp.json().then((error) => {
            throw Error(error);
        });
    });
};

export const fetchSportsArticles = () => {
    return fetch(`${URL_PREFIX}/sports`).then((resp) => {
        if (resp.ok) {
            return resp.json();
        }

        resp.json().then((error) => {
            throw Error(error);
        });
    });
};
