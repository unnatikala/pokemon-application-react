export default async (url, header) => {
  const response = await fetch(url, header);
  if (response.status !== 401) {
    const jsonResponse = await response
      .json()
      .then((res) => res)
      .catch((e) => console.log(e));

    return {
      status: response.status,
      body: jsonResponse,
    };
  }
  const jsonResponse = await response
    .json()
    .then((res) => res)
    .catch((e) => console.log(e));
  return jsonResponse
    ? { status: response.status, body: jsonResponse }
    : { status: response.status };
};
