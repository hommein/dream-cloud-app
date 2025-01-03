import { D1Database } from '@cloudflare/workers-types';

interface Env {
    DB: D1Database;
  }
  
  export default async function handler(req: Request, env: Env) {
    const users = await env.DB.prepare('SELECT * FROM users').all();
    return Response.json(users);
  }