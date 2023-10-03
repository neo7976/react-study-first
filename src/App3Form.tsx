//Формы
import React, {Component} from 'react';
import {text} from "stream/consumers";

class Form extends Component<{}, {}> {

    //Событие при наведении фокуса
    handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget);
    }

    //Событие при отправке
    handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('Submitted');
    }

    //Событие при копировании
    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>): void => {
        console.log('Coppied');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Simple text
                    <input type={"text"}
                           name={"text"}
                           onFocus={this.handleFocus}
                           onCopy={this.handleCopy}/>
                    <button type={"submit"}>Submit</button>
                </label>
            </form>
        )
    }
}

const App3Form = () => <Form/>

export default App3Form;
