let addDate = require("date-fns/addDays");

let dateFunc = (x) => {
  let new_date = addDate(new Date(2020, 7, 22), x);
  return `${new_date.getDate()}-${
    new_date.getMonth() + 1
  }-${new_date.getFullYear()}`;
};

module.exports = dateFunc;
