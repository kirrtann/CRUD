import axios from "axios";

const commonapi = "https://simple-crud-node.onrender.com/api";

export default class rest {
  
  static async get(url) {
    try {
      const baseapi = axios.create({
        baseURL: commonapi,
        headers: {
          Accept: "Application/json",
        },
      });
      const reponse = baseapi.get(url);
      console.log(reponse);

      return reponse;
    } catch (error) {
      console.log(error);
    }
  }

  static async post(url, data) {
    console.log(data);
    try {
      const baseapi = axios.create({
        baseURL: commonapi,
        headers: {
          Accept: "Application/json",
        },
      });
      const reponse = await baseapi.post(url, data);
      console.log(reponse);

      return reponse;
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(url, id) {
    console.log(id);
    try {
      const baseapi = axios.create({
        baseURL: commonapi,
        headers: {
          Accept: "Application/json",
        },
      });
      const reponse = await baseapi.delete(`${url}/${id}`);
      console.log(reponse);

      return reponse;
    } catch (error) {
      console.log(error);
    }
  }

  static async put(url, userId) {
    const id = userId?.userId;
    console.log(id);
    try {
      const baseapi = axios.create({
        baseURL: commonapi,
        headers: {
          Accept: "Application/json",
        },
      });
      const reponse = await baseapi.put(`${url}/${id}`, userId);
      console.log(reponse);

      return reponse.data;
    } catch (error) {
      console.log(error);
    }
  }
}
