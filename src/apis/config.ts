// Dependencies
import axios  from "axios";
import { CONFIG } from "@/utils/config";

export const request = axios.create({
  baseURL: `${CONFIG.request_url}`
});