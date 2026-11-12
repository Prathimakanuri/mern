
db.students.insert({
    rollno: 1,
    name: "Ravi",
    age: 20,
    course: "CSE"
})

db.students.insert({
    rollno: 2,
    name: "Sita",
    age: 19,
    course: "IT"
})

db.students.find()

db.students.find({ name: "Ravi" })

db.students.update(
    { rollno: 1 },
    { $set: { age: 21 } }
)

db.students.find({ rollno: 1 })

db.students.remove({ rollno: 2 })

db.students.find()
