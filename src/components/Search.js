import React, { Component } from 'react';
import ContactTile from './Contact';
class Search extends Component {
    state = {
        contacts: [],
        filteredContacts: [],
        input: ''
    }

    componentDidMount() {
        this.request()
    }

    request = async (name) => {
        const response = await fetch('http://localhost:4000/contacts');
        const contacts = await response.json();
        this.setState({ contacts });
    }

    handleInputSubmit = async (event) => {
        let input = event.target.value;
        event.preventDefault();

        const filtered = this.state.contacts.filter(contact => contact.name.includes(event.target.value))

        this.setState({
            filteredContacts: filtered,
            input
        })
    }

    render() {
        return (
            <section>
                <input input={this.state.input} onChange={this.handleInputSubmit} />
                {this.state.filteredContacts.map(contact =>
                    <ContactTile key={contact.id}
                        item={contact} />
                )}
            </section>
        )
    }
}

export default Search