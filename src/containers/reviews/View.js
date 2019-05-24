import React from 'react';
import CommonPopover from "../../components/ui/Popover/component";
import CommonModal from "../../components/ui/Modal2/component";

const View = props => {
    const {reviews, isDataLoading} = props;

    const renderMessage = message => {
        const shortid = require('shortid');
        return (
            <div>
                <CommonModal
                    uuid={shortid.generate()}
                    modalBody={message}
                />
            </div>
        );
    };

    const renderComments = comment => {
        const shortId = require('shortid');
        return (
            <div key={shortId.generate()}>
                <span>{comment.DateAdded}</span>
                <CommonPopover
                    uuid={shortId.generate()}
                    popoverHeader={comment.DateAdded}
                    popoverBody={comment.Comment}
                />
            </div>

        );
    };

    const renderReview = review => {
        return (
            <tr key={Math.random()}>
                <td>{review.UserName}</td>
                <td>{renderMessage(review.Message)}</td>
                <td>{review.IsPositive ? 'Да' : 'Нет'}</td>
                <td>{review.DateAdded}</td>
                <td>
                    {review.Comments && review.Comments.map(comment => renderComments(comment))}
                </td>
            </tr>
        );
    };

    return (
        <>
            <div className="view-reviews">
                <table id="content-table" className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Пользователь</th>
                        <th scope="col">Текст</th>
                        <th scope="col" className="isPositive" id="isPositive">
                            <span>Позитивный</span>
                        </th>
                        <th scope="col" id="dateAdded">Дата добавления</th>
                        <th scope="col">Комментарии</th>
                    </tr>
                    </thead>
                    <tbody>
                    {isDataLoading ? <tr><td>Загрузка результатов поиска...</td></tr> : reviews && reviews.map(pr => renderReview(pr))}
                    </tbody>
                </table>

            </div>
        </>
    );
};
export default View;
