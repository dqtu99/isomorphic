export const toCamelCase = (str: string) => {
  return str
    .replace(/([-_]\w)/g, (match) => match[1].toUpperCase()) // Chuyển đổi ký tự sau dấu '-' hoặc '_' thành chữ hoa
    .replace(/^\w/, (match) => match.toLowerCase()); // Chuyển ký tự đầu tiên thành chữ thường
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertKeysToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToCamelCase(item));
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const camelCaseKey = toCamelCase(key);
      acc[camelCaseKey] = convertKeysToCamelCase(obj[key]);
      return acc;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {} as any);
  }
  return obj;
};
