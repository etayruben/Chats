from logging import info, warning, error, debug
import asyncio
import websockets

PORT = 7890

info(f"Server is listening on Port {PORT}")

connected = set()


async def main(websocket, path):
    info("A client just connected")
    try:
        async for message in websocket:
            info(f"Received message from client: {message}")
            for conn in connected:
                if conn != websocket:
                    await conn.send(f"Someone said: {message}")
            await websocket.send(message)
    except websockets.exceptions.ConnectionClosed:
        info("A Client just disconnected")

    finally:
        connected.remove(websocket)


start_server = websockets.serve(main, "localhost", PORT)

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
