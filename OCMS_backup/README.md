# OCMS - Online Course Management System

## 🎯 **Tổng quan dự án**

OCMS là hệ thống quản lý khóa học trực tuyến được xây dựng theo mô hình **MVC (Model-View-Controller)** với React 18, TypeScript và Tailwind CSS. Hệ thống hỗ trợ 3 vai trò người dùng: Student, Lecturer và Admin với đầy đủ tính năng quản lý.

## 🏗️ **Kiến trúc MVC**

### **M (Model) - Quản lý dữ liệu và logic nghiệp vụ**
- `src/models/` - Định nghĩa các interface và model dữ liệu
- `src/models/UserModel.ts` - Logic nghiệp vụ cho User
- `src/models/CourseModel.ts` - Logic nghiệp vụ cho Course
- **Database Schema:** SQL Server với 15+ tables

### **V (View) - Giao diện người dùng**
- `src/views/` - Các component hiển thị giao diện
- `src/views/LoginView.tsx` - Giao diện đăng nhập
- `src/views/student/` - Views cho Student (7 views)
- `src/views/lecturer/` - Views cho Lecturer (6 views)
- `src/views/admin/` - Views cho Admin (10 views)

### **C (Controller) - Xử lý logic điều khiển**
- `src/controllers/` - Các controller kết nối Model và View
- `src/controllers/AuthController.ts` - Xử lý authentication
- `src/controllers/CourseController.ts` - Xử lý logic course

## 🚀 **Tính năng chính**

### **Student Features:**
- ✅ **Dashboard** - Thống kê cá nhân, courses, attendance
- ✅ **Attendance** - QR code scanning simulation
- ✅ **Schedule** - Weekly schedule grid với navigation
- ✅ **Courses** - Quản lý khóa học đã đăng ký
- ✅ **Classes** - Xem thông tin lớp học
- ✅ **Announcements** - Xem thông báo với filters
- ✅ **Tuition Fee** - Quản lý học phí và thanh toán
- ✅ **Profile** - Cập nhật thông tin cá nhân

### **Lecturer Features:**
- ✅ **Dashboard** - Overview với stats, classes, announcements
- ✅ **Attendance Management** - Quản lý điểm danh với table, filters
- ✅ **Schedule** - Teaching schedule với weekly grid
- ✅ **Courses** - Quản lý courses với stats và details
- ✅ **Classes** - Class management với enrollment tracking
- ✅ **Announcements** - Tạo và quản lý announcements với priority levels
- ✅ **Profile** - Thông tin cá nhân

### **Admin Features:**
- ✅ **Dashboard** - System overview với analytics, health monitoring
- ✅ **Accounts Management** - Quản lý tài khoản người dùng
- ✅ **Students Management** - Quản lý sinh viên
- ✅ **Lecturers Management** - Quản lý giảng viên
- ✅ **Courses Management** - Quản lý khóa học
- ✅ **Classes Management** - Quản lý lớp học
- ✅ **Enrollment Management** - Quản lý đăng ký
- ✅ **Announcements** - Quản lý thông báo toàn trường
- ✅ **Reports** - Báo cáo attendance và thống kê
- ✅ **Settings** - Cài đặt hệ thống

## 🛠️ **Công nghệ sử dụng**

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **State Management:** MVC Pattern với Controllers
- **Build Tool:** Create React App
- **Backend:** Node.js + Express + SQL Server
- **Authentication:** JWT Tokens
- **Database:** SQL Server với connection pooling

## 📦 **Cài đặt và chạy**

### **Bước 1: Cài đặt Node.js**
```bash
# Kiểm tra phiên bản
node --version
npm --version

# Nếu chưa có, tải từ https://nodejs.org/
```

### **Bước 2: Clone và cài đặt dependencies**
```bash
cd OCMS-FRONTEND-UI
npm install
```

### **Bước 3: Chạy ứng dụng**
```bash
# Frontend
npm start

# Backend (trong thư mục backend)
cd backend
npm install
npm run dev
```

Ứng dụng sẽ chạy tại: `http://localhost:3000`
API Backend: `http://localhost:5000`

## 🔐 **Tài khoản demo**

### **Student:**
- Username: `student1`
- Password: `password123`

### **Lecturer:**
- Username: `dr.smith`
- Password: `password123`

### **Admin:**
- Username: `admin`
- Password: `password123`

## 📁 **Cấu trúc thư mục**

