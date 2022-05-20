export function useApi() {
  async function getMovies(text) {
    const rawResponse = await fetch(
      `https://api.tvmaze.com/search/shows?q=${text}`
    );

    const response = await rawResponse.json();

    return response;
  }
  return { getMovies };
}
