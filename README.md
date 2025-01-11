# Next.js Simple Blog Page with Dynamic Dark Mode

A simple blog page built with Next.js to showcase key features like data fetching, dynamic routes, API integration, and Tailwind CSS styling.

## Features
- Fetch posts using `getStaticProps` and `getStaticPaths`.
- Dynamic routing for individual blog posts.
- Custom API route to fetch posts.
- Light/Dark mode toggle.
- SEO optimization using `<Head>` and optimized images with `<Image>`.

A simple blog page built with Next.js 14, TypeScript, and Tailwind CSS, featuring dynamic dark mode.

## 🚀 Features

- **Server-Side Rendering**: Utilizing Next.js 14's SSR capabilities
- **Dynamic Dark Mode**: Smooth theme switching with system preference detection
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **TypeScript Integration**: Full type safety throughout the application
- **Dynamic Routing**: Individual post pages with [id] based routing
- **API Integration**: Fetching data from JSONPlaceholder API
- **Error Handling**: Proper error states and 404 pages
- **Clean UI**: Modern and minimalist design with smooth transitions

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/marcuapps/simple-blog-page
```

2. Navigate to the project directory:
```bash
cd simple-blog-page
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── posts/
│   │       └── route.ts
│   ├── posts/
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ThemeProvider.tsx
├── types/
│   └── blog.ts
├── tailwind.config.ts
└── README.md
```

## 🔍 Key Components

### ThemeProvider
Manages the application's theme state, handles system preferences, and provides smooth transitions between light and dark modes.

### Blog Page
The main page displaying a grid of blog posts with:
- Responsive card layout
- Post previews
- Dynamic theme switching
- Smooth animations

### Individual Post Pages
Dynamic routes for each post featuring:
- Full post content
- Author information
- Navigation back to main page
- Error handling for non-existent posts

## 🌐 API Routes

The application includes a custom API route that proxies requests to JSONPlaceholder:

- `GET /api/posts` - Fetches all posts
- Individual post data is fetched directly from JSONPlaceholder in post pages

## 🎨 Styling

- Fully responsive design using Tailwind CSS
- Dark mode support with smooth transitions
- Custom color schemes for both light and dark modes
- Hover effects and animations
- Consistent spacing and typography

## 🔨 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 📱 Responsive Design

The blog is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)