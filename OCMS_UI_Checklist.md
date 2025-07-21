# OCMS Front-End UI Checklist

**Format:**  
- ☐ = pending  
- ☑ = done  
- ❔ = need more info

---

## A. Common Layout & Components

### A.1 Header
- ☐ Background color: `#003f7f` (dark blue)  
- ☐ Left: **`DASHBOARD`** logo/text  
- ☐ Center: search input + magnifier icon  
- ☐ Right: notification bell icon + avatar (click opens dropdown: Profile / Sign out)

### A.2 Sidebar
- ☐ Background: `#003f7f` (dark blue)  
- ☐ Menu items: white text; active item highlight uses **role-specific accent color** (text + left border)  
- ☐ Sub-menus: nested under parent (e.g., **Class** ▶ Tests, Grades, Material, Details), slightly lighter background  
- ☐ Bottom: gear/settings icon (click opens System Settings)

### A.3 Footer
- ☐ Static footer with university logo/name on dark blue background

### A.4 Navigation & Theme Consistency
- ☐ Every page includes forward/backward navigation (breadcrumbs or “Back” buttons)  
- ☐ Links between list/detail pages work both directions  
- ☐ Shared components (Header, Sidebar, Footer, Buttons, Modals) look and behave identically for all roles  
- ☐ Theme (colors, typography, spacing) is consistent site-wide; common elements share styles

---

## B. Student UI

### B.1 Attendance (QR-scan)
- ☐ Menu item **Attendance**  
- ☐ Full-screen scan panel with:  
  - Centered icon (✔️/❌)  
  - Text “Scan QR Code” below  
- ☐ System camera-permission prompt on first access  
- ☐ After scan: display result and update record

### B.2 My Schedule
- ☐ Menu item **My Schedule**  
- ☐ Week-view calendar (Mon–Sat columns)  
- ☐ Each cell: course code, time, room  
- ☐ Click row → open details panel

### B.3 Announcement
- ☐ Menu item **Announcement**  
- ☐ Search bar at top  
- ☐ List items on light-gray backgrounds, showing: title, date, summary, PDF icon if attachment  
- ☐ Click item → open full announcement in panel/modal

### B.4 Classes
- ☐ Menu **Classes** ▶ **Tests**, **Grades**, **Material**, **Class Details**

#### B.4.1 Tests
- ☐ List tests as gray rows, include test name + “View” arrow  
- ☐ Click → view test details (read-only)

#### B.4.2 Grades
- ☐ Table columns: #, Test ID, Test Name, Grade  
- ☐ Display grades read-only

#### B.4.3 Material
- ☐ Table rows: Lecture 1–7  
- ☐ Actions: **Preview**, **Download** buttons

#### B.4.4 Class Details
- ☐ Panel displays class metadata: ID, name, lecturer, schedule

### B.5 Courses
- ☐ Menu item **Courses**  
- ☐ Empty state shows **+ Courses** button  
- ☐ Click → open form to select semester → submit  
- ☐ List courses: code, name, **View** action

### B.6 Tuition Fee
- ☐ Menu item **Tuition Fee**  
- ☐ Dropdown to select semester → display tuition amount per semester  
- ☐ Click → view detailed tuition table for that semester

### B.7 Profile
- ☐ Avatar dropdown ▶ **My Profile**  
- ☐ Tabs: **General**, **Contact**, **Cohort**  
- ☐ Layout: left = vertical tabs; center = read-only fields; right = avatar + **Take a photo** / **Select photo**  
- ☐ Editing enabled: save updated fields & photo

---

## C. Lecturer UI

### C.1 Attendance
- ☐ Menu item **Attendance**  
- ☐ Table of classes: #, Course ID, Name, Room  
- ☐ Actions: **Create QR code**, **View sessions**  
- ☐ Session view: list QR codes (ID, date) + **View**  
- ☐ Inside session: student table with ✔️ icons + **Export CSV**

### C.2 My Schedule
- ☐ Same as Student but only shows classes taught  
- ☐ Click row → open Tests/Grades/Material/Class Details

### C.3 Announcement
- ☐ Menu item **Announcement**  
- ☐ Toolbar: search + **New** button  
- ☐ New-announcement modal: **Head**, **Receiver** (dropdown), **Information** (textarea), **Attach file**, **Submit**  
- ☐ After submit: show “Sent” status in list

### C.4 Classes
- ☐ Menu **Classes** ▶ **Tests**, **Grades**, **Material**, **Class Details**

#### C.4.1 Tests
- ☐ List existing tests + **Add (+)** button  
- ☐ New Test modal: **Name**, **Add Question** (+), **Submit**  
- ☐ Inline **Edit** for existing tests

#### C.4.2 Grades
- ☐ Editable table: student rows with grade input fields + **Save** button

#### C.4.3 Material
- ☐ List lecture materials + **Add** button to upload files

#### C.4.4 Class Details
- ☐ Read-only panel with class metadata

### C.5 Courses
- ☐ Menu item **Courses**  
- ☐ Semester dropdown → list courses taught  
- ☐ Actions: **View**, **Add Tests**

