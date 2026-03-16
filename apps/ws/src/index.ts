import { WebSocketServer } from 'ws';
import { prisma } from "@repo/db";

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
  console.log("New client connected!");

  // Example: Count total users and send it to the client
  const count = await prisma.member.count();
  ws.send(`Welcome! Total members in DB: ${count}`);
  
  ws.on('message', (data) => {
    console.log('received: %s', data);
  });
});

console.log("WS Server running on ws://localhost:8080");