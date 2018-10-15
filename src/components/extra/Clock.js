import React from 'react';
export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    componentDidMount(){
        this.timerid = setInterval(() => {
            this.tick();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerid);
    }
    render() {
        return (
            <div>
                <h4>Current time: {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}