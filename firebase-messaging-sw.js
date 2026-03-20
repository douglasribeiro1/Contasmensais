// Scripts necessários para o Firebase rodar em Background Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

// A MESMA configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD4jGS3fecgaK5fsUYfH_fdtwKwpLud0GE",
    authDomain: "monthly-bills-a70ee.firebaseapp.com",
    projectId: "monthly-bills-a70ee",
    storageBucket: "monthly-bills-a70ee.firebasestorage.app",
    messagingSenderId: "953639559020",
    appId: "1:953639559020:web:1e74257e567df308925d49"
};

// Inicializa o Firebase no Service Worker
firebase.initializeApp(firebaseConfig);

// Inicializa o Messaging
const messaging = firebase.messaging();

// Lida com notificações recebidas enquanto o app PWA estiver FECHADO ou em SEGUNDO PLANO
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensagem recebida em background.', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933116.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});