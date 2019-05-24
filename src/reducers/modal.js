import {HIDE_MODAL, SHOW_MODAL} from '../actions/actionTypes';

const initialState = {
    isModalShow: false,
    title: 'Модальное окно',
    content: null,
    btnText: 'Ok'
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_MODAL:
            return {
                ...state,
                isModalShow: true,
                title: 'Окно просмотра комментариев',
                content: payload,
                btnText: 'Закрыть'
            };
        case HIDE_MODAL:
            return {
                ...state,
                isModalShow: false
            };
        default:
            return state;
    }
};
