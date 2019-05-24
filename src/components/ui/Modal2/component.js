import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export default class CommonModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    truncString(max, add) {
        add = add || '...';
        return (add.length > max ? this.substring(0, max) + add : this);
    }

    render() {
        let {modalBody, className} = this.props;
        let needTrim = modalBody.length > 200;

        if (needTrim) {
            //trim the string to the maximum length
            modalBody = modalBody.substr(0, 200)
                .substr(0, Math.min(modalBody.length, modalBody.lastIndexOf(" ")))
        }

        return (
            <div>
                <span>{modalBody}</span>
                {needTrim &&
                    <Button onClick={this.toggle}>...</Button>
                }
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={className}>
                    <ModalHeader toggle={this.toggle}>Текст сообщения</ModalHeader>
                    <ModalBody>{modalBody}</ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Закрыть</Button>
                    </ModalFooter>
                </Modal>


            </div>
        );
    }
}
