'use client'
import UpdateProductForm from '@/components/forms/UpdateProductForm'
import React, { useState, useEffect } from 'react'
import { ParamProps } from '@/app/[id]/page'
import { BASE_API_URL } from '../../../../lib/constants'

// Assuming ProductType is defined somewhere in your project
import { ProductType } from '@/components/types/ProductType'

async function getDetail(id: number): Promise<ProductType> {
    const data = await fetch(`${BASE_API_URL}products/${id}/`);
    return data.json();
}

export default function Page() {
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        // Fetch the product data here
        const fetchProduct = async () => {
            const productData = await getDetail(1); // Pass the appropriate product id here
            setProduct(productData);
        };
        fetchProduct();
    }, []);

    // Define a function to handle update
    const handleUpdate = (updatedProduct: ProductType) => {
        // Logic to update the product
        console.log("Updated product:", updatedProduct);
    };

    return (
        <div>
            {product && (
                <UpdateProductForm product={product} onUpdate={handleUpdate} />
            )}
        </div>
    )
}
