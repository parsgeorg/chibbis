import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Modal extends Component {
    render() {
        const props = Array.from(this.props.children);
        const [title, content, btnText] = props;
        return (
            <div className="modalDialog">
                <div>
                    <Link to="/" className="close" onClick={this.props.clickHandler}>
                        X
                    </Link>
                    <h4>{title}</h4>
                    <div>{content}</div>
                    <button className="btn btn-success" onClick={this.props.clickHandler}>
                        <div>{btnText}</div>
                    </button>
                </div>
            </div>
        );
    }
}
