import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

// إعدادات مشروعك التي أرسلتها سابقاً
const firebaseConfig = {
  apiKey: "AIzaSyB98ZcMGXH5z20p7H9T-PXyM_29Xb0KN54",
  authDomain: "claudsmm-1bf0e.firebaseapp.com",
  projectId: "claudsmm-1bf0e",
  storageBucket: "claudsmm-1bf0e.firebasestorage.app",
  messagingSenderId: "1028854156095",
  appId: "1:1028854156095:web:a501ebb98679f82a40218a"
};

// بدء تشغيل Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// هذا الكود هو المسؤول عن معالجة عملية تسجيل الدخول في الخلفية
window.addEventListener('message', (event) => {
  if (event.origin !== window.location.origin) return;
  // معالجة البيانات القادمة من النافذة المنبثقة
});
