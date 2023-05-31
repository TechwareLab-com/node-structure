
const getPagingData = (datas, page, limit) => {
  const { count: totalItems, rows: data } = datas;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return {
    totalItems,
    data,
    totalPages,
    currentPage,
  };
};
const getPagination = (page, size) => {
  const limit = size ? +size : 50;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
const  generateName =() => {
  let result = "";
  const length = 5;
  const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `${result}`;
};
module.exports = {
  getPagination, 
  getPagingData,
  generateName
};
