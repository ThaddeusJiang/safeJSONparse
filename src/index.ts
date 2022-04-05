export const safeJSONparse = (value: string, handleError?: (error: unknown) => void) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    handleError?.(e);
    return undefined;
  }
};
