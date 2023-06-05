const encodedParams = new URLSearchParams();
encodedParams.set("q", "Hello, world!");
encodedParams.set("target", "es");
encodedParams.set("source", "en");

const options = {
  method: "POST",

  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": "ccfcbc6ff3msh7b11427e21ebbc7p133cadjsn11968d7de67e",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
  data: encodedParams,
};

fetch(
  "https://google-translate1.p.rapidapi.com/language/translate/v2",
  options
);
