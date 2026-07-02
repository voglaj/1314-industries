import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is not configured');
      return NextResponse.json(
        { error: 'Payment processing is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const { items } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: `${request.headers.get('origin')}/success`,
      cancel_url: `${request.headers.get('origin')}/cart`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
