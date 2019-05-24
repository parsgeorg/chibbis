import {HIDE_MODAL, SHOW_MODAL} from "../../../actions/actionTypes";

const initialState = {
  isModalShow: false,
  title: 'Модальное окно',
  btnText: 'Кнопка',
  content: null,
};

// export const modalReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case SHOW_MODAL:
//       return {
//         ...state,
//         isModalShow: true,
//         title: payload.title,
//         btnText: payload.btnText,
//         content: payload.content,
//       };
//     case HIDE_MODAL:
//       return {
//         ...state,
//         isModalShow: false,
//       };
//     default:
//       return state;
//   }
// };

// const ModalReducer = {
//   modal: modalReducer,
// };

// export default ModalReducer;
