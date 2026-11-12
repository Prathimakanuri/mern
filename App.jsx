
function App() {
    const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

    return (
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={fruit}>{index + 1}. {fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
