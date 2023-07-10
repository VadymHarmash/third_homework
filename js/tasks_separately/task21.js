// Створіть об'єкт "Університет" з методами для додавання студента, видалення студента, отримання інформації про студента за його ідентифікатором та отримання списку студентів певного курсу. Реалізуйте також функцію, яка дає змогу отримати список студентів певного факультету. Використовуйте об'єкти та їх методи для вирішення задачі.

console.log('TASK 21'.padStart(20, '_').padEnd(40, '_'))

const university = {
    students: [],

    addStudent(course, faculty, name) {
        this.students.push({
            id: this.students.length + 1,
            course: course,
            faculty: faculty,
            name: name
        })
    },

    removeStudent(id) {
        const filtered_students = this.students.filter(student => student.id !== id)
        this.students = filtered_students
    },

    getInfoOfStudent(id) {
        return this.students.filter(student => student.id === id)
    },

    getStudentsByCourse(course) {
        const students_by_course = this.students.filter(student => student.course === course)
        return students_by_course
    },

    getStudentsByFaculty(faculty) {
        const students_by_faculty = this.students.filter(student => student.faculty === faculty)
        return students_by_faculty
    }
}

university.addStudent(4, 'Computer Engineering', {firstName: 'Vadym', lastName: 'Harmash'})
university.addStudent(3, 'Computer Sciences', {firstName:'Ruslan', lastName: 'Stepanenko'})
university.addStudent(2, 'Computer Sciences', {firstName:'Julia', lastName: 'Kravets'})
university.addStudent(2, 'Computer Sciences', {firstName:'Ihor', lastName: 'Nesterenko'})
university.addStudent(4, 'Computer Engineering', {firstName:'Yaroslav', lastName: 'Kotyk'})
university.addStudent(4, 'Computer Engineering', {firstName:'Vyacheslav', lastName: 'Kupriy'})

university.removeStudent(3)
university.removeStudent(1)

console.log(university.getStudentsByFaculty('Computer Sciences'))
console.log(university.getStudentsByCourse(3))
console.log(university.getStudentsByCourse(4))
console.log(university.getInfoOfStudent(2))
console.log(university.getInfoOfStudent(3))
console.log(university.getInfoOfStudent(4))