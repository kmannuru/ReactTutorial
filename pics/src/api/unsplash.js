import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID cfe7f2161fa524572d6411a98c90ef296c48a2485da0fd8852d1e1935172e2c0"
  }
});
