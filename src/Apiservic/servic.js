import apiend from "../ApiEndpoint/ApiEnd";
import rest from "../commnapi/CommanApi";
// api get function 
export const apicall = async () => {
  console.log("servis");
  const data = await rest.get(apiend.get);
  console.log(data?.data);
  return data?.data;
};
// api post function 
export const postdaata = async (action) => {
  console.log(action);
  const data = await rest.post(apiend.post, action);
  return data;
};
// api delete function
export const deleteapidata = async (userid) => {
  console.log(userid);
  const data = await rest.delete(apiend.delete, userid);
  return data;
};
//api update function 
export const updateda = async (task) => {
  console.log(task);
  const data = await rest.put(apiend.put, task);
  return data;
};
