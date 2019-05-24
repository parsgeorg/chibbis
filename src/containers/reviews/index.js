import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchReviews, hideModal, searchReviews, showModal} from '../../actions';
import View from "./View";

/**
 * Класс отзывов
 */
class Reviews extends Component {

    state = {
        reviews: [],
    }

    componentDidMount() {
        //this.props.fetchReviews().then(reviews => this.searchReviews(reviews));
        this.props.fetchReviews();
        console.log(this.props);
        this.searchReviews(this.props.items);
    }

    searchReviews = payload => {
        this.setState({reviews: payload.payload});
    }

    render() {
        const {reviews} = this.state;
        const {filteredReviews, showModal, isModalShow, modalTitle, modalContent, btnText, hideModal, isDataLoading} = this.props;
        return (
            <div>
                {
                    <View
                        reviews={filteredReviews !== undefined ? filteredReviews : reviews}
                        showModal={showModal}
                        isModalShow={isModalShow}
                        modalTitle={modalTitle}
                        modalContent={modalContent}
                        btnText={btnText}
                        hideModal={hideModal}
                        isDataLoading={isDataLoading}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
   return {
        filteredReviews: state.search.filteredReviews,
        isModalShow: state.modal.isModalShow,
        modalTitle: state.modal.title,
        modalContent: state.modal.content,
        btnText: state.modal.btnText,
        isDataLoading: state.search.isDataLoading,
        items: state.reviews.items
    };
};

const mapDispatchToProps = {
    fetchReviews,
    searchReviews,
    showModal,
    hideModal
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Reviews);
