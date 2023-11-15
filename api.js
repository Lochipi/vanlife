// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyClIQ2p2RF1ccGDGkOdzfLAPnfpbi2jeEs",
//   authDomain: "vanlife-c3888.firebaseapp.com",
//   projectId: "vanlife-c3888",
//   storageBucket: "vanlife-c3888.appspot.com",
//   messagingSenderId: "41770992356",
//   appId: "1:41770992356:web:d2f01f99fe468bde54a2f1",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// Refactoring the fetching functions below
// const vansCollectionRef = collection(db, "vans");

export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
