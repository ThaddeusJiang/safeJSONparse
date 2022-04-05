export const safeJSONparse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};
