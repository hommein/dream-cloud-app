import { D1Database, ExecutionContext } from '@cloudflare/workers-types';

interface Env {
  DB: D1Database;
}

type AppContext = {
  request: Request;
  env: Env;
  params: { [key: string]: string };
};

export const onRequest = async (context: AppContext) => {
  try {
    const results = await context.env.DB
      .prepare('SELECT * FROM inputs ORDER BY timestamp DESC')
      .all();

    return new Response(JSON.stringify(results), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};