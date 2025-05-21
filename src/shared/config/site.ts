export interface ISiteConfig {
  name: string;
  description: string;
}

export const NO_INDEX_PAGE = { robots: { index: false, follow: false } };

export const siteConfig = {
  name: "Configuration App",
  description:
    "это мощное и интуитивно понятное приложение, предназначенное для управления и настройки различных параметров системы. Оно позволяет пользователям легко настраивать приложения, устройства и сервисы, обеспечивая гибкость и контроль.",
};
