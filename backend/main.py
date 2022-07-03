import asyncio
import websockets

from connection import Conversation, Users

PORT = 7890

print(f"Server is listening on Port {PORT}")

connected = set()


async def handler(websocket, path):
    connected.add(websocket)
    try:
        async for message in websocket:
            for conn in connected:
                await conn.send(f"{message}")
    except websockets.exceptions.ConnectionClosed:
        print("A Client just disconnected")

    finally:
        connected.remove(websocket)


start_server = websockets.serve(handler, "localhost", PORT)

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
