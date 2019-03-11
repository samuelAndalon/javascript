exports.promiseAll = promises => new Promise((resolve, reject) => {
  let resultArray = [], resolvedPromises = 0;
  promises.forEach((promise, index) => {
    promise.then(result => {
      resultArray[index] = result;
      if(++resolvedPromises === promises.length)
        resolve(resultArray);
    })
    .catch(error => {
      reject(error);
    });
  });
  if (promises.length === 0)
    resolve(resultArray);
});