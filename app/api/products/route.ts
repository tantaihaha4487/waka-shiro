import { NextResponse } from 'next/server';
import { products, type Product } from '@/lib/data';

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, name_th, price, category, description, description_th, image } = body as Partial<Product> & { price: number };

    if (!name || !price || !category || !description || !image) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: name as string,
      name_th: (name_th as string) || (name as string),
      price: Number(price),
      category: (category as any) === 'savory' ? 'savory' : 'sweet',
      description: description as string,
      description_th: (description_th as string) || (description as string),
      image: image as string,
    };

    products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
