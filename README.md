# Ananda Nilayam - Apartment Management System

A comprehensive apartment management mobile application built with Ionic Angular, featuring role-based authentication and multi-user dashboards.

## 🚀 Technologies Used

- **Framework**: Ionic 8.0.0
- **Frontend**: Angular 20.0.0
- **Language**: TypeScript 5.9.0
- **Mobile**: Capacitor 8.0.0
- **Icons**: Ionicons 7.0.0
- **Mock Backend**: JSON Server
- **Build Tool**: Angular CLI 20.0.0

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm (v9 or higher)
- Ionic CLI (`npm install -g @ionic/cli`)
- Android Studio (for Android builds)
- JDK 17 or higher
- Git

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rajeshsivaji/anandanilayam.git
cd anandanilayam
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start JSON Server (Mock Backend)

```bash
npm run json-server
```

This will start the JSON server on `http://localhost:3000`

### 4. Run the Application

In a new terminal:

```bash
ionic serve
```

or

```bash
npm start
```

The app will open at `http://localhost:8100`

## 👥 User Roles & Test Credentials

The application supports 5 different user roles:

| Role | Mobile Number | Description |
|------|--------------|-------------|
| Admin | 9999999999 | Full system access |
| Security | 8888888888 | Visitor management |
| Staying Owner | 7777777777 | Owner living in property |
| Tenant | 6666666666 | Tenant access |
| Non-Staying Owner | 5555555555 | Owner not living in property |

**OTP**: Any 6-digit number (e.g., 123456)

## 📱 Features by Role

### Admin
- Dashboard overview
- User management
- System settings
- Profile management

### Security
- Visitor entry/exit management
- Expected visitors list
- Walk-in entry
- Visitor logs
- Emergency contacts
- Profile

### Tenant
- Home dashboard
- Visitor management
- Profile

### Staying Owner
- Home dashboard
- Visitor management
- Property management
- Profile

### Non-Staying Owner
- Property overview
- Tenant information
- Reports
- Profile

## 🏗️ Build for Production

### Web Build

```bash
npm run build
```

Build files will be in `www/` directory.

### Android APK Generation

#### Step 1: Build the Web App

```bash
npm run build
```

#### Step 2: Sync with Capacitor

```bash
npx cap sync android
```

#### Step 3: Generate Debug APK

```bash
cd android
gradlew assembleDebug
```

The APK will be generated at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

#### Step 4: Generate Release APK (Signed)

First, create a keystore:

```bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

Then build:

```bash
cd android
gradlew assembleRelease
```

The release APK will be at:
```
android/app/build/outputs/apk/release/app-release.apk
```

## 📂 Project Structure

```
anandaNilaya/
├── src/
│   ├── app/
│   │   ├── admin/              # Admin module
│   │   ├── security/           # Security module
│   │   ├── tenant/             # Tenant module
│   │   ├── owner/              # Owner modules (staying & non-staying)
│   │   ├── login/              # Login page
│   │   ├── otp-verification/   # OTP verification
│   │   ├── services/           # Services (auth, api)
│   │   └── shared/             # Shared components
│   ├── assets/                 # Images and static files
│   └── theme/                  # Global styles
├── android/                    # Android platform files
├── db.json                     # Mock database
└── capacitor.config.ts         # Capacitor configuration
```

## 🛠️ Available Scripts

```bash
npm start              # Start development server
npm run build          # Build for production
npm run json-server    # Start mock backend
ionic serve            # Run with Ionic CLI
ionic build            # Build with Ionic CLI
npx cap sync           # Sync web assets to native platforms
npx cap open android   # Open Android Studio
```

## 🎨 Key Features

- ✅ Role-based authentication
- ✅ OTP verification
- ✅ Multi-user dashboards
- ✅ Visitor management system
- ✅ Profile management
- ✅ Responsive design
- ✅ Outline icons (consistent UI)
- ✅ Bottom tab navigation
- ✅ Android APK support

## 🔐 Security Notes

- OTP verification is currently mock (accepts any 6-digit code)
- User data is stored in `db.json` for development
- For production, integrate with a real backend API
- Implement proper authentication and authorization

## 📝 Database Schema

The `db.json` file contains:
- Users (with roles)
- Notices
- Complaints
- Maintenance Bills
- Payments
- Visitors

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Developed by Rajesh Sivaji

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.

---

**Note**: This is a development version. For production deployment, ensure proper backend integration, security measures, and testing.
