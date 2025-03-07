const { Op } = require("sequelize");
const User = require("../modules/sequelize");

async function bulkInsert(data) {
  return await User.bulkCreate(data);
}

async function bulkDelete(data) {
  return await User.destroy({
    where: {
      username: data,
    },
  });
}

// FIXME: ---- this is not working properly , it creates multiple records
// in sequelize there is no functionality that directlly allows you to update in this way but
// we can achive the same results as in mongoose with a for loop but that will cause a bottoleneak
// or huge number of connections , thus try to find another way to do it .
// but normally such things are not common
async function bulkUpdate(data) {
  return await User.bulkCreate(data, {
    updateOnDuplicate: ["username", "age"],
  });
}

async function bulkFind(data) {
  return await User.findAndCountAll({
    where: {
      username: {
        [Op.in]: data,
      },
    },
  });
}

module.exports = {
  bulkDelete,
  bulkFind,
  bulkInsert,
  bulkUpdate,
};
