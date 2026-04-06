export type Lang = 'uk' | 'en';

export interface TechBlock {
  prefix: string;
  mark: string;
  suffix: string;
}

export interface ProjectData {
  slug: string;
  liveUrl?: string;
  githubUrl?: string;
  titleStyle?: React.CSSProperties;
  titleParts?: { text: string; color?: string }[];
  content: Record<Lang, {
    tryIt: string;
    intro: string[];
    sections: {
      heading: string;
      items: (string | TechBlock)[];
    }[];
  }>;
}

export const projects: ProjectData[] = [
  {
    slug: 'amusements',
    liveUrl: 'https://amusements.vercel.app',
    titleStyle: {
      background: 'linear-gradient(to bottom, var(--text-primary) 0%, rgba(128,128,128,0.25) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.03em',
    },
    titleParts: [{ text: 'Amusements' }],
    content: {
      uk: {
        tryIt: 'Відвідати сайт',
        intro: [
          'Просто моє нове, красиве портфоліо :)',
          'Мінімалізм, швидкість та сучасні візуальні рішення в одному флаконі.',
        ],
        sections: [
          {
            heading: 'Цифрова вітрина моїх проектів',
            items: [
              'Це не просто сайт-візитка, а ретельно пропрацьований інтерфейс з акцентом на типографіку та анімації. Тут зібрані всі мої останні розробки та експерименти з дизайном.',
            ],
          },
          {
            heading: 'Особливості реалізації:',
            items: [
              'Сучасний UI: використання Geist Sans та градієнтних акцентів для преміального вигляду.',
              'Максимальна швидкість: оптимізована збірка на Vercel для миттєвого завантаження.',
              'Perfect Response: ідеальна адаптивність під будь-які розміри екранів.',
              'Micro-interactions: плавні переходи та ховер-ефекти, що створюють відчуття живого продукту.',
            ],
          },
          {
            heading: 'Технологічний стек:',
            items: [
              { prefix: '• Frontend на базі ', mark: 'Next.js + TypeScript', suffix: ', що гарантує легкість та продуктивність.' },
              { prefix: '• Стилізація через ', mark: 'Tailwind CSS v4', suffix: ' з використанням кастомних градієнтів та скляних ефектів.' },
              '• Хостинг та деплой на платформі Vercel.',
            ],
          },
        ],
      },
      en: {
        tryIt: 'Visit Website',
        intro: [
          'Just my new, beautiful portfolio :)',
          'Minimalism, speed, and modern visual solutions all in one place.',
        ],
        sections: [
          {
            heading: 'Digital Showcase of My Projects',
            items: [
              "This isn't just a business card site; it's a carefully crafted interface with a focus on typography and animations. It features all my latest developments and design experiments.",
            ],
          },
          {
            heading: 'Implementation Details:',
            items: [
              'Modern UI: using Geist Sans and gradient accents for a premium look.',
              'Max Speed: optimized build on Vercel for instant loading.',
              'Perfect Response: seamless adaptability across all screen sizes.',
              'Micro-interactions: smooth transitions and hover effects that make the product feel alive.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• Built with ', mark: 'Next.js + TypeScript', suffix: ' for lightweight performance.' },
              { prefix: '• Styling via ', mark: 'Tailwind CSS v4', suffix: ' utilizing custom gradients and glassmorphism.' },
              '• Hosted and deployed on Vercel.',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'emailSender',
    githubUrl: 'https://github.com/yuriiavr/mailer-front',
    titleParts: [{ text: 'Email', color: 'orange' }, { text: 'Sender' }],
    content: {
      uk: {
        tryIt: 'GitHub',
        intro: [
          'EmailSender — це повнофункціональний Full-stack додаток для професійного керування розсилками. Побудований на стеку React, Node.js, Redis, що дозволяє стабільно працювати з великими обсягами даних.',
        ],
        sections: [
          {
            heading: 'Про проект',
            items: [
              'Система забезпечує повний контроль над процесом: від створення візуального контенту листа до його доставки кінцевому отримувачу.',
              'Унікальною особливістю є розширена адмін-панель для керування SMTP-інфраструктурою. Ви можете додавати поштові сервери, встановлювати денні ліміти та моніторити стан у реальному часі (статуси Free, Busy, або автоматичне визначення Ban).',
              'Технічна реалізація включає Redis для надійного керування чергами (Message Queuing), функцію відкладеної відправки (Schedule Send) та систему аналітики Open Rate за допомогою трекінг-пікселів.',
              'З міркувань безпеки та конфіденційності SMTP-даних, відкритий доступ до робочої версії недоступний, але код повністю відкритий у репозиторії.',
            ],
          },
          {
            heading: 'Технологічний стек:',
            items: [
              { prefix: '• Frontend: ', mark: 'React', suffix: ' з кастомним UI для email-редактора.' },
              { prefix: '• Backend: ', mark: 'Node.js + Redis', suffix: ' для черг та планувальника відправок.' },
              '• SMTP-інфраструктура з балансуванням навантаження між серверами.',
            ],
          },
        ],
      },
      en: {
        tryIt: 'GitHub',
        intro: [
          'EmailSender is a comprehensive Full-stack application for professional newsletter management. Built on React, Node.js, Redis to handle high-volume data loads with stability.',
        ],
        sections: [
          {
            heading: 'About the Project',
            items: [
              'The system provides total control over the mailing process: from visual template creation to final delivery to the recipient.',
              'A standout feature is the advanced Admin Dashboard for SMTP infrastructure management — add mail servers, set daily sending limits, and monitor real-time status (Free, Busy, or automatic Ban detection).',
              'The technical implementation leverages Redis for robust message queuing, scheduled sending (Schedule Send), and an integrated analytics system tracking Open Rates via tracking pixels.',
              'Due to SMTP credential security, a live demo is not available. However, the complete backend and frontend code is available in the repository.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• Frontend: ', mark: 'React', suffix: ' with custom UI for the email editor.' },
              { prefix: '• Backend: ', mark: 'Node.js + Redis', suffix: ' for queuing and send scheduling.' },
              '• SMTP infrastructure with load balancing across multiple servers.',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'passwordManager',
    githubUrl: 'https://github.com/yuriiavr/password-saver',
    titleParts: [{ text: 'Password Manager' }],
    content: {
      uk: {
        tryIt: 'GitHub',
        intro: ['Ваше досконале безпечне сховище паролів'],
        sections: [
          {
            heading: 'Про проект',
            items: [
              "У сучасному цифровому світі керування незліченними паролями може стати справжнім кошмаром. Ось тут на допомогу приходить Password Manager – ваше рішення для безпечного, зручного та інтелектуального керування паролями.",
              "Основний принцип: ви створюєте єдиний, зашифрований файл — особисте сховище паролів. Зберігайте його на ПК, синхронізуйте з Google Диском або носіть на USB-флешці.",
              'Вся безпека ґрунтується на вашому майстер-паролі. Без нього інформація залишається неприступною, навіть якщо хтось отримає доступ до зашифрованого файлу.',
              'Лише кількома кліками ви можете миттєво скопіювати будь-який пароль до буфера обміну. Password Manager – ваш особистий супутник кібербезпеки!',
            ],
          },
          {
            heading: 'Технологічний стек:',
            items: [
              { prefix: '• Десктопний додаток на ', mark: 'Electron', suffix: ' — кросплатформова розробка.' },
              '• AES-256 шифрування файлу сховища.',
              '• Локальне збереження — без хмарних серверів, повна конфіденційність.',
            ],
          },
        ],
      },
      en: {
        tryIt: 'GitHub',
        intro: ['Your Perfect Secure Password Vault'],
        sections: [
          {
            heading: 'About the Project',
            items: [
              "In today's digital world, managing countless passwords can become a real nightmare. Password Manager is your all-in-one solution for secure, convenient, and intelligent password management.",
              "The core principle: you create a single, encrypted file that serves as your personal password vault. Store it on your PC, sync it with Google Drive, or keep it on a USB drive.",
              'All security relies on your master password. Without it, your data remains impenetrable, even if someone gains access to the encrypted file.',
              'With just a few clicks, instantly copy any password to your clipboard. Password Manager is your personal cybersecurity companion!',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• Desktop app built with ', mark: 'Electron', suffix: ' — cross-platform development.' },
              '• AES-256 encryption for the vault file.',
              '• Local storage only — no cloud servers, full privacy.',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'luna',
    liveUrl: 'https://yuriiavr.github.io/luna',
    titleParts: [
      { text: 'L' },
      { text: 'U', color: '#38b6ff' },
      { text: '\nN' },
      { text: 'A', color: '#ffde59' },
    ],
    content: {
      uk: {
        tryIt: 'Відвідати сайт',
        intro: [
          'LUNA (League Ukrainian News App) – проект для вдосконалення навичок роботи з React та Node.js. Підтримує реєстрацію користувачів, вхід та плавну навігацію між сторінками.',
        ],
        sections: [
          {
            heading: 'Про проект',
            items: [
              'Більша частина контенту управляється через MongoDB та бекенд-функціонал — автентифікація, статті, панель користувача.',
              'Платформа створювалась для перекладу новин про League of Legends українською мовою: оновлення, офлайн-події, кіберспортивні турніри — все рідною мовою.',
              'Хоча проект не досяг великого успіху, він навчив мене хостингу, SEO-оптимізації та багатьом нюансам веб-розробки.',
            ],
          },
          {
            heading: 'Особливості сайту:',
            items: [
              '🌗 Світлі та темні теми зі збереженням налаштувань.',
              '📖 Управління контентом: всі статті в MongoDB, бекенд підтримує подачу матеріалів.',
              "📕 Історії чемпіонів: перекладені лорні матеріали у спеціальному розділі.",
              '🥇 Панель пошуку команди: реєстрація та розміщення запитів на тімфайнд з автоочищенням.',
            ],
          },
          {
            heading: 'Технологічний стек:',
            items: [
              { prefix: '• Frontend: ', mark: 'React', suffix: ' з контекстним управлінням станом.' },
              { prefix: '• Backend: ', mark: 'Node.js + MongoDB', suffix: ' — автентифікація, API, збереження контенту.' },
            ],
          },
        ],
      },
      en: {
        tryIt: 'Website',
        intro: [
          'LUNA (League Ukrainian News App) — a project built to enhance React and Node.js skills. Supports user registration, login, and smooth navigation.',
        ],
        sections: [
          {
            heading: 'About the Project',
            items: [
              'Most content is managed through MongoDB and backend functionalities — authentication, articles, and user dashboard.',
              'The platform was created to translate League of Legends news into Ukrainian: patches, offline events, esports tournaments — all in the native language.',
              "While the project didn't achieve significant success, it taught me hosting, Google SEO optimization, and many nuances of web development.",
            ],
          },
          {
            heading: 'Website Features:',
            items: [
              '🌗 Light and Dark Themes with saved preferences.',
              '📖 Content Management: all articles in MongoDB, backend supports article submission.',
              "📕 Champion's Stories: translated lore in a dedicated section.",
              '🥇 Team Recruitment Dashboard: register and post team-find requests with auto-cleanup.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• Frontend: ', mark: 'React', suffix: ' with context-based state management.' },
              { prefix: '• Backend: ', mark: 'Node.js + MongoDB', suffix: ' — authentication, API, content storage.' },
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'foddies',
    liveUrl: 'https://foddies-frontend.onrender.com',
    titleParts: [{ text: 'Fodd', color: '#9d00ff' }, { text: 'ies' }],
    content: {
      uk: {
        tryIt: 'Відвідати сайт',
        intro: [
          'Foddies — сучасна Full-stack платформа для обміну кулінарним досвідом. Від власних рецептів до взаємодії з глобальною спільнотою фуд-ентузіастів.',
          'Надихайтеся, готуйте та діліться смаком! 🥗',
        ],
        sections: [
          {
            heading: 'Соціальна платформа для рецептів',
            items: [
              'Високопродуктивний SPA на базі React із фокусом на типізацію, автоматизацію API-запитів та сучасний UX. Повноцінна екосистема з авторизацією, системою підписок та динамічним контентом.',
            ],
          },
          {
            heading: 'Ключовий функціонал:',
            items: [
              '👨‍🍳 Recipe Engine: конструктор рецептів з категоріями та часом приготування.',
              '🔍 Розумний пошук: просунута фільтрація для миттєвого знаходження страви.',
              '👥 Соціальний шар: система фоловерів та персональний профіль.',
              '🔖 Обране: персональна бібліотека найкращих рецептів.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• Frontend: ', mark: 'React 19 + React Router 7', suffix: ' — найвища швидкість рендерингу.' },
              { prefix: '• API-хуки: ', mark: 'Orval + TanStack Query', suffix: ' — автогенерація з OpenAPI-схеми.' },
              '• UI: Tailwind CSS v4 + Shadcn UI для повної адаптивності.',
            ],
          },
        ],
      },
      en: {
        tryIt: 'Website',
        intro: [
          'Foddies is a modern Full-stack platform for sharing culinary expertise. From unique recipes to interacting with a global community of food enthusiasts.',
          'Get inspired, cook, and share the taste! 🥗',
        ],
        sections: [
          {
            heading: 'A Social Recipe Sharing Ecosystem',
            items: [
              "High-performance SPA using the latest React ecosystem technologies. More than a cookbook — a full social platform with authentication, subscriptions, and dynamic content.",
            ],
          },
          {
            heading: 'Key Features:',
            items: [
              '👨‍🍳 Recipe Engine: builder for publishing recipes with categories and timing.',
              '🔍 Smart Search: advanced filtering to find the perfect meal instantly.',
              '👥 Social Layer: follower system and personal chef profile.',
              '🔖 Favorites: personal library of top recipes for quick access.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• Frontend: ', mark: 'React 19 + React Router 7', suffix: ' — top-tier rendering speed.' },
              { prefix: '• API hooks: ', mark: 'Orval + TanStack Query', suffix: ' — auto-generated from OpenAPI schema.' },
              '• UI: Tailwind CSS v4 + Shadcn UI for full responsiveness.',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'aliasai',
    liveUrl: 'https://alias-umber.vercel.app',
    titleParts: [{ text: 'Alias' }, { text: 'AI', color: '#bd0000' }],
    titleStyle: { fontStyle: 'italic', letterSpacing: '-0.02em' },
    content: {
      uk: {
        tryIt: 'Грати зараз',
        intro: [
          'AliasAI — інтелектуальна еволюція класичної настільної гри. Замість статичних карток — AI генерує унікальні слова у реальному часі.',
          'Збирайте друзів та випробуйте словниковий запас у новому форматі! 🎲',
        ],
        sections: [
          {
            heading: 'Інтерактивна Multiplayer Гра на базі AI',
            items: ['Сучасний веб-додаток з фокусом на динамічну взаємодію. Серверні компоненти та інтелектуальна генерація контенту роблять кожну партію неповторною.'],
          },
          {
            heading: 'Ключовий функціонал:',
            items: [
              'AI Word Gen: нескінченна кількість тематичних слів під рівень складності гравців.',
              'Real-time Sync: миттєва синхронізація ігрового стану між пристроями.',
              'Гнучкі налаштування: теми, час раунду та кількість гравців в один клік.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• ', mark: 'Next.js 15', suffix: ' — швидкий рендеринг та SEO-оптимізація.' },
              { prefix: '• ', mark: 'Gemini API', suffix: " — складні логічні зв'язки між словами." },
              '• Tailwind CSS для ідеального мобільного вигляду.',
            ],
          },
        ],
      },
      en: {
        tryIt: 'Play Now',
        intro: [
          'AliasAI is an intelligent evolution of the classic board game. Instead of static cards — AI generates unique words in real-time.',
          'Gather your friends and test your vocabulary in a brand new format! 🎲',
        ],
        sections: [
          {
            heading: 'AI-Powered Interactive Multiplayer Game',
            items: ['Modern web app focusing on dynamic interaction. Server components and smart content generation make every session unique.'],
          },
          {
            heading: 'Key Features:',
            items: [
              "AI Word Gen: infinite thematic words adapted to players' difficulty level.",
              "Real-time Sync: instant game state synchronization across all participants' devices.",
              'Flexible Settings: customize themes, round times, and player counts instantly.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• ', mark: 'Next.js 15', suffix: ' — high-speed rendering and great SEO.' },
              { prefix: '• ', mark: 'Gemini API', suffix: ' — complex logical word associations.' },
              '• Tailwind CSS for a seamless mobile experience.',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'whisperoffate',
    liveUrl: 'https://whisper-of-fate.vercel.app',
    titleStyle: {
      background: 'linear-gradient(to right, #a855f7, var(--text-primary), #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    titleParts: [{ text: 'Whisper of Fate' }],
    content: {
      uk: {
        tryIt: 'Дізнатись долю',
        intro: [
          'Whisper of Fate — цифровий оракул, що поєднує містичну естетику з потужністю AI. Генерує персоналізовані передбачення та аналізує запити.',
          'Відкрийте завісу майбутнього вже зараз...',
        ],
        sections: [
          {
            heading: 'AI-Оракул з унікальною атмосферою',
            items: ['Легкий та швидкий клієнт на базі Vite. Акцент на візуальних ефектах (glassmorphism) та глибокій інтеграції з AI для атмосферних відповідей.'],
          },
          {
            heading: 'Ключовий функціонал:',
            items: [
              'Цифрові Таро: інтерпретація розкладів за допомогою AI-моделей.',
              'Глибокий аналіз: філософські роздуми на основі ваших запитань.',
              'Нічний режим: інтерфейс для комфортного вечірнього використання.',
              'Анімовані ефекти: містична візуалізація процесу "передбачення".',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• ', mark: 'Vite + React + TypeScript', suffix: ' — мінімальний час відповіді.' },
              { prefix: '• ', mark: 'Google AI SDK', suffix: ' — контекстуальна обробка запитів.' },
              '• Glassmorphism + Framer Motion для магічних анімацій.',
            ],
          },
        ],
      },
      en: {
        tryIt: 'Consult the Oracle',
        intro: [
          'Whisper of Fate is a digital oracle blending mystical aesthetics with modern AI power. Generates personalized predictions and analyzes user queries.',
          'Unveil the secrets of the future...',
        ],
        sections: [
          {
            heading: 'AI Oracle with a Unique Atmosphere',
            items: ['Lightweight, fast Vite-based client. Focus on visual effects (glassmorphism) and deep AI integration for atmospheric responses.'],
          },
          {
            heading: 'Key Features:',
            items: [
              'Digital Tarot: interpretation of spreads using AI models.',
              'Deep Analysis: philosophical reflections based on your questions.',
              'Night Mode: interface optimized for comfortable evening use.',
              'Animated Effects: mystical visualization of the "prophecy" process.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• ', mark: 'Vite + React + TypeScript', suffix: ' — minimal latency.' },
              { prefix: '• ', mark: 'Google AI SDK', suffix: ' — contextual request processing.' },
              '• Glassmorphism + Framer Motion for magical animations.',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'aifixer',
    githubUrl: 'https://github.com/yuriiavr/text-corrector/releases/tag/AiFixer',
    titleParts: [{ text: 'AI', color: '#00a2ff' }, { text: ' Fixer' }],
    content: {
      uk: {
        tryIt: 'Завантажити',
        intro: [
          'AI Fixer — потужний десктопний інструмент для автоматичного виправлення, форматування та покращення тексту. Інтегрується безпосередньо у ваш робочий процес.',
          'Пишіть впевнено, про все інше подбає AI!',
        ],
        sections: [
          {
            heading: 'Десктопна утиліта для досконалого тексту',
            items: ['Кросплатформовий додаток на базі Electron. Обробка великих масивів тексту локально — висока конфіденційність та швидкість без потреби у браузері.'],
          },
          {
            heading: 'Ключовий функціонал:',
            items: [
              'Smart Grammar: виправлення граматичних та стилістичних помилок одним натисканням.',
              'Rephrasing: перефразування тексту для зміни тональності (офіційний, дружній, саркастичний).',
              'Локальна обробка: швидкий доступ до файлів через системні API.',
              'Hotkeys: підтримка гарячих клавіш для миттєвої обробки виділеного тексту.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• ', mark: 'Electron', suffix: ' — десктопна архітектура з доступом до системних можливостей.' },
              { prefix: '• ', mark: 'Gemini 2.5 Pro', suffix: ' — розуміння контексту на професійному рівні.' },
              '• Темний UI для концентрації на тексті та мінімізації навантаження на очі.',
            ],
          },
        ],
      },
      en: {
        tryIt: 'Download App',
        intro: [
          'AI Fixer is a powerful desktop tool for automated text correction, formatting, and enhancement. Integrates directly into your workflow for instant editing.',
          'Write with confidence, let AI handle the rest!',
        ],
        sections: [
          {
            heading: 'Desktop Utility for Perfect Writing',
            items: ['Cross-platform Electron application. Processes large text blocks locally — high privacy and speed without needing a browser.'],
          },
          {
            heading: 'Key Features:',
            items: [
              'Smart Grammar: fix grammatical and stylistic errors with one click.',
              'Rephrasing: change text tone (formal, friendly, sarcastic) effortlessly.',
              'Local Processing: fast file access through system desktop APIs.',
              'Hotkeys: global hotkey support for processing selected text instantly.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• ', mark: 'Electron', suffix: ' — desktop architecture with full OS-level access.' },
              { prefix: '• ', mark: 'Gemini 2.5 Pro', suffix: ' — professional-level context understanding.' },
              '• Strict dark-themed UI designed for focus and reduced eye strain.',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'threads',
    liveUrl: 'https://threads-top.vercel.app',
    titleParts: [{ text: 'Top' }, { text: 'Threads', color: '#38bdf8' }],
    titleStyle: { fontStyle: 'italic', letterSpacing: '-0.04em' },
    content: {
      uk: {
        tryIt: 'Відкрити аналітику',
        intro: [
          'Top Threads — індивідуальне рішення для моніторингу та глибинного аналізу українського сегмента мережі Threads. Автоматизує збір трендових постів через кастомну архітектуру парсингу.',
          'Чисті дані без обмежень сторонніх сервісів. 📈',
        ],
        sections: [
          {
            heading: 'Headless Browser Automation System',
            items: ['Центральна частина — власна система скрапінгу на базі Puppeteer. Імітує повноцінну сесію браузера, виконує JS та збирає дані, приховані за динамічним рендерингом.'],
          },
          {
            heading: 'Технічні особливості:',
            items: [
              'Puppeteer Engine: автоматизація Chromium для обходу складних анти-скрапінг систем.',
              'Dynamic Content Loading: обробка нескінченного скролу та асинхронних запитів.',
              'Linguistic Filtering: кастомні регулярні вирази для виокремлення українського контенту.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• Скрапінг: ', mark: 'Node.js + Puppeteer', suffix: ' — повний контроль над DOM та мережевими запитами.' },
              { prefix: '• Backend & DB: ', mark: 'Supabase', suffix: ' — збереження структурованих даних та аналітика.' },
              '• Cloud deployment для стабільної роботи headless-браузера.',
            ],
          },
        ],
      },
      en: {
        tryIt: 'Open Analytics',
        intro: [
          'Top Threads is a custom solution for monitoring and deep analysis of the Ukrainian segment of the Threads network. Automates trending post collection using a custom data parsing architecture.',
          'Clean data without third-party service limitations. 📈',
        ],
        sections: [
          {
            heading: 'Headless Browser Automation System',
            items: ['The core is a custom Puppeteer-based scraping system — mimics a full browser session, executes JavaScript, and collects data hidden behind dynamic rendering.'],
          },
          {
            heading: 'Technical Features:',
            items: [
              'Puppeteer Engine: Chromium automation to bypass complex anti-scraping systems.',
              'Dynamic Content Loading: handles infinite scroll and async requests.',
              'Linguistic Filtering: custom regex to isolate specifically Ukrainian content.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• Scraping: ', mark: 'Node.js + Puppeteer', suffix: ' — full DOM and network traffic control.' },
              { prefix: '• Backend & DB: ', mark: 'Supabase', suffix: ' — structured data storage and engagement analytics.' },
              '• Cloud deployment optimized for stable headless browser performance.',
            ],
          },
        ],
      },
    },
  },

  {
    slug: 'keyframe',
    liveUrl: 'https://keyframe-gallery.vercel.app',
    titleParts: [{ text: 'Key' }, { text: 'frame', color: '#10b981' }],
    titleStyle: { fontStyle: 'italic', letterSpacing: '-0.04em' },
    content: {
      uk: {
        tryIt: 'Дивитись магазин',
        intro: [
          'Keyframe — концептуальний E-commerce проєкт, присвячений культурі механічних клавіатур. Преміальний дизайн та функціональність сучасного інтернет-магазину.',
          'Створено для ентузіастів, які цінують естетику та якість кожного натискання. ⌨️',
        ],
        sections: [
          {
            heading: 'High-End E-commerce Experience',
            items: ['Проєкт реалізований з особливою увагою до деталей: від плавних мікро-взаємодій до оптимізованої логіки фільтрації товарів. Мета — відчуття преміального продукту через інтерфейс.'],
          },
          {
            heading: 'Технічний функціонал:',
            items: [
              'Dynamic Product Catalog: гнучка система категорій та фільтрів для кейкапів та світчів.',
              'Cart Logic: кошик з клієнтською валідацією та збереженням стану.',
              'Motion Design: Framer Motion для "тактильного" відчуття при взаємодії з UI.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• ', mark: 'Next.js + TypeScript', suffix: " — типізація складних об'єктів товару." },
              { prefix: '• ', mark: 'Tailwind CSS', suffix: ' з кастомною конфігурацією кольорів та шрифтів бренду.' },
              '• Framer Motion для плавних переходів між сторінками.',
            ],
          },
        ],
      },
      en: {
        tryIt: 'View Store',
        intro: [
          'Keyframe is a conceptual E-commerce project dedicated to mechanical keyboard culture. Premium design with the functionality of a modern online store.',
          'Built for enthusiasts who value aesthetics and the quality of every keystroke. ⌨️',
        ],
        sections: [
          {
            heading: 'High-End E-commerce Experience',
            items: ['Implemented with meticulous attention to detail: from smooth micro-interactions to optimized product filtering logic. The goal is to evoke a premium product feel through the interface.'],
          },
          {
            heading: 'Technical Features:',
            items: [
              'Dynamic Product Catalog: flexible category and filter system for custom keycaps and switches.',
              'Cart Logic: complex cart implementation with client-side validation and state persistence.',
              'Motion Design: Framer Motion to create a "tactile" feel during UI interactions.',
            ],
          },
          {
            heading: 'Tech Stack:',
            items: [
              { prefix: '• ', mark: 'Next.js + TypeScript', suffix: ' — robust product object typing and code stability.' },
              { prefix: '• ', mark: 'Tailwind CSS', suffix: ' with custom color configurations and brand typography.' },
              '• Framer Motion for seamless page transitions.',
            ],
          },
        ],
      },
    },
  },
];

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}