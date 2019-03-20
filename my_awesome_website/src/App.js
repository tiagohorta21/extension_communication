// React
import React, { Component } from "react";
// Styles
import styles from "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { message: "", receivedMessage: "" };
    }

    messageHandler = this.messageHandler.bind(this);

    componentDidMount() {
        window.addEventListener("message", this.messageHandler, false);
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.messageHandler, false);
    }

    messageHandler(event) {
        if (event.data.messageToWebsite) {
            this.setState({
                receivedMessage: event.data.messageToWebsite
            });
        }
    }

    handleOnClick = () => {
        const { message } = this.state;
        window.postMessage({ message: message }, "*");
    };

    onChangeMessage = event => {
        this.setState({ message: event.target.value });
    };

    render() {
        const { receivedMessage } = this.state;
        return (
            <div style={styles.container}>
                <span>My Awesome Webpage !</span>
                <div>
                    <span style={styles.span}>
                        Message received from the extension:
                    </span>
                    <span>{receivedMessage}</span>
                </div>
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
