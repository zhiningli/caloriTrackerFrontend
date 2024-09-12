export const openIndexedDB = () => {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            reject("IndexedDB is not supported in this browser.");
            return;
        }

        const request = indexedDB.open('FoodDatabase', 2);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('foods')) {
                const objectStore = db.createObjectStore('foods', { keyPath: 'id' });
                objectStore.createIndex('name', 'name', { unique: false });
            }
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            resolve(db);
        };

        request.onerror = (event) => {
            reject("Error opening IndexedDB");
        };
    });
};

export const saveDataToIndexedDB = async (data) => {
    try {
        const db = await openIndexedDB(); 
        const transaction = db.transaction('foods', 'readwrite');
        const store = transaction.objectStore('foods');

        data.forEach((item) => store.put(item));

        transaction.oncomplete = () => {
            console.log("Data successfully saved to IndexedDB.");
        };

        transaction.onerror = (event) => {
            console.error("Transaction error:", event.target.error);
        };
    } catch (error) {
        console.error('Error saving data to IndexedDB:', error);
    }
};

export const checkIfDataLoadedFromIndexedDB = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const db = await openIndexedDB();
            const transaction = db.transaction('foods', 'readonly');
            const store = transaction.objectStore('foods');

            const countRequest = store.count();

            countRequest.onsuccess = () => {
                if (countRequest.result > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            };

            countRequest.onerror = () => {
                reject('Error counting items in IndexedDB');
            };
        } catch (error) {
            reject('Error opening IndexedDB');
        }
    });
};

export const searchFoodInIndexedDB = (foodName) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('FoodDatabase', 2);

        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction('foods', 'readonly');
            const store = transaction.objectStore('foods');
            const index = store.index('name'); // Ensure that the "name" index is created in IndexedDB schema.

            const suggestions = [];

            // Using a cursor to loop through items and match partially
            const range = IDBKeyRange.bound(foodName, foodName + '\uffff'); // This will match items starting with `foodName`
            const cursorRequest = index.openCursor(range);

            cursorRequest.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    suggestions.push(cursor.value); // Add the matching food to the suggestions array
                    cursor.continue(); // Move to the next matching item
                } else {
                    // If no more results, resolve with suggestions
                    resolve(suggestions);
                }
            };

            cursorRequest.onerror = () => {
                reject('Error fetching data from IndexedDB');
            };
        };

        request.onerror = (event) => {
            reject('Error opening IndexedDB');
        };
    });
};
  

export const getFoodCategoryFromIndexedDB = async (foodName) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('FoodDatabase', 2); 
        
        request.onerror = (event) => {
            console.error('IndexedDB error:', event);
            reject(null); 
        };
        
        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(['foods'], 'readonly');
            const objectStore = transaction.objectStore('foods');
            const nameIndex = objectStore.index('name'); // Use the 'name' index

            const getRequest = nameIndex.get(foodName); // Search by 'name' instead of 'id'

            getRequest.onsuccess = (event) => {
                const foodData = event.target.result;
                if (foodData) {
                    resolve(foodData.category); // Resolve with the category
                } else {
                    resolve(null); // If no foodData is found, resolve with null
                }
            };

            getRequest.onerror = (event) => {
                console.error('Error fetching food from IndexedDB:', event);
                reject(null); 
            };
        };
    });
};
