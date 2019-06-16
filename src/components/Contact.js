import React, { useState } from 'react';



function ContactTile(props) {
    const [fav, setFav] = useState(false);

    return (
        <section>
            <div>
                <h2> Hi! My name is {props.item.name} </h2>
                <p>Phone number: {props.item.phone} </p>
                <p>e-mail: {props.item.mail}</p>
                <p>My address is: {props.item.address} </p>
                {fav ? (
                    <button onClick={() => setFav(false)}>Remove from fav</button>
                ) : (
                        <button onClick={() => setFav(true)}>Add to fav</button>
                    )}
            </div>
        </section>
    );
};

export default ContactTile;
