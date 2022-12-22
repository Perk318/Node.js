const db = require('./db');
const config = require('../config');


const gatherAll = ' employee_id, building_id, id, Type, Status, CommissionDate, LastInspectionDate, OperationsCert, Information, Notes, created_at, updated_at'
const colSpecs = ' battery_id, id, Type, NumOfFloorsServed, Status, Information, Notes, created_at, updated_at' 
 



const getSingle = async function (id) {
        const rows = await db.query(
            `SELECT ${gatherAll}
            FROM batteries WHERE id=${id}`
        );
        return rows[0];
}

const getALL = async function () {
    const rows = await db.query(
        `SELECT ${gatherAll}
        FROM batteries `
    );
    return rows
}

const getColumns = async function (id) {
    const rows = await db.query(
        `SELECT ${colSpecs}
        FROM columns WHERE battery_id=${id}`
    );
    return rows[0]
}









module.exports = {
    getSingle,
    getALL,
    getColumns,
    gatherAll
}