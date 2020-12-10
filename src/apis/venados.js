import axios from 'axios';

class API {
  constructor(urlAPI) {
    if (API.instance) {
      return API.instance;
    }
    this.url = urlAPI;
    const headers = { Accept: 'application/json' };
    this.http = axios.create({
      baseURL: this.url,
      headers
    });
    API.instance = this;
  }

  trae(endpoint) {
    return this.http.get(endpoint);
  }
}

const venados = new API('http://localhost:3000');
export default venados;
