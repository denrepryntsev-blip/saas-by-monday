# Footer Components Documentation

## Огляд

Створено три варіанти Footer компонентів для різних потреб вашого сайту SaaSbyMonday:

1. **Footer** - Повноцінний footer для головної сторінки
2. **FooterWithNewsletter** - Footer з секцією підписки на новини
3. **FooterMinimal** - Мінімалістичний footer для сторінок документації

---

## 1. Footer (Основний)

### Використання

```tsx
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <div>
      {/* Your content */}
      <Footer />
    </div>
  )
}
```

### Особливості

- ✅ Логотип SaaSbyMonday з анімацією
- ✅ Короткий опис продукту
- ✅ Соціальні мережі (GitHub, Twitter, LinkedIn, Email)
- ✅ 4 колонки навігації: Product, Resources, Legal
- ✅ Копірайт з динамічним роком
- ✅ Бейдж "Lifetime Updates" з анімацією
- ✅ Повністю респонсивний дизайн
- ✅ Відповідає стилю SaaSbyMonday (primary color #46d27d)

### Структура секцій

**Product:**
- Pricing (scroll to pricing section)
- Documentation
- Get Access
- Changelog

**Resources:**
- Getting Started
- Examples
- Blog
- Community

**Legal:**
- Privacy Policy
- Terms of Service
- License
- Refund Policy

---

## 2. FooterWithNewsletter (З підпискою)

### Використання

```tsx
import { FooterWithNewsletter } from "@/components/FooterWithNewsletter"

export default function Page() {
  return (
    <div>
      {/* Your content */}
      <FooterWithNewsletter />
    </div>
  )
}
```

### Особливості

Всі функції основного Footer, плюс:

- ✅ Секція підписки на новини вгорі
- ✅ Красивий градієнтний фон для newsletter секції
- ✅ Форма з валідацією email
- ✅ Стан завантаження при відправці
- ✅ Повідомлення про успішну підписку
- ✅ Респонсивна форма (вертикальна на мобільних)

### Інтеграція з API

Наразі форма використовує симуляцію відправки. Для інтеграції з реальним API:

```tsx
const handleNewsletterSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setMessage("")

  try {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
    
    if (res.ok) {
      setMessage("Thanks for subscribing! 🎉")
      setEmail("")
    } else {
      setMessage("Something went wrong. Please try again.")
    }
  } catch (error) {
    setMessage("Error subscribing. Please try again.")
  } finally {
    setIsSubmitting(false)
  }
}
```

---

## 3. FooterMinimal (Мінімалістичний)

### Використання

```tsx
import { FooterMinimal } from "@/components/FooterMinimal"

export default function DocsPage() {
  return (
    <div>
      {/* Your docs content */}
      <FooterMinimal />
    </div>
  )
}
```

### Особливості

- ✅ Компактний дизайн (одна лінія на десктопі)
- ✅ Логотип SaaSbyMonday
- ✅ Основні посилання (Privacy, Terms, Docs)
- ✅ Соціальні мережі (GitHub, Twitter)
- ✅ Ідеально підходить для сторінок документації
- ✅ Мінімальна висота

### Коли використовувати

- Сторінки документації
- Внутрішні сторінки додатку
- Сторінки з багатьом контентом
- Коли потрібен ненав'язливий footer

---

## Налаштування кольорів

Всі компоненти використовують CSS змінні з `globals.css`:

```css
--primary: #46d27d;        /* Зелений SaaSbyMonday */
--brand-tertiary: #c9b9ff; /* Фіолетовий акцент */
--foreground: #18181b;     /* Темний текст */
--muted-foreground: #52525b; /* Сірий текст */
```

---

## Налаштування посилань

### Соціальні мережі

Змініть URL в компонентах:

```tsx
<a href="https://github.com/your-username" ...>
<a href="https://twitter.com/your-handle" ...>
<a href="https://linkedin.com/company/your-company" ...>
<a href="mailto:your-email@domain.com" ...>
```

### Навігаційні посилання

Замініть `#` на реальні шляхи:

```tsx
<Link href="/changelog">Changelog</Link>
<Link href="/blog">Blog</Link>
<Link href="/privacy">Privacy Policy</Link>
```

---

## Адаптивність

Всі компоненти повністю респонсивні:

- **Desktop (md+)**: Горизонтальний layout, 4 колонки
- **Tablet**: 2 колонки
- **Mobile**: Вертикальний stack, центрований контент

---

## Анімації

### Соціальні іконки
- Hover: зміна кольору на primary + білий текст
- Плавні переходи 300ms

### Логотип
- Hover: анімація spark-live
- Інтерактивні ефекти

### Lifetime Updates Badge
- Пульсуюча точка (animate-ping)
- Завжди видима

---

## Приклад використання на головній сторінці

Вже інтегровано в `app/page.tsx`:

```tsx
import { Footer } from "@/components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* Hero Section */}
      {/* Features */}
      {/* Pricing */}
      {/* FAQ */}
      
      <Footer />
    </div>
  )
}
```

---

## Додаткові можливості

### Додати нову секцію

```tsx
<div>
  <h3 className="text-sm font-semibold text-foreground mb-4">
    Support
  </h3>
  <ul className="space-y-3">
    <li>
      <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        Help Center
      </Link>
    </li>
  </ul>
</div>
```

### Додати нову соціальну мережу

```tsx
import { Youtube } from "lucide-react"

<a href="https://youtube.com/@channel" ...>
  <Youtube className="h-4 w-4 ..." />
</a>
```

---

## Технічний стек

- **React 18+** (Client Components)
- **Next.js 14+**
- **Tailwind CSS v4**
- **Lucide React** (іконки)
- **TypeScript**

---

## Підтримка браузерів

- ✅ Chrome/Edge (останні 2 версії)
- ✅ Firefox (останні 2 версії)
- ✅ Safari (останні 2 версії)
- ✅ Mobile Safari
- ✅ Chrome Mobile

---

## Accessibility (A11y)

- ✅ Семантичний HTML (`<footer>`, `<nav>`, `<ul>`)
- ✅ ARIA labels для іконок
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Screen reader friendly

---

## Продуктивність

- ✅ Client-side only де потрібно (форми, інтерактивність)
- ✅ Оптимізовані SVG іконки
- ✅ CSS transitions замість JS анімацій
- ✅ Lazy loading не потрібен (footer завжди внизу)

---

## Підтримка

Якщо у вас виникли питання або потрібна допомога:
- Перевірте документацію компонентів
- Перегляньте приклади використання
- Переконайтеся, що всі залежності встановлені

---

**Створено для SaaSbyMonday** 🚀
*Build with AI without the mess*

