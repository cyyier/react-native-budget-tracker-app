// src/config/firebaseConfig.js
import {initializeApp} from 'firebase/app';
import {getDatabase, ref, push} from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// 初始化 Firebase 应用
const app = initializeApp(firebaseConfig);
// 获取数据库实例
const database = getDatabase(app);

export {database};
