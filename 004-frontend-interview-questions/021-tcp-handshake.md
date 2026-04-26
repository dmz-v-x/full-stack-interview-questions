### Question
Explain the TCP 3-Way Handshake process. 

### Answer

The **TCP 3-Way Handshake** is the process used to establish a reliable connection between a **client** and a **server** before data transmission begins.

TCP stands for:

    Transmission Control Protocol

TCP is the protocol used for reliable communication on the internet. It ensures:

- Reliable delivery of data
- Ordered delivery
- Error detection
- Connection-oriented communication

Before any data (like HTTP requests) can be exchanged, TCP must first establish a connection using the **3-way handshake**.

To understand this fully, we must first understand some networking basics.

---

### Step 1: Where TCP Exists in the Internet Stack

Internet communication follows the **TCP/IP model**.

Simplified networking layers:

    Application Layer → HTTP, HTTPS, FTP
    Transport Layer → TCP, UDP
    Internet Layer → IP
    Network Layer → Ethernet/WiFi

TCP operates at the **Transport Layer**.

HTTP (used by browsers) depends on TCP to send and receive data reliably.

Example:

When you open:

    https://example.com

The browser first establishes a TCP connection with the server before sending the HTTP request.

---

### Step 2: What is a TCP Connection

A TCP connection is a **reliable communication channel** established between two devices.

Participants:

    Client → initiates connection
    Server → accepts connection

Example:

    Browser → Client
    Web Server → Server

Before sending any data, both sides must synchronize and agree on parameters.

This synchronization is done using the **3-Way Handshake**.

---

### Step 3: Why TCP Needs a Handshake

The handshake ensures:

- Both sides are ready
- Both sides agree on sequence numbers
- Both sides confirm connectivity
- Reliable communication can begin

Without a handshake, packets might arrive:

- out of order
- incomplete
- duplicated

The handshake establishes reliability.

---

### Step 4: Overview of TCP 3-Way Handshake

The handshake consists of **three steps**:

    1 SYN
    2 SYN-ACK
    3 ACK

Sequence:

    Client → SYN → Server
    Server → SYN-ACK → Client
    Client → ACK → Server

After these three steps, the connection is established.

---

### Step 5: TCP Flags

TCP packets contain flags used to control communication.

Important flags include:

    SYN → Synchronize
    ACK → Acknowledge
    FIN → Finish connection
    RST → Reset connection

The handshake mainly uses:

    SYN
    ACK

---

### Step 6: Step 1 – SYN (Client → Server)

The client initiates the connection.

The client sends a packet with the **SYN flag set**.

Example packet:

    SYN = 1
    Sequence Number = X

Meaning:

    "I want to start a connection."

Example flow:

    Client → SYN(seq=100) → Server

The sequence number is a random value used to track packet order.

---

### Step 7: Step 2 – SYN-ACK (Server → Client)

The server receives the SYN request and responds with:

    SYN + ACK

Packet contents:

    SYN = 1
    ACK = 1
    Sequence Number = Y
    Acknowledgment Number = X + 1

Meaning:

    "I received your request and I agree to establish a connection."

Example flow:

    Server → SYN-ACK(seq=300, ack=101) → Client

---

### Step 8: Step 3 – ACK (Client → Server)

The client acknowledges the server's response.

Packet contents:

    ACK = 1
    Sequence Number = X + 1
    Acknowledgment Number = Y + 1

Meaning:

    "Connection confirmed."

Example:

    Client → ACK(seq=101, ack=301) → Server

After this step, the connection is established.

---

### Step 9: Final Connection State

After the handshake:

Both sides enter the state:

    ESTABLISHED

Now data transmission can begin.

Example:

    HTTP request
    File transfer
    Database communication

---

### Step 10: Visual Representation

Connection flow:

    Client                         Server
      |                               |
      | -------- SYN(seq=X) --------> |
      |                               |
      | <----- SYN-ACK(seq=Y) ------- |
      |           ack=X+1             |
      |                               |
      | -------- ACK(ack=Y+1) ------> |
      |                               |
      |      Connection Established   |

---

### Step 11: Real Example with Browser

User opens:

    https://google.com

Process:

1 Browser resolves DNS

    google.com → IP address

2 TCP handshake begins

    SYN → Google server
    SYN-ACK ← Google server
    ACK → Google server

3 TLS handshake begins (HTTPS)

4 HTTP request is sent.

---

### Step 12: Sequence Numbers Explained

Sequence numbers ensure data ordering.

Example:

Client starts with:

    seq = 100

Server responds with:

    ack = 101

Meaning:

    "I received sequence number 100."

This helps track lost packets and ensure reliable delivery.

---

### Step 13: TCP Connection States

During the handshake, TCP moves through several states.

Client:

    CLOSED
    SYN-SENT
    ESTABLISHED

Server:

    LISTEN
    SYN-RECEIVED
    ESTABLISHED

---

### Step 14: What Happens if SYN is Lost

If the SYN packet is lost:

The client waits and retransmits the SYN.

Example:

    SYN (lost)
    SYN (retry)

TCP ensures reliable connection establishment.

---

### Step 15: Half-Open Connections

Sometimes a handshake does not complete.

Example:

    SYN sent
    SYN-ACK received
    ACK never sent

The server keeps a **half-open connection** temporarily.

Too many such connections can cause attacks.

---

### Step 16: SYN Flood Attack

A SYN flood attack exploits the handshake process.

Attack steps:

1 Attacker sends many SYN packets
2 Server responds with SYN-ACK
3 Attacker never completes ACK

Server resources become exhausted.

Defense mechanisms include:

    SYN cookies
    connection rate limiting

---

### Step 17: TCP Handshake with HTTPS

For HTTPS websites:

Two handshakes occur.

First:

    TCP handshake

Then:

    TLS handshake

Sequence:

    TCP SYN
    TCP SYN-ACK
    TCP ACK

Then TLS begins.

---

### Step 18: Why 3 Steps Are Needed

Why not 2?

Because both sides must confirm readiness.

Two steps cannot guarantee bidirectional communication.

Three steps ensure:

- both sides can send
- both sides can receive

---

### Step 19: Connection Termination (Brief Mention)

When communication ends, TCP uses a **4-way handshake** to close the connection.

Sequence:

    FIN
    ACK
    FIN
    ACK

This ensures clean termination.

---

### Step 20: Performance Considerations

The handshake introduces latency.

Example:

If network latency is:

    50ms

Handshake cost:

    ~1 round trip time

Modern optimizations include:

    TCP Fast Open
    HTTP/2 connection reuse
    HTTP Keep-Alive

---

### Summary

The TCP 3-Way Handshake establishes a reliable connection before data transfer.

Steps:

    1 Client sends SYN
    2 Server responds with SYN-ACK
    3 Client sends ACK

After these steps, the connection enters the:

    ESTABLISHED state

This process ensures:

- reliable communication
- synchronized sequence numbers
- verified connectivity

TCP handshake is a foundational part of internet communication used by protocols such as:

    HTTP
    HTTPS
    FTP
    SMTP
