exports.soon = resolvedValue => new Promise(resolve => {
  setTimeout(() => resolve(resolvedValue), Math.random() * 1000);
});