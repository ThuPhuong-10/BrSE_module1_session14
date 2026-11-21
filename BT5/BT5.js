let students = [];
let studentNumber = 3;
for (let i = 0; i < 3; i++) {
// nhập thông tin
let studentName = prompt('Nhập tên sinh viên');
let age = +prompt('Nhập tuổi');
let id = prompt('Nhập mã số sinh viên');

// thêm vào danh sách
students.push({
    name: studentName,
    age: age,
    ID: id,
});
}
console.log(students);

// in danh sách sinh viên
for (let student of students) { //duyệt qua các đối tượng trong mảng (For...of)
    console.log('-----------');
    console.log('Tên: ', student['name']);
    console.log('Tuổi: ', student['age']);
    console.log('ID: ', student['ID']);
  
}

//xóa sinh viên theo ID
let deleteID = prompt('Nhập ID');
let found = false;
for (let i = 0; i < students.length; i++) {
    if (deleteID === students[i].ID) {
        students.splice(i, 1);
        found = true;
        break;
    } 
}
if (found) {
    console.log('Đã xóa thành công');
} else {
    console.log('Không khớp ID');
}

console.log(students);
