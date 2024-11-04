export const getErrorFromApi = (
  res: any,
  defaultMessage = "Something went wrong!",
) => {
  if (typeof res === "string") {
    return res;
  }
  if (res?.response) {
    const error =
      res?.response?.data?.detail &&
      typeof res?.response?.data?.detail === "string"
        ? res?.response?.data?.detail
        : res?.response?.data?.detail?.[0]?.msg &&
          typeof res?.response?.data?.detail?.[0]?.msg === "string"
        ? res?.response?.data?.detail?.[0]?.msg
        : res?.response?.data?.message
        ? res?.response?.data?.message
        : res?.response?.data?.error?.message;
    if (error) return error;
  }

  if (res?.data) {
    const error = res?.data?.error?.message;
    if (error) return error;
  }

  return res?.message || defaultMessage;
};
