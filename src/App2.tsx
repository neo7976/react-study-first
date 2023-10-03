//Типизация событий
import React, {Component} from 'react';
import './App.css';

type CounterState = {
    count: number
}

type CounterProps = {
    // readonly title?: string
    title?: string
}


class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        console.log(`${e.clientX}, ${e.clientY}`);
        this.setState(({count}) => ({
            count: ++count
        }));
    }
    //значение по умолчанию
    static defaultProps: CounterProps = {
        title: "Default counter:"
    }

    // static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    //     return false ? {count: 2} : null;
    // }
    //
    // componentDidMount(): void {
    // }
    //
    // shouldComponentUpdate(nextProps: Readonly<CounterProps>, nextState: Readonly<CounterState>, nextContext: any): boolean {
    //     return true;
    // }

    render() {
        return (
            <div>
                <h1>{this.props.title}-{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
                <a href="#" onClick={this.handleClick}>Link</a>
            </div>
        );
    }
}

const App2 = () => <Counter/>

export default App2;
