export type SettingsState = {
  direction: "rtl" | "ltr";
  language: string;
  currentTab: string;
};

export const initialState: SettingsState = {
  direction: "ltr",
  language: "en",
  currentTab: ""
}
