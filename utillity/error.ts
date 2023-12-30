export const handleError = (err: any) => {
  const axiosError = err as any;
  if (axiosError?.response) {
    return axiosError.response.data;
  } else if (axiosError?.request) {
    return "Request made but no response received";
  } else {
    return axiosError?.message;
  }
}