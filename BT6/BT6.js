let listBooks = [];
let choice;
do {
    choice = +prompt(`
--- QUẢN LÝ SÁCH ---
1. Thêm sách mới
2. Hiển thị danh sách
3. Tìm sách theo tên
4. Xóa sách theo ID
5. Thoát chương trình

Nhập lựa chọn:
`);

switch (choice) {
    case 1: //tạo danh sách
        let numberBooks = +prompt('Nhập số lượng sách cần thêm');
        for (let i = 0; i < numberBooks; i++) {
        let nameBook = prompt('Nhập tên sách');
        let author = prompt('Nhập tên tác giả');
        let year = +prompt('Nhập năm xuất bản');
        let id = prompt('Nhập id sách');

        listBooks.push({   //thêm danh sách
            name: nameBook,
            author: author,
            year: year,
            id: id
        });
        };
    break;

    case 2: //in ra danh sách
        for (let book of listBooks) {
        console.log('-----------');
        console.log('Tên sách: ', book.name);
        console.log('Tác giả: ', book.author);
        console.log('Năm xuất bản: ', book.year);
        console.log('Số ID: ', book.id);
    };
    break;

    case 3: //tìm sách
        let findBook = prompt('Nhập tên sách cần tìm');
        let found = false;
        for (let book of listBooks) {
            if (book.name.toLowerCase().includes(findBook.toLowerCase())) {
            found = true;
            console.log('Tên sách: ', book.name);
            console.log('Tác giả: ', book.author);
            console.log('Năm xuất bản: ', book.year);
            console.log('Số ID: ', book.id);  
            break;      
            }
            if (!found) {
                console.log('Không tìm thấy sách'); 
            }
        };
    break;

    case 4: //xóa sách
        let findId = prompt('Nhập ID');
        for (let i = 0; i< listBooks.length; i++) {
            if (findId === listBooks[i].id) {
                listBooks.splice(i, 1);
                console.log('Đã xóa thành công');
                console.log('Danh sách hiện tại là: ',listBooks);
                break;        
            } else {
                console.log('Sách không tồn tại');
            }
        };
    break;

    case 5: //thoát
        console.log('Đã thoát chương trình');
    break;

    default:
        console.log('lựa chọn không hợp lệ, mời nhập lại');
    break;
}
} while (choice !== 5)







