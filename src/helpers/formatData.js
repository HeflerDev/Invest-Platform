const formatData = (obj) => {
  const arr = [];

  Object.keys(obj)
      .forEach((key) => arr.push({month: key, value: obj[key]}));

  return arr;
};

export default formatData;
