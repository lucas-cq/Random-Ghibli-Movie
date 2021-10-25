// This is the array that the ${randomMovie} fetches
const items = [
  `2baf70d1-42bb-4437-b551-e5fed5a87abe`,
  `12cfb892-aac0-4c5b-94af-521852e46d6a`,
  `58611129-2dbc-4a81-a72f-77ddfc1b1b49`,
  `ea660b10-85c4-4ae3-8a5f-41cea3648e3e`,
  `4e236f34-b981-41c3-8c65-f8c9000b94e7`,
  `ebbb6b7c-945c-41ee-a792-de0e43191bd8`,
  `1b67aa9a-2e4a-45af-ac98-64d6ad15b16c`,
  `ff24da26-a969-4f0e-ba1e-a122ead6c6e3`,
  `0440483e-ca0e-4120-8c50-4c8cd9b965d6`,
  `45204234-adfd-45cb-a505-a8e7a676b114`,
  `dc2e6bd1-8156-4886-adff-b39e6043af0c`,
  `90b72513-afd4-4570-84de-a56c312fdf81`,
  `cd3d059c-09f4-4ff3-8d63-bc765a5184fa`,
  `112c1e67-726f-40b1-ac17-6974127bb9b9`,
  `758bf02e-3122-46e0-884e-67cf83df1786`,
  `2de9426b-914a-4a06-a3a0-5e6d9d3886f6`,
  `45db04e4-304a-4933-9823-33f389e8d74d`,
  `67405111-37a5-438f-81cc-4666af60c800`,
  `578ae244-7750-4d9f-867b-f3cd3d6fecf4`,
  `5fdfb320-2a02-49a7-94ff-5ca418cae602`,
  `d868e6ec-c44a-405b-8fa6-f7f0f8cfb500`
]
// This is the code that selects a random string from the array
const randomMovie = items[Math.floor(Math.random()* items.length)];

// This is the code that fetches the actual API
fetch(`https://ghibliapi.herokuapp.com/films/${randomMovie}`)
  .then(function(response){
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  }) 
// If the API is successfully found, this will output the data into HTML
  .then(function(data){
    const ghibliElement = document.querySelector('.random-ghibli');
    ghibliElement.innerHTML = `
    <h2>${data.title}</h2>
     <figure>
      <img src="${data.image}" alt="temp!">
      <figcaption>${data.title}. Original: ${data.original_title}</figcaption>
    </figure>
    `;
    console.log(data);
  })
  // If the API is not found, this will display an error to the user
  .catch(function(err){
    console.log(err);
  });
