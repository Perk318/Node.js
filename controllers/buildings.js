const db = require('./db');
const config = require('../config');

const bat = require('./batteries')
const buildSpecs = ' customer_id, address_id, id, FullNameOfBuildingAdmin, EmailOfAdminOfBuilding, PhoneNumOfBuildingAdmin, FullNameOfTechContactForBuilding, TechContactEmailForBuilding, TechContactPhoneForBuilding, created_at, updated_at'


const getSingle = async function (id) {
    const rows = await db.query(
      `SELECT ${buildSpecs}
      FROM buildings WHERE id=${id} `
    );
    return rows[0]
}

const getALL = async function () {
    const rows = await db.query(
      `SELECT ${buildSpecs}
      FROM buildings `
    );
    return rows
}

const getBats = async function (id) {
    const rows = await db.query(
        `SELECT ${bat.gatherAll}
        FROM batteries WHERE building_id =${id} `
    );
    return rows
}




module.exports = {
    getSingle,
    getALL,
    getBats,
   
}