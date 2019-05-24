import axios from 'axios';
//import { BASE_API } from '../config';

export const fetchReviews = async () => {
    const body = await axios.get(
        'https://arh.chibbistest.ru/test-api/v1/front-task'
    );
    return body.data
};

export const loadMoreReviews = async ({offset}) => {
    const body = await axios.get(
        'https://arh.chibbistest.ru/test-api/v1/front-task'
    );
    return body.data;
};

export const fetchReviewById = async id => {
    const body = await axios.get(
        'https://arh.chibbistest.ru/test-api/v1/front-task',
    );
    return body.data;
};

