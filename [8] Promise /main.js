function fetchDataFromMultipleAPIs(apiUrls) {
  const promises = apiUrls.map(apiUrl => {
    return fetch(apiUrl) 
      .then(response => response)
  });

  return Promise.all(promises)
    .then(results => results)
}
const apiUrls = ['https://github.com/H1K5ik/modsenPractice', 'https://github.com/H1K5ik/JS-Core-Advanced'];
fetchDataFromMultipleAPIs(apiUrls)
  .then(allData => console.log('Объединенные данные:', allData));