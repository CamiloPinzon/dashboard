# Analytics Dashboard

A modern, responsive analytics dashboard built with React, TypeScript, and SASS. This dashboard provides a comprehensive view of business metrics with interactive charts and real-time data visualization.

## Features

- 📊 Interactive charts using Recharts
- 📱 Fully responsive design
- 🎨 Custom SASS styling with modular architecture
- 📈 Real-time statistics and metrics
- 🔍 Key performance indicators
- 💻 Modern React with TypeScript

## Tech Stack

- React 18
- TypeScript
- SASS (with modular architecture)
- Recharts for data visualization
- Lucide React for icons
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components
│   ├── Charts.tsx     # Chart components
│   ├── Sidebar.tsx    # Navigation sidebar
│   └── StatCard.tsx   # Statistics card component
├── styles/            # SASS styles
│   ├── _mixins.scss   # SASS mixins
│   ├── _variables.scss # SASS variables
│   ├── components/    # Component-specific styles
│   └── main.scss      # Main stylesheet
└── main.tsx          # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Styling

The project uses a modular SASS architecture. Main style configurations can be found in:

- `src/styles/_variables.scss` - Global variables
- `src/styles/_mixins.scss` - Reusable mixins
- `src/styles/components/` - Component-specific styles

### Adding New Components

1. Create component in `src/components/`
2. Create corresponding style in `src/styles/components/`
3. Import and use the component as needed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Recharts](https://recharts.org/) for the charting library
- [Lucide React](https://lucide.dev/) for the icons
- [React](https://reactjs.org/) for the UI framework