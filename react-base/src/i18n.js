import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traduções de exemplo
const resources = {
  EN: {
    translation: {
      welcome: 'Welcome',
      language: 'Language',
      english: 'English',
      portuguese: 'Portuguese',
    },
  },
  PT: {
    translation: {
      welcome: 'Bem-vindo',
      language: 'Idioma',
      english: 'Inglês',
      portuguese: 'Português',
    },
  },
};

i18n
  .use(initReactI18next) // Passa a configuração para o react-i18next
  .init({
    resources,
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt', // Caso o idioma não esteja disponível
    interpolation: {
      escapeValue: false, // Não é necessário escapar os valores
    },
  });

export default i18n;
