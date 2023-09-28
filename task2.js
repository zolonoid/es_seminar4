"use strict";

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента
// и использует fetch для отправки этих данных на удаленный сервер для сохранения.
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены,
// или отклоняется в случае ошибки.

async function saveUserData(userData) {
    try {
        const response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status !== 201) {
            throw 201;
        }
        const json = await response.json();
        return json;
    } catch (e) {
        if (e === 201) {
            throw new Error("Не удалось сохранить данные пользователя.");
        }
        throw new Error("Что-то пошло не так...");
    }
}

const user = {
    "name": "John Doe",
    "job": "unknown"
};

saveUserData(user)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));
