use("college");

// Create collection
db.createCollection("students");

// Show collections
db.getCollectionNames();

// Insert student
db.students.insertOne({
    rollno: 1,
    name: "Ravi",
    age: 20
});

// Display records
db.students.find();

// Drop collection
db.students.drop();

// Show collections
db.getCollectionNames();

// Drop database
db.dropDatabase();