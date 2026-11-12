
import './Program6b.scss';

function Program6b() {
    const students = [
        { id: 1, name: 'Ravi', marks: 85 },
        { id: 2, name: 'Sita', marks: 92 },
        { id: 3, name: 'Anu', marks: 78 }
    ];

    return (
        <div className="container">
            <h1>Student Details</h1>

            {students.map(student => (
                <div className="card" key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Marks: {student.marks}</p>
                </div>
            ))}
        </div>
    );
}

export default Program6b;
