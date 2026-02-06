/**
 * Tailwind CSS v4 Configuration
 * 
 * Примітка: Tailwind v4 використовує CSS-first підхід.
 * Основна конфігурація (кольори, шрифти, тощо) знаходиться в app/globals.css через @theme.
 * 
 * Цей файл використовується для:
 * - Визначення content paths (де шукати класи)
 * - Додавання плагінів
 * - Сумісності з інструментами (shadcn/ui CLI, IDE підсвітка)
 */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  // Тема визначається в globals.css через @theme
  // Тут можна додати додаткові налаштування, якщо потрібно
  theme: {
    extend: {},
  },
  
  plugins: [],
};

export default config;

