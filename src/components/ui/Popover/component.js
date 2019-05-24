import React, {Component} from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import concat from "ramda/es/concat";

export default class CommonPopover extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            popoverOpen: false
        };
    }

    toggle = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        const popoverId = concat("popover_", this.props.uuid);
        return (
            <div>
                <Button id={popoverId} type="button">
                    {this.state.popoverOpen ? 'Закрыть' : 'Открыть'}
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target={popoverId} toggle={this.toggle}>
                    <PopoverHeader>{this.props.popoverHeader}</PopoverHeader>
                    <PopoverBody>{this.props.popoverBody}</PopoverBody>
                </Popover>
            </div>
        );
    }
}