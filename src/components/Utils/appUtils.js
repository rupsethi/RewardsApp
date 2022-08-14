// exposed function
export const assignUniqueID = () =>
  Date.now() + (Math.random() * 9999999).toFixed();
