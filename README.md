# KVSRIT College Website

This is the official website for Dr. K.V. Subba Reddy Institute of Technology (KVSRIT), built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive UI for mobile, tablet, and desktop.
- **Dynamic Content**: News, events, and faculty directory.
- **Academics**: Course listings, syllabi, and academic calendars.
- **Admissions**: Application process, eligibility criteria, and online inquiry form.
- **Admin Portal**: Secure area for managing website content (stubbed).
- **Performance**: Optimized for speed and SEO using Next.js App Router and Server Components.
- **Accessibility**: WCAG 2.1 AA compliant.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Docker, CI/CD with GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/kvsrit-website.git
   cd kvsrit-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build and Production

To build the application for production:

```bash
npm run build
```

To run the production server locally:

```bash
npm start
```

## Docker Support

Build the Docker image:

```bash
docker build -t kvsrit-website .
```

Run the container:

```bash
docker run -p 3000:3000 kvsrit-website
```

## Project Structure

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components.
- `public`: Static assets (images, fonts).
- `.github/workflows`: CI/CD configuration.

## Admin Portal

Access the admin portal at `/admin`.
**Default Credentials (Demo):**
- Email: `admin@drkvsrit.ac.in`
- Password: `admin`

## License

[MIT](LICENSE)
# kvsritVER1
