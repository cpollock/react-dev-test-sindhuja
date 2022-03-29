const genRandomStr = () => {
  const size = 4;
  var result = "";
  const chars = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < size; i++)
    result += chars[Math.floor(Math.random90 * chars.length)];
  return result;
};

export default genRandomStr;
