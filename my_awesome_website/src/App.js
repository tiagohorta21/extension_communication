// React
import React, { Component } from "react";
// Styles
import styles from "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
    }

    handleOnClick = () => {
        const { message } = this.state;
        window.postMessage({ message: message }, "*");
    };

    onChangeMessage = event => {
        this.setState({ message: event.target.value });
    };

    render() {
        return (
            <div style={styles.container}>
                <span>My Awesome Webpage !</span>
                <div>
                    <span style={styles.span}>
                        Write a message to the extension:
                    </span>
                    <input onChange={this.onChangeMessage} />
                </div>
                <button onClick={this.handleOnClick}>Send Message</button>
            </div>
        );
    }
}

export default App;
