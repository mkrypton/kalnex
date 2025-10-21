import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjFe0iplfkw-SGS2Vf6zX0I5DR8Tb2lJg",
  authDomain: "kalnex-global.firebaseapp.com",
  projectId: "kalnex-global",
  storageBucket: "kalnex-global.firebasestorage.app",
  messagingSenderId: "567627530587",
  appId: "1:567627530587:web:e8cb420c0eb83239e21a7e",
  measurementId: "G-EM6TZ3WR6X"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);