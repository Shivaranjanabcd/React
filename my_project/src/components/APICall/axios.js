import axios from "axios";

const instance = axios.create({  // creating instance is very importent bcz, when we want to update our application i.e /V2/ insted of changing API url in all exsiting component we can change here at once.
  baseURL: "https://straightsums.co.uk/api/v1/",
});

export default instance;