```
OCMS-FRONTEND-UI/
├── src/
│   ├── models/                 # M - Models (dữ liệu và logic nghiệp vụ)
│   │   ├── index.ts           # Định nghĩa interfaces
│   │   ├── UserModel.ts       # Logic User
│   │   └── CourseModel.ts     # Logic Course
│   ├── controllers/           # C - Controllers (logic điều khiển)
│   │   ├── AuthController.ts  # Xử lý authentication
│   │   └── CourseController.ts # Xử lý course
│   ├── views/                # V - Views (giao diện)
│   │   ├── LoginView.tsx     # Giao diện đăng nhập
│   │   ├── student/          # 7 Views cho student
│   │   ├── lecturer/         # 6 Views cho lecturer
│   │   └── admin/            # 10 Views cho admin
│   ├── components/           # Components chung
│   │   └── common/           # Header, Sidebar, Layout
│   └── assets/              # Hình ảnh và tài nguyên
├── backend/                 # Node.js API Server
│   ├── controllers/         # API Controllers
│   ├── middleware/          # Authentication, CORS, etc.
│   ├── routes/              # API Routes
│   └── scripts/             # Database seeding
├── database/                # SQL Server schema
├── reports/                 # Project documentation
└── public/                  # Static assets
```

## 🎨 **Thiết kế UI/UX**

### **Color Scheme:**
- **Student:** Green theme (`#10B981`)
- **Lecturer:** Blue theme (`#3B82F6`)
- **Admin:** Purple theme (`#8B5CF6`)

### **Layout:**
- **Header:** Search bar + notifications + profile dropdown
- **Sidebar:** OCMS logo + navigation menu + quick stats
- **Main Content:** Role-based views với consistent design

### **Responsive Design:**
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid system

### **Accessibility:**
- ARIA labels
- Keyboard navigation
- Screen reader support
- High contrast ratios

## ✅ **Project Checklist**

### **Frontend Development:**
- [x] **React 18 + TypeScript Setup**
- [x] **MVC Architecture Implementation**
- [x] **Tailwind CSS Integration**
- [x] **React Router DOM Setup**
- [x] **Authentication System**
- [x] **Role-based Routing**
- [x] **Protected Routes**
- [x] **Student Views (7/7)**
- [x] **Lecturer Views (6/6)**
- [x] **Admin Views (10/10)**
- [x] **Responsive Design**
- [x] **UI/UX Consistency**
- [x] **Error Handling**
- [x] **Loading States**

### **Backend Development:**
- [x] **Node.js + Express Setup**
- [x] **SQL Server Integration**
- [x] **JWT Authentication**
- [x] **Role-based Authorization**
- [x] **API Routes Implementation**
- [x] **Database Controllers**
- [x] **Middleware Setup**
- [x] **Error Handling**
- [x] **Data Seeding Scripts**

### **Database:**
- [x] **SQL Server Schema Design**
- [x] **15+ Tables Implementation**
- [x] **Foreign Key Relationships**
- [x] **Indexes Optimization**
- [x] **Sample Data Population**

### **Integration:**
- [x] **Frontend ↔ Backend Connection**
- [x] **Database ↔ API Synchronization**
- [x] **Models ↔ Schema Alignment**
- [x] **Controllers ↔ Endpoints Mapping**
- [x] **Authentication Flow**
- [x] **Data Flow Validation**

### **Quality Assurance:**
- [x] **TypeScript Compilation**
- [x] **Build Process**
- [x] **Code Quality (ESLint)**
- [x] **Performance Optimization**
- [x] **Security Implementation**
- [x] **Documentation**

## 🔧 **Troubleshooting**

### **Lỗi "react-scripts is not recognized":**
```bash
# Xóa node_modules và cài lại
rmdir /s node_modules
del package-lock.json
npm install

# Hoặc force install
npm install --force

# Clear cache
npm cache clean --force
```

### **Lỗi TypeScript:**
```bash
# Kiểm tra phiên bản TypeScript
npx tsc --version

# Rebuild
npm run build
```

### **Database Connection:**
```bash
# Kiểm tra SQL Server
# Import OCMS.sql schema
# Chạy seeding script
cd backend
npm run seed
```

## 📋 **Roadmap**

### **Phase 1 - Core Features (✅ Hoàn thành)**
- [x] Authentication system
- [x] Role-based routing
- [x] Complete MVC architecture
- [x] All user interfaces
- [x] Database integration
- [x] API development

### **Phase 2 - Enhanced Features (🔄 Đang phát triển)**
- [ ] Real QR code scanning
- [ ] File upload/download
- [ ] Advanced filtering
- [ ] Charts and analytics
- [ ] Real-time notifications

### **Phase 3 - Advanced Features (📅 Kế hoạch)**
- [ ] Mobile app
- [ ] Dark mode
- [ ] Internationalization
- [ ] Unit testing
- [ ] Performance optimization

## 🤝 **Đóng góp**

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 **License**

Dự án này được phát triển cho mục đích học tập và nghiên cứu.

## 👥 **Team**

- **Developer:** [Your Name]
- **Course:** Introduction to Software Engineering
- **University:** UMT

---

**OCMS - Empowering Education Through Technology** 🎓✨

**Status: ✅ Production Ready** 🚀 