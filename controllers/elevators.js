const db = require('./db');
const config = require('../config');

const eleFields = 'column_id, id, SerialNumber, Model, Type, Status, CommisionDate, LastInspectionDate, IspectionCert, Information, Notes, created_at, updated_at '


const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${eleFields}
      FROM elevators WHERE id=${id} `
    );
    return rows[0]
}

const getALL = async function () {
    const rows = await db.query(
      `SELECT ${eleFields}
      FROM elevators `
    );
    return rows
}






module.exports = {
    getSingle,
    getALL
}