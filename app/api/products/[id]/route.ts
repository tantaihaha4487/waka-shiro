import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

export async function GET(req: Request, context: any) {
  // context.params may be a Promise in some Next.js typings/runtime
  const params = typeof context?.params?.then === 'function' ? await context.params : context?.params;
  const id = params?.id;
  const product = products.find(p => p.id === id);
  if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}
