import {HIDE_MODAL, SHOW_MODAL} from "../../../actions/actionTypes";

export const showModal = options => dispatch => {
	
    const { title, btnText, content } = options;
    return dispatch({
        type: SHOW_MODAL,
        title, btnText, content
    })
}

export function closeModal() {
    return {
        type: HIDE_MODAL
    };
}

