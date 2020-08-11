import * as React from 'react';
import '../assets/home.scss';

interface IProps {}

interface IState {}

export default class Count extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <h1 className="h-txt">This is Home Page!!!</h1>
            </div>
        );
    }
}
