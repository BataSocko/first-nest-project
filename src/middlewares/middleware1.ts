export default (req, res, next) => {
  console.log('reached middleware number 1....');
  next();
};
