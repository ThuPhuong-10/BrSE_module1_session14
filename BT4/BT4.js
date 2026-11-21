const original = {
    name: 'Bob',
    age: 30,
};
const copy = {
    name: 'Bob',
    age: 30,
};
// const copy = structuredClone(original); (gọn hơn)
copy['name'] = 'Charlie';
console.log(original);
console.log(copy);

