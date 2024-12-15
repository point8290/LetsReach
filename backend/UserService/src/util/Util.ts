const httpStatusCode = (code: number): string => {
  switch (code) {
    case 500:
      return "Internal Server Error";
    case 404:
      return "Not Found";
    case 400:
      return "Bad Request";
    case 403:
      return "Forbidden";
    case 401:
      return "Unauthorized";
    default:
      return "Something Went Wrong";
  }
};

export { httpStatusCode };
