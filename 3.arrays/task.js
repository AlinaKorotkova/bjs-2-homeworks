//Задание 1
function compareArrays(arr1, arr2) {
    let result = (arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]));
    return result;
}

//Задание 2
function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter((user) => gender === user.gender).map(userAge => userAge.age).reduce((acc, item, index, userAge) => acc + item/userAge.length,0)
    return result 
}