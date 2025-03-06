const User = require("../modules/user");

async function bulkInsert(data, ordered = false) {
  return await User.insertMany(data, { ordered });
}

async function bulkDelete(data, ordered = false) {
  const deletes = data.map((user) => {
    return {
      deleteOne: {
        filter: { username: user.username },
      },
    };
  });

  const result = await User.bulkWrite(deletes, { ordered });

  return result;
}

async function bulkUpdate(data, ordered = false) {
  const updates = data.map((user) => {
    return {
      updateOne: {
        filter: { username: user.username },
        update: { $set: { age: user.age } },
      },
    };
  });

  return await User.bulkWrite(updates, { ordered });
}

async function bulkFind(data) {
  return await User.find({
    username: { $in: data },
  });
}

module.exports = {
  bulkDelete,
  bulkFind,
  bulkInsert,
  bulkUpdate,
};
