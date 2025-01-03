import { D1Database, ExecutionContext } from '@cloudflare/workers-types';

interface Env {
  DB: D1Database;
}

interface InputRequest {
  input: string;
  userEmail: string | null;
}

type AppContext = ExecutionContext & {
  env: Env;
};

export const onRequest = async (context: AppContext) => {
  if (context.request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { input, userEmail }: InputRequest = await context.request.json();

    if (!input) {
      throw new Error('Input is required');
    }

    await context.env.DB.prepare(
      'INSERT INTO inputs (input_text, user_email) VALUES (?, ?)'
    )
    .bind(input, userEmail)
    .run();

    return new Response(JSON.stringify({ status: 'success' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};