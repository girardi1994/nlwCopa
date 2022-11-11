

export function poolRoutes(fastify){
  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();

    return { count };
  });
}