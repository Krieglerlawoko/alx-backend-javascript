export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call with a simple timeout
    setTimeout(() => {
      resolve("API response");
    }, 1000);
  });
}
