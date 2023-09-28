"use strict";

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента
// и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера.
// Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта.
// Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

async function getUserData(id) {
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        if (!response.ok) {
            throw response.status;
        }
        const json = await response.json();
        return json;
    } catch (e) {
        if (e === 404) {
            throw new Error("Пользователь не найден.");
        }
        throw new Error("Что-то пошло не так...");
    }
}

getUserData(2)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));
