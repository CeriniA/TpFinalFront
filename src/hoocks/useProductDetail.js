import { useEffect, useState } from "react";

const useProductDetail = (productId) => {
        const [product, setProduct] = useState(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)

        const baseUrl = import.meta.env.VITE_API_URL
        const productUrl = `${baseUrl}/${productId}`

        useEffect(() => {
            if(!productId){
                setError(new Error("No se proporcionó un ID de producto"))
                setLoading(false)
                return;
            }
            const fetchProduct = async () => {
                setLoading(true);
                setError(null);
                try {
                    //fetch expandido
                    // const response = await fetch(productUrl)
                   const response = await fetch(productUrl, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    if(!response.ok) {
                        throw new Error(`Http error! status: ${response.status} - No se encontró el producto`)
    
                    }
                    const data = await response.json()
                    setProduct(data)
                } catch (error) {
                    console.error(`Error recuperando el producto con el ID ${productId}`)
                    setError(error)
                    setProduct(null)
                } finally {
                    setLoading(false)
                }
            }
    
            fetchProduct()
        }, [productId, productUrl])
        return { product, loading, error }
}

export default useProductDetail;