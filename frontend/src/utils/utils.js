const jwtUser = localStorage.getItem("token");

const settingsApi = {
  url: "http://api.vden.mesto.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${jwtUser}`
  },
};

const authUrl = "http://api.vden.mesto.nomoredomains.icu";

export { settingsApi, authUrl, jwtUser };

