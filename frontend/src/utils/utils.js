const settingsApi = {
  url: "http://api.vden.mesto.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  },
};

const authUrl = "http://api.vden.mesto.nomoredomains.icu";

export { settingsApi, authUrl };

