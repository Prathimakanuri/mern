
import { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h2>User Login Status</h2>

            {isLoggedIn
                ? <h3>Welcome User!</h3>
                : <h3>Please Login</h3>
            }

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                Toggle Login
            </button>
        </div>
    );
}

export default App;
