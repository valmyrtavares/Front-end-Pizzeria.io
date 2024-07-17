export const API_URL = "http://localhost:3333/";

export function GET_BTN_MENUS() {
  return {
    url: `${API_URL}/btnMenus `,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}
