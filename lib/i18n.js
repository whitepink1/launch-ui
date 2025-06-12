import en from "@/locales/en.json";
import ua from "@/locales/ua.json";

const dictionaries = {en, ua};

export const getDictionary  = (locale) => {
    return dictionaries[locale] || dictionaries.en;
}