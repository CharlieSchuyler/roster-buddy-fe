import axios from "axios";

const checkAccess = async () => {

  const response = await axios.post(
    "http://rbserver.charlieschuyler.com/user",
    {
      Authorization: localStorage.getItem("accessToken"),
    }
  );
  console.log(response.data)
  if (!response.data.error) {
    return { error: true }
  }
  return { error: false }

};



export default checkAccess
