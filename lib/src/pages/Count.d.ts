import * as React from 'react';
interface IProps {
}
interface IState {
    count: number;
}
export default class Count extends React.Component<IProps, IState> {
    constructor(props: any);
    handleClick(): void;
    render(): JSX.Element;
}
export {};
