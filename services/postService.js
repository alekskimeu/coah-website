import http from "./httpService";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export async function fetchPosts() {
  return await http.get("/blog", config);
}
