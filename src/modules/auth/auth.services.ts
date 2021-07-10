import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";

// For services that does not need to be shared in multiple modules
// place it in the module

const apiAuthUrl = `${config.apiBaseUrl}/api/auth`;

export async function signup(email: string, password: string) {
  try {
    const res = await apiClientBrowser.post(`${apiAuthUrl}/signup`, {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
