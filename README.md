# 📘 My Todo App

這是一個使用 **Vue 3 + Vite + Tailwind CSS** 製作的簡約風格待辦清單應用。支援登入驗證、響應式設計、任務分類與圖示操作。架構保留擴充空間，可接 Firebase、OAuth、多人清單等功能。

---

## 🔧 技術

- ⚙️ [Vue 3](https://vuejs.org/)
- 🧭 [Vue Router](https://router.vuejs.org/)
- 💨 [Tailwind CSS](https://tailwindcss.com/)
- ⚡ [Vite](https://vitejs.dev/)
- 🌟 [Font Awesome Icons](https://fontawesome.com/)

---
🔐 登入驗證邏輯
使用 localStorage 儲存使用者登入狀態（key: user）

導覽守衛防止未登入訪問 /todo

若已登入則自動導向 /todo

後續可接 Firebase Auth / OAuth / JWT 等機制

✅ 功能特色
✅ 新增 / 刪除 / 切換任務完成

✅ 顯示任務：全部、已完成、未完成

✅ RWD 響應式支援手機操作

✅ 深色模式支援（Tailwind dark 模式）

✅ 使用 Font Awesome 的 Plus / Trash icon

✅ 自動導向登入 / 主頁路由守衛

🔮 待辦擴充功能（TODO）
 任務拖曳排序

 多使用者帳號與資料獨立管理

 使用 Firebase 存取任務資料

 加入任務截止時間與提醒

 任務分類、搜尋與標籤功能

📜 授權 License
MIT License

🧠 自用 + 練習作品 🔧