import axios from "axios";

/**
 * Axios instance for browser,
 * with `access-token` header injected
 */
export const apiClientBrowser = axios.create();
