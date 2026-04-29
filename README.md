# 🛡️ Security Command Center
### Gabriel Williams — Security Engineer · Avesis

A personal security engineering dashboard built to manage daily work, track impact, organize domains, and grow toward mid-level and beyond. Built as a single HTML file with Supabase cloud sync.

---

## 🚀 Live URL
```
https://YOUR_GITHUB_USERNAME.github.io/work-dashboard
```
> Replace with your actual GitHub Pages URL after setup.

---

## ✨ Features

| Tab | What it does |
|-----|-------------|
| 🏠 Home | Role overview, initiatives, team, bigger picture |
| ⚡ Today | Daily focus, open tasks, live schedule |
| ✅ To-Do | Tasks with descriptions, domain tags, priority, archive |
| 📅 Schedule | Fully editable daily time blocks (drag, reorder, add, delete) |
| 🗓️ Weekly | Editable weekly rhythm — theme + tasks per day |
| 🛡️ Domains | IAM, Endpoint, Purview, Insider Risk — with projects + task tracking |
| 📝 Notes | Notion-style notes — General, Meeting, 1:1, Domain, Study |
| ⚙️ Scripts | PowerShell, KQL, Python script repository |
| ✉️ Email Gen | Offline email templates for escalations, incidents, compliance |
| ⭐ Move Up | Promotion roadmap, cert path, quick wins |
| 🏆 Impact Log | Log wins daily → auto-generates your rap sheet / brag doc |

---

## 🗄️ Data & Sync (Supabase)

All data syncs to Supabase automatically. This means:
- ✅ Open on your **work computer** — same data
- ✅ Open on your **phone** — same data
- ✅ Open on your **home computer** — same data
- ✅ Your **siblings** can create their own account — completely separate data

### Supabase Tables
```
profiles       — user account info
todos          — to-do list + archive
notes          — all notes with categories
scripts        — script repository
impacts        — impact log entries
projects       — domain projects + tasks
schedule       — custom daily schedule blocks
week_days      — custom weekly rhythm
```

---

## 🛠️ Tech Stack

| Layer | Technology | Cost |
|-------|-----------|------|
| Frontend | HTML / CSS / Vanilla JS | Free |
| Auth | Supabase Auth (email + password) | Free |
| Database | Supabase PostgreSQL | Free (500MB) |
| Hosting | GitHub Pages | Free |
| Domain (optional) | Namecheap | ~$12/yr |

**Total cost: $0/month**

---

## 📦 Setup Instructions

### 1. Supabase Setup
1. Go to [supabase.com](https://supabase.com) → Create account → New Project
2. Name it `security-command-center`
3. Save your **Project URL** and **anon public key** (Settings → API)
4. Run the SQL in `supabase_schema.sql` in the Supabase SQL Editor
5. Paste your URL and key into the dashboard config section

### 2. GitHub Pages Setup
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new **public** repository named `work-dashboard`
3. Upload `index.html` (renamed from `gabriel_command_center_v4.html`)
4. Go to Settings → Pages → Source: Deploy from branch → main → / (root) → Save
5. Your URL will be: `https://yourusername.github.io/work-dashboard`

### 3. First Login
1. Open your GitHub Pages URL
2. Click **Create Account** on the login screen
3. Use your personal email (not work email — this is yours forever)
4. You're in — all data saves to Supabase automatically

---

## 🔒 Security & Privacy

- All data stored in **your own Supabase project** — Anthropic/Claude has no access
- Row Level Security (RLS) enabled — users can only see their own data
- No third-party analytics or tracking
- You own the database — export anytime from Supabase dashboard
- If you leave Avesis, your data goes with you — it's not on any company system

---

## 📱 Mobile (Add to Home Screen)

1. Open your GitHub Pages URL in Safari (iPhone) or Chrome (Android)
2. Tap **Share → Add to Home Screen** (iPhone) or **Menu → Add to Home Screen** (Android)
3. It behaves like a native app — full screen, no browser bar

---

## 👨‍👩‍👧‍👦 Sharing with Siblings

Each person goes to the same URL and creates their own account. Their data is completely private and separate. Future versions can add a shared "Family" section where you can see each other's prayer requests or shared goals.

---

## 🗺️ Roadmap

- [x] Daily schedule + weekly rhythm (editable)
- [x] To-do list with archive + descriptions
- [x] Domain tracker with projects
- [x] Notes system (Notion-style)
- [x] Script repository
- [x] Email generator (offline templates)
- [x] Impact log + rap sheet generator
- [x] Supabase auth + sync
- [ ] Life OS integration (Spirit, Goals, Finance, Health)
- [ ] Apple Health step count integration
- [ ] Push notifications for daily reminders
- [ ] Dark/light mode toggle

---

## 📞 Support

Built by Claude (Anthropic) in collaboration with Gabriel Williams.  
Questions → open this project in Claude and continue the conversation.

---

*Last updated: April 2026*
