
import { useState } from 'react';

function Student(props) {
    return <h2>Student Name: {props.name}</h2>;
}

function Program6a() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Student name="Ravi" />

            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}

export default Program6a;
