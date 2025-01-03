interface Env {
    DB: D1Database;
  }
  
  export const onRequest = async (context: EventContext<Env>) => {
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