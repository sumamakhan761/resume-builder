# Resume Builder

## 🚀 Overview
A full-stack application for creating ATS-friendly resumes with a dynamic and user-friendly experience. This project leverages modern web technologies to provide seamless resume-building capabilities, including live previews, drag-and-drop reordering, autosave, and PDF export functionality.

## 🛠 Tech Stack
- **Frontend:** Next.js, TypeScript, JavaScript, CSS, Tailwind CSS, Shadcn UI
- **Backend:** PostgreSQL, Prisma ORM
- **Authentication:** Clerk v6
- **Interactivity:** dnd-kit (Drag and Drop)
- **Export:** react-to-print (PDF Export)

## ✨ Features
- **Dynamic Forms:** Instantly generate live responses based on user input.
- **Responsive UI:** Designed with Tailwind CSS and Shadcn UI for a seamless experience across all devices.
- **Authentication:** Secure user authentication with Clerk v6.
- **Drag and Drop:** Intuitive reordering using dnd-kit for better user interactivity.
- **Autosave Functionality:** Prevents data loss with debounce-based autosave.
- **PDF Export:** Enables users to print or save resumes as professional-grade PDFs.
- **Customizable Design:** Allows users to personalize their resume templates.

## 📌 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/sumamakhan761/resume-builder.git
   cd resume-builder
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the required environment variables:
   ```env
   POSTGRES_URL=
   POSTGRES_URL_NON_POOLING=
   POSTGRES_USER=
   POSTGRES_HOST=
   POSTGRES_PASSWORD=
   POSTGRES_DATABASE=neondb
   POSTGRES_URL_NO_SSL=
   POSTGRES_PRISMA_URL=
   
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
   
   BLOB_READ_WRITE_TOKEN=
   ```
   ## 🔗 Environment Variable References

| Variable | Description | Official Link |
|----------|-------------|--------------|
| **POSTGRES_URL** | PostgreSQL Database URL | 🔗[PostgreSQL](https://www.postgresql.org/) |
| **POSTGRES_URL_NON_POOLING** | Non-pooling PostgreSQL URL | 🔗[PostgreSQL](https://www.postgresql.org/) |
| **POSTGRES_USER** | PostgreSQL Database User | 🔗[PostgreSQL](https://www.postgresql.org/) |
| **POSTGRES_HOST** | PostgreSQL Database Host | 🔗[PostgreSQL](https://www.postgresql.org/) |
| **POSTGRES_PASSWORD** | PostgreSQL Database Password | 🔗[PostgreSQL](https://www.postgresql.org/) |
| **POSTGRES_DATABASE** | PostgreSQL Database Name (neondb) | 🔗[NeonDB](https://neon.tech/) |
| **POSTGRES_URL_NO_SSL** | PostgreSQL URL without SSL | 🔗[PostgreSQL](https://www.postgresql.org/) |
| **POSTGRES_PRISMA_URL** | PostgreSQL URL for Prisma ORM | 🔗[Prisma](https://www.prisma.io/) |
| **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY** | Clerk Publishable API Key | 🔗[Clerk](https://clerk.com/) |
| **NEXT_PUBLIC_CLERK_SIGN_IN_URL** | Clerk Sign-In Page | 🔗[Clerk](https://clerk.com/) |
| **NEXT_PUBLIC_CLERK_SIGN_UP_URL** | Clerk Sign-Up Page | 🔗[Clerk](https://clerk.com/) |
| **BLOB_READ_WRITE_TOKEN** | Token for Blob Storage | 🔗[Blob Storage](https://azure.microsoft.com/en-us/products/storage/blobs/) |


4. **Run the development server:**
   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Impact
- Provided a fast, customizable, and user-friendly solution for resume building.
- Improved user experience with real-time updates and autosave functionality.
- Enabled seamless authentication and resume management with Clerk integration.
- Delivered professional-grade PDF exports for users’ convenience.

## 🚀 Tech Stack

| Technology    | Logo |
|--------------|------|
| **Next.js**  | <img src="https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=FFFFFF" width="50" height="50"> |
| **TypeScript** | <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="50" height="50"> |
| **JavaScript** | <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="50" height="50"> |
| **Tailwind CSS** | <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="50" height="50"> |
| **PostgreSQL** | <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" width="50" height="50"> |
| **Prisma ORM** | <img src="https://cdn.worldvectorlogo.com/logos/prisma-3.svg" width="50" height="50"> |
| **Clerk** | <img src="https://clerk.com/_next/image?url=%2Fv2%2Fdownloads%2Fclerk-logo-white.svg&w=2048&q=75" width="75" height="75"> |
| **dnd-kit** | <img src="https://dndkit.com/dnd-kit-logo.svg" width="75" height="75" > |




---
## 🔗 Connect with Me
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfoliosumama.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sumama-khan)
[![Leetcode](https://img.shields.io/badge/Leetocode-1DA1F2?style=for-the-badge&logo=Leetcode&logoColor=yellow)](https://leetcode.com/u/sumamakhan))
---
## ⭐️ Show Your Support
Give a ⭐️ if you like this project!

