
use("college")

db.students.insertMany([
    { rollno: 1, name: "Ravi", age: 20, marks: 85 },
    { rollno: 2, name: "Sita", age: 19, marks: 92 },
    { rollno: 3, name: "Anu", age: 21, marks: 78 },
    { rollno: 4, name: "Kiran", age: 20, marks: 88 }
])

// Display all records
db.students.find()

// Find students with marks above 80
db.students.find({ marks: { $gt: 80 } })

// Display only two records
db.students.find().limit(2)

// Sort by marks in ascending order
db.students.find().sort({ marks: 1 })

// Sort by marks in descending order
db.students.find().sort({ marks: -1 })

// Create an index on name
db.students.createIndex({ name: 1 })

// Aggregate: calculate average marks
db.students.aggregate([
    {
        $group: {
            _id: null,
            averageMarks: { $avg: "$marks" }
        }
    }
])
