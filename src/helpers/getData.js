import axios from "axios";

// apiye verdiğimiz endpoint için itek atıp verileri  döndüren bir fonk

const options = {
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": "ea477795a6mshb383e804aa90404p1459b6jsnd83ebdcf2cb5",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async (path) => {
  try {
    return await axios.get(path, options);
  } catch {
    console.log("verileri çekerken hata oluştu");
  }
};
