const db = require('./db');
const config = require('../config');


const useSpecs = 'id, email, encrypted_password, reset_password_token, reset_password_sent_at, remember_created_at, created_at, updated_at '

const getSingle = async function (id) {
    const rows = await db.query(
        `SELECT ${useSpecs}
        FROM users WHERE id=${id}`
    );
    return rows[0];
}

const getALL = async function () {
const rows = await db.query(
    `SELECT ${useSpecs}
    FROM users `
);
return rows
}

module.exports = {
    getSingle,
    getALL
}