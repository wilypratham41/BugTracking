# BugTracking
OG bugtracking system build on top of react and boot
web sockets ::

a protocol used for communication between client and server , fullduplex

handshake : client first connect via HTTp then ask like "Hey, can we upgrade this connection to WebSocket?" if server = 'Yes' webSockets connection estabilished 

client ::: browser or frontend part use websocket api to connect server 

server ::: service that listen for web sockets connections, managing connections, routing messages, and broadcasting.

Handshake → entry gate.

Persistent Connection → phone call (always on). server ping client pong

Message Frames → small packets of data.

Ping/Pong → health check.

Events → actions to listen to.

Rooms/Channels → groups in chat.

Broadcasting → one-to-many messages. client to server then server to rest client 

Scaling → handling thousands of users. load balencers 	