### C.6 Profile
- ☐ Same as Student  
- ☐ Email domain `@umt.edu.vn` shown; contact fields editable

---

## D. Admin UI

### D.1 Dashboard
- ☐ Grid of cards (2×3): Students, Lecturers, Classes, Courses, Attendance %, Enrollment %  
- ☐ Charts (bar/line) below cards: attendance trend, enrollment trend

### D.2 Accounts
- ☐ Menu item **Accounts**  
- ☐ Role filter (Student, Lecturer, Admin)  
- ☐ Dynamic table: striped rows, status icons, Actions (Edit 🖉 / Delete 🗑)

### D.3 User Management

#### D.3.1 Students
- ☐ Toolbar: search + **New Student** button  
- ☐ Table: #, Student ID, Name, Email, Cohort, **Actions** (Edit 🖉 / Delete 🗑)  
- ☐ Modal New/Edit Student: form fields + **Save** / **Cancel**

#### D.3.2 Lecturers
- ☐ Same as Students but columns: Lecturer ID, Name, Department, Email

### D.4 Course Management
- ☐ Toolbar: semester dropdown + **New Course**  
- ☐ Table: #, Course ID, Name, Credits, **Actions**  
- ☐ Modal New/Edit Course: ID, Name, Credits, Description

### D.5 Class Management
- ☐ Filters: semester + course dropdowns  
- ☐ Table: #, Class ID, Room, Lecturer, Schedule, Enrolled (#), **Actions**  
- ☐ Actions: **View Enrollments** (sub-panel with checkboxes + Enroll/Unenroll), **Edit**, **Delete**  
- ☐ Modal New/Edit Class: select course, lecturer, room, date/time picker

### D.6 Enrollment Management
- ☐ Menu item **Enrollment**  
- ☐ Class dropdown filter  
- ☐ Dual-list table: left = unenrolled students, right = enrolled; buttons **>** / **<** to move

### D.7 Announcement
- ☐ Toolbar: search + **New Announcement**  
- ☐ List items with **Edit** / **Delete**  
- ☐ Modal: Head, Receiver (All / Students / Lecturers / Class), rich-text info, file attachment

### D.8 Attendance Reports
- ☐ Filters: semester, class, date range picker  
- ☐ **Generate Report** button  
- ☐ Display: table (#, Student ID, Name, Sessions, Attended %, …), chart distribution, **Export (CSV/PDF)**

### D.9 System Settings
- ☐ Tabs: Semesters, Departments, Roles & Permissions, Integrations  
- ☐ Each tab: table list + **New/Edit** modal (similar to Course Management)

---

## E. Style Guide

- **Colors:**  
  - Primary: `#003f7f` (dark blue)  
  - Neutral: `#ffffff` (white), `#f0f0f0` (light gray)

---

## F. Role Color Coding

- **Student (Accent: yellow `#FFD700`)**  
  - Sidebar active highlight, button borders/text, tab underline  
  - Table row hover/selection border, status indicators

- **Lecturer (Accent: blue `#0000FF`)**  
  - Sidebar active highlight, button borders/text, tab underline  
  - Modal header accent, submenu active background, chart elements

- **Admin (Accent: green `#00FF00`)**  
  - Sidebar active highlight, button borders/text, tab underline  
  - Dashboard cards (border/icon), chart accents, report buttons

---

## G. Testing & Accessibility

- ☐ Responsive layout checks (mobile/tablet/desktop)  
- ☐ Modal & dropdown close on outside click  
- ☐ Keyboard navigation (tab order, focus states)  
- ☐ ARIA labels for form controls & buttons  
- ☐ Color contrast meets WCAG 2.1 guidelines  
- ☐ All interactive features tested and working

---

## H. In Progress & TODO

- ☐ Integrate real data in Courses section  
- ☐ Implement Profile editing & photo upload  
- ☐ Enable Add/Edit/Delete functionality across all sections  
- ☐ Connect with backend APIs for data operations  
- ☐ Accessibility improvements & QA  
- ☐ Final UI/UX polish

---

## I. Pages Structure

- **Total estimated 
files in `src/pages/`: 24**

1. `Login.tsx`
2. **Student** (7):
   - `StudentAttendance.tsx`
   - `StudentSchedule.tsx`
   - `StudentAnnouncement.tsx`
   - `StudentClasses.tsx`
   - `StudentCourses.tsx`
   - `StudentTuitionFee.tsx`
   - `StudentProfile.tsx`
3. **Lecturer** (6):
   - `LecturerAttendance.tsx`
   - `LecturerSchedule.tsx`
   - `LecturerAnnouncement.tsx`
   - `LecturerClasses.tsx`
   - `LecturerCourses.tsx`
   - `LecturerProfile.tsx`
4. **Admin** (10):
   - `AdminDashboard.tsx`
   - `AdminAccounts.tsx`
   - `AdminStudents.tsx`
   - `AdminLecturers.tsx`
   - `AdminCourses.tsx`
   - `AdminClasses.tsx`
   - `AdminEnrollment.tsx`
   - `AdminAnnouncement.tsx`
   - `AdminAttendanceReports.tsx`
   - `AdminSettings.tsx`

---