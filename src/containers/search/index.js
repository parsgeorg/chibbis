import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchReviews, setDataLoading} from '../../actions';
import View from "./View";

class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchFieldValue: ''
        }
    }

    handleChange = () => {
        const {reviews, searchReviews, setDataLoading} = this.props;

        const searchFieldValue = document.getElementById('searchField').value;
        this.setState({
            searchFieldValue
        });
        const promise = new Promise(function(resolve) {
            setTimeout(() => {
                const filteredReviews = searchFieldValue !== '' ? reviews.filter(fr => fr.Message.includes(searchFieldValue)) : undefined;
                resolve(filteredReviews);
            });
        });
        setDataLoading(true);
        promise.then(result => {
            searchReviews(result);
            setDataLoading(false);
        });
    }

    render() {
        const {value} = this.state;
        return (
            <View value={value}  handleChange={this.handleChange.bind(this)}/>
        )
    }
}

const mapStateToProps = state => ({
    reviews: state.reviews.items
});

const mapDispatchToProps = {
    searchReviews,
    setDataLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
