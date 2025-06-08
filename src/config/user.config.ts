import { userPaths } from "../constants/paths";

export const getUserConfig = () => {
  return {
    [userPaths.SIGNUP]: {
      baseUrl: process.env.base_url,
      url: process.env.user_sign_up_url,
    },
  };
};
