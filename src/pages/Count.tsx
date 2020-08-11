import * as React from 'react';

interface IProps {}

interface IState {
    count: number;
}

export default class Count extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleClick() {
        let { count } = this.state;

        this.setState({
            count: ++count,
        });
    }

    render() {
        return (
            <div>
                当前count值：{this.state.count}
                <br />
                <button style={{ border: '1px dashed blue' }} onClick={() => this.handleClick()}>
                    增加1
                </button>
            </div>
        );
    }
}
