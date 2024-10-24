const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    databaseURL: "TU_DATABASE_URL",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();


database.ref('gastos/').push({
    monto: 40000,
    justificacion: "Comida",
    fecha: new Date().toLocaleString()
});


database.ref('gastos/').on('value', (snapshot) => {
    const datos = snapshot.val();
    console.log(datos);
});
