import axios from "axios";

const baseURL = "NorthWind_full_url/Categories";
console.log(baseURL, "Base Url");
const serviceUrl = "capm/HelloWorld";

const instance = axios.create({
  baseURL
});

const getInstance = axios.get({
  serviceUrl
});


export const getTableData = async (params = { $top: 100, $skip: 0 }) => {
  const { data } = await instance.get("/Categories", {
    params
  });

  return data.d?.results || data.d || data.value;
};

export const getUser = async() =>{
  const data = await getInstance.get("/HelloWorld");
  console.log(data, "Helo");
}
export const getTableCount = async () => {
  const { data } = await instance.get("/Categories/$count");
  return data;
};
