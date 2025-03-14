# 📩 Transactional Welcome Emails with Next.js and Mailgun

**Author:** [Lucien Chemaly](https://github.com/LucienChemaly)

This repository contains a simple Next.js application demonstrating how to easily implement a transactional email workflow using [Mailgun](https://mailgun.com/) for sending automated welcome emails.

---

## ✅ Prerequisites

Before starting, ensure your computer meets these requirements:

### 📌 Machine Requirements

- [Node.js](https://nodejs.org/) installed (LTS version recommended).
  - Verify installation by running:
    ```bash
    node -v
    ```

- A code editor like [Visual Studio Code](https://code.visualstudio.com/) (recommended).

---

### 📌 Active Mailgun Account

You'll need an active Mailgun account. If you don't have one:

- Sign up for a free Mailgun account [here](https://mailgun.com).
- Verify and activate your account via the confirmation email.

If you have issues activating your Mailgun account, contact [Mailgun support](https://help.mailgun.com).

---

### 🔑 Generate Mailgun API Keys

- Log in to your [Mailgun Dashboard](https://login.mailgun.com/).
- Navigate to **Sending → Domains** and ensure your domain is verified.
- Go to **Settings → API Security** and generate and API Key:
  - **API Key**
  - **Mailgun Domain** (example: `sandbox1234567890.mailgun.org`)

---

## 🚦 How to Run this Project (Step-by-Step)

### 1. Clone this Repository

```bash
git clone https://github.com/See4Devs/mailgun-welcome-email-nextjs.git
```

### 2. Navigate into the Project Directory

```bash
cd mailgun-welcome-email-nextjs
```

### 3. Install Dependencies

```bash
npm install
```

> Note : Replace `YOUR_MAINLGUN_DOMAIN` and `YOUR_MAILGUN_API_KEY` with the ones related to your account.

### 4. Run the Development Server

Start your application by executing:

```bash
npm run dev
```

Your Next.js app should now be running at [http://localhost:3000](http://localhost:3000).

---

## 📚 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Mailgun Documentation](https://documentation.mailgun.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy coding! 🚀**