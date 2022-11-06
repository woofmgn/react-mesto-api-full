const settingsApi = {
  url: "https://api.vden.mesto.nomoredomains.icu",
  headers: {
    "Accept": 'application/json',
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  },
};

const authUrl = "https://api.vden.mesto.nomoredomains.icu";

export { settingsApi, authUrl };

