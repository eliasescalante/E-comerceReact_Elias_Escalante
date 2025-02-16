// src/services/productService.js
import { db } from './firebase'; // Asegúrate de que la importación esté correcta
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

// Obtener todos los productos
export const getProducts = async () => {
    const productsCollection = collection(db, 'items'); // Acceder a la colección 'products'
    const productsSnapshot = await getDocs(productsCollection); // Obtener todos los documentos de la colección
    const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Mapear los productos
    return productsList;
};

// Obtener un producto por su ID
export const getProductById = async (id) => {
    const productDoc = doc(db, 'items', id); // Acceder al documento del producto por su ID
    const productSnapshot = await getDoc(productDoc); // Obtener el documento
    if (productSnapshot.exists()) {
        return { id: productSnapshot.id, ...productSnapshot.data() }; // Retornar el producto con el ID
    } else {
        throw new Error('Producto no encontrado');
    }
};
