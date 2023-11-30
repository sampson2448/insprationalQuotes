console.log("connected");
const x = document.getElementById("quotes");
async function getQuotes() {
  const url =
    "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": /*hiding api key for security purposes */,
      "X-RapidAPI-Host":
        "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const myObject = JSON.parse(result);
    placeQuotes(myObject);
  } catch (error) {
    console.error(error);
  }
}

function placeQuotes(quotes) {
  return (x.innerHTML = x.innerHTML = quotes.text);
}
