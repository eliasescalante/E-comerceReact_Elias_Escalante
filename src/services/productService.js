import { db } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

export const getProducts = async () => {
    const productsCollection = collection(db, 'items');
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productsList;
};

export const getProductById = async (id) => {
    const productDoc = doc(db, 'items', id);
    const productSnapshot = await getDoc(productDoc);
    if (productSnapshot.exists()) {
        return { id: productSnapshot.id, ...productSnapshot.data() };
    } else {
        throw new Error('Producto no encontrado');
    }
};
