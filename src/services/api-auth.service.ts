import { config } from "src/constants/config";
import { apiClientBrowser } from "src/lib/request";
import { CustomerLoginResponse } from "./api-auth.types";

// For services that to be shared in multiple modules
// place it in `src/services`

const apiAuthUrl = `${config.apiBaseUrl}/api/auth`;

export async function signin(email: string, password: string) {
  try {
    const res = await apiClientBrowser.post<CustomerLoginResponse>(`${apiAuthUrl}/signin`, {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

export async function fakeSignin() {
  await delay(1000);
}

// ***************************************
// private
function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
