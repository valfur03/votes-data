export const generateUniqueId = () => {
  return crypto.randomUUID().replace(/-/g, "");
};
