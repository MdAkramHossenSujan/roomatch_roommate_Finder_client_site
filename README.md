
**Live Site:** [ROOMATCH](https://roomatch-roommate-finder.web.app/)
Live Link:https://roomatch-roommate-finder.web.app/
Roomatch is a full-stack roommate matching platform designed for ease, interactivity, and personalization. Users can add their roommate listings, explore others' profiles, and interact through likes and comments. From dynamic theming to secure routing, Roomatch delivers a user-friendly experience with a modern interface.

---

## 🌐 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: MongoDB (via API)
- **Routing**: `react-router`
- **UI/UX Enhancements**: 
  - `react-hot-toast`
  - `sweetalert`
  - `react-icons`
  - `swiper`
  - `lottifiles`
- **Authentication**: Email/Password + Google Sign-In

---

## 🎯 Key Features (with Screenshots)

### 🎨 Dark/Light Mode Toggle  
- Site-wide toggling with persistent styling across all components.  
  - Dark Mode![Dark Mode](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20182642.png)
  - Light Mode![Light Mode](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20182610.png)

### 📱 Responsive UI
- Fully mobile-friendly layout with a collapsible sidebar.  
  - Mobile View
  ![Mobile Menu](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20182622.png)

### 🔐 Auth & Protected Routes
- Secure login and registration system with:
  - Email & Password Auth  
  - Google Sign-In  
  - Protected routes redirect to login
  -Login 
  ![Login](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183614.png)  
  -Registration 
  ![Registration](https://i.ibb.co/g16vCcm/Screenshot-2025-05-24-183622.png)

### 📦 CRUD Operations
- Users can:
  - Add roommate listings  
    - ![Add Roommate](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183733.png)
  - View all roommate profiles  
    - Browse Listing:Users Can See All Their Post Here
    ![Browse](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183747.png)
  - View/edit/delete their own listings  
    -MyPost:User can See Only The Post He Added,He Can Update Or Remove It. 
    ![My Posts](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183757.png)  
    -While Deleting User Must Be Give Confirmaion. 
    ![Delete Confirm](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183805.png) 
    ![Delete Confirm](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183811.png) 
    -After Deleting. 
    ![Update](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183818.png)

### ❤️ Like System (Detail Page)
- Likes increase count and show:
  - `{likeCount} people interested in`
- ❌ Can’t like own posts  
- ✅ Can like multiple times  
  - Before Liking 
  ![Before Like](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183854.png)  
  - After Liking
  ![After Like](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183908.png)  
  - Own Liking Only Show Number.
  ![Own Like Blocked](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183924.png)

### 💬 Comments Section
- Add feedback or service comments.  
  ![Comment Box](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183946.png)

### 📌 Home Page Sections
- **Banner + Swiper Slider**  
  -Banner Image
  ![Banner](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20182703.png)
  -Banner With Slider 
  ![Slider](https://i.ibb.co/V50t8xZ/Screenshot-2025-05-24-182716.png)
- **About with Lottie**  
  ![About](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20182730.png)
- **Recent & Featured Cards**  
  ![Cards](https://i.ibb.co/SZHcSWz/Screenshot-2025-05-24-182741.png)
- **How to Find Roommate Guide**  
  ![Guide](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20182749.png)
- **Recently Viewed Profiles**  
  ![Recently Viewed](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20182755.png)
  -Without Any card or removing data!  
  ![Empty State](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20182804.png)

### 🧾 Alerts & Notifications
- `react-hot-toast` used for:
  - Success/error feedback  
  ![Alert](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20183718.png)

### 🧠 Dynamic Page Titles
- Updates based on routes.  
  ![Dynamic Title](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20191345.png)

### 🚫 Error Page
- Custom 404 route  
  ![Error Page](./src/assets/Project-RooMatch%20IOmage/Screenshot%202025-05-24%20194042.png)

---

## 📦 Installed Packages

| Package            | Purpose                                      |
|--------------------|----------------------------------------------|
| `react-router`     | Page routing/navigation                      |
| `react-hot-toast`  | Alerts and user feedback                    |
| `sweetalert`       | Confirmation modals                         |
| `react-icons`      | Iconography                                 |
| `swiper`           | Sliders for banner section                  |
| `lottifiles`       | Animated illustrations                      |
| `tailwindcss`      | Utility-first CSS framework                 |

---
***There Is Image attached in links Hosted in imgBB there can be Problem in VIewing Image***
