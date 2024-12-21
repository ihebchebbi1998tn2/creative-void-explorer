import axios from 'axios';
import { Product } from '../types/product';

const BASE_URL = 'https://respizenmedical.com/fiori';

interface ApiResponse {
  status: string;
  products: {
    id_product: string;
    reference_product: string;
    nom_product: string;
    img_product: string;
    description_product: string;
    type_product: string;
    category_product: string;
    price_product: string;
    qnty_product: string;
    status_product: string;
    createdate_product: string;
  }[];
}

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/get_all_articles.php`);
    
    if (response.data.status === 'success') {
      return response.data.products.map(product => ({
        id: parseInt(product.id_product),
        name: product.nom_product,
        material: product.type_product,
        color: product.category_product,
        price: parseFloat(product.price_product),
        image: `${BASE_URL}/${product.img_product}`,
        description: product.description_product,
        status: product.status_product,
        reference: product.reference_product
      }));
    }
    throw new Error('Failed to fetch products');
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};