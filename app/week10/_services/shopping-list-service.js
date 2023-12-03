import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/* database rules
rules_version = '2';
 
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null && request.auth.uid == userId && request.resource.data.size() == 0;
 
      match /items/{itemId} {
        allow read: if request.auth != null && request.auth.uid == userId;
        allow write: if request.auth != null && request.auth.uid == userId
                          && request.resource.data.keys().hasOnly(['name', 'quantity', 'category'])
                          && request.resource.data.name is string
                          && request.resource.data.name.size() >= 1
                          && request.resource.data.name.size() <= 50
                          && request.resource.data.quantity is int
                          && request.resource.data.quantity >= 1
                          && request.resource.data.quantity <= 100
                          && request.resource.data.category is string
                          && request.resource.data.category in ['produce', 'dairy', 'bakery', 'meat', 'frozen foods', 'canned goods', 'dry goods', 'beverages', 'snacks', 'household', 'other'];
      }
    }
  }
}
*/
// Function to get all shopping list items for a user

async function getItems(userId) {
    const items = [];

    // Reference to the items subcollection under the user document
    const userItemsRef = collection(db, "users", userId, "items");

    // Query to get all documents from the items subcollection
    const itemsQuery = query(userItemsRef);

    // Get the documents
    const querySnapshot = await getDocs(itemsQuery);

    // iterate through the documents and add them to the items array
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });

return items;
}

// Function to add a new item to the shopping list
async function addItem(userId, item) {
    // Reference to the items subcollection under the user document
    const userItemsRef = collection(db, "users", userId, "items");

    // Add the item to the items subcollection
    const docRef = await addDoc(userItemsRef, item);

    // Return the document ID
    return docRef.id;
}

export { getItems, addItem };