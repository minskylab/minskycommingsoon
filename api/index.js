import axios from "axios";

const addNewPotentialUser = ({ email }) => {
  return axios.post("https://content.minsky.cc/potential-users", {
    email: email
  });
};

export { addNewPotentialUser };
