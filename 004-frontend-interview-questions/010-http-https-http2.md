### Question
What is HTTP? What is HTTPS? How do they work? What is HTTP/2 and how does it work? 

### Answer

HTTP and HTTPS are **communication protocols used on the web**.  
They define how data is transferred between:

- **Client** (browser, mobile app, API consumer)
- **Server** (web server, backend service)

Whenever you open a website like:

    https://example.com

your browser communicates with a server using **HTTP or HTTPS**.

To understand this fully, we must understand:

- What a protocol is
- How web communication works
- HTTP request-response model
- HTTPS encryption using TLS
- HTTP/2 improvements and architecture

---

### What is a Protocol

A **protocol** is a set of rules that define how two systems communicate.

Example protocols:

    HTTP
    HTTPS
    FTP
    SMTP
    TCP
    UDP
    DNS

For web communication, the most important protocol is **HTTP**.

---

### What is HTTP

HTTP stands for:

    HyperText Transfer Protocol

It is a **stateless application-layer protocol** used for transferring web resources such as:

- HTML
- CSS
- JavaScript
- Images
- Videos
- JSON API responses

HTTP operates on top of the **TCP protocol**.

Typical stack:

    Application Layer → HTTP
    Transport Layer → TCP
    Internet Layer → IP
    Network Layer → Ethernet/WiFi

---

### What Does Stateless Mean

HTTP is **stateless**, meaning:

Each request is **independent** and the server does not remember previous requests.

Example:

    Request 1 → Get homepage
    Request 2 → Get user profile

The server treats them separately.

State can be maintained using:

    Cookies
    Sessions
    Tokens
    Local storage

---

### HTTP Request-Response Model

HTTP follows a **request-response architecture**.

Steps:

    Client sends request
    Server processes request
    Server sends response

Example flow:

    Browser → Request → Server
    Server → Response → Browser

---

### HTTP Request Structure

An HTTP request contains several parts.

Example request:

    GET /users HTTP/1.1
    Host: example.com
    User-Agent: Chrome
    Accept: application/json

Components:

Request line

    Method
    URL
    Protocol version

Headers

    Metadata about request

Body

    Data sent to server (POST/PUT)

---

### HTTP Methods

HTTP defines several request methods.

GET

Used to retrieve data.

Example:

    GET /users

POST

Used to create data.

Example:

    POST /users

PUT

Used to replace data.

PATCH

Used to update partial data.

DELETE

Used to remove resources.

HEAD

Retrieves headers only.

OPTIONS

Checks server-supported methods.

---

### HTTP Response Structure

Server responses include:

Status line

    HTTP/1.1 200 OK

Headers

    Content-Type
    Content-Length

Body

    Actual data

Example:

    HTTP/1.1 200 OK
    Content-Type: application/json

    {
        "name": "Himanshu"
    }

---

### HTTP Status Codes

Status codes indicate request results.

1xx

    Informational

2xx

    Success

Examples:

    200 OK
    201 Created

3xx

    Redirection

Example:

    301 Moved Permanently

4xx

Client errors

Examples:

    400 Bad Request
    401 Unauthorized
    404 Not Found

5xx

Server errors

Examples:

    500 Internal Server Error
    503 Service Unavailable

---

### Problems with HTTP

HTTP has several security limitations.

Data is transferred in **plain text**.

Example attacker scenario:

    Browser → Internet → Server

Anyone intercepting the network can read:

- Passwords
- Credit card numbers
- Personal data

This is why HTTPS was introduced.

---

### What is HTTPS

HTTPS stands for:

    HyperText Transfer Protocol Secure

It is HTTP **combined with encryption using TLS/SSL**.

Meaning:

    HTTPS = HTTP + TLS

It ensures:

    Encryption
    Authentication
    Data integrity

---

### TLS (Transport Layer Security)

TLS is a cryptographic protocol that secures communication.

Older name:

    SSL (Secure Socket Layer)

Modern systems use TLS.

---

### What HTTPS Protects

HTTPS provides three main protections.

Encryption

    Prevents eavesdropping.

Authentication

    Ensures the server is genuine.

Integrity

    Prevents data tampering.

---

### HTTPS Handshake Process

When a browser connects to HTTPS server, a **TLS handshake** occurs.

Steps simplified:

Client Hello

Browser sends supported TLS versions and cipher suites.

Server Hello

Server selects encryption algorithm.

Certificate

Server sends SSL certificate.

Key exchange

Secure key generated.

Secure communication begins.

---

### SSL Certificate

A certificate proves server identity.

Contains:

    Domain name
    Public key
    Certificate authority signature

Example authorities:

    Let's Encrypt
    DigiCert
    GlobalSign

---

### Encryption Process

HTTPS uses two types of encryption.

Asymmetric encryption

    Public key
    Private key

Used during handshake.

Symmetric encryption

    Shared session key

Used for faster data transfer.

---

### Example HTTPS Flow

Browser visits:

    https://example.com

Steps:

    DNS lookup
    TCP connection
    TLS handshake
    Secure HTTP request
    Secure HTTP response

---

### HTTPS Performance Improvements

Initially HTTPS was slower.

Modern improvements:

    TLS session reuse
    Hardware acceleration
    HTTP/2 support

Now HTTPS is recommended everywhere.

---

### What is HTTP/2

HTTP/2 is a **major revision of HTTP protocol**.

Goal:

    Improve performance
    Reduce latency
    Optimize resource loading

HTTP/2 was standardized in:

    2015

---

### Problems with HTTP/1.1

HTTP/1.1 had several limitations.

1 Multiple connections needed

Browsers open several TCP connections.

2 Head-of-line blocking

Requests must complete in order.

3 Header redundancy

Headers repeated in every request.

4 No request prioritization

---

### HTTP/2 Key Features

HTTP/2 introduced several improvements.

Multiplexing

    Multiple requests over one connection

Header compression

    Reduced header size

Server push

    Server sends resources proactively

Binary protocol

    Faster parsing

---

### Multiplexing

In HTTP/1.1:

Requests must wait.

Example:

    Request 1 → complete
    Request 2 → start

HTTP/2 allows:

    Request1
    Request2
    Request3

All simultaneously.

This improves performance significantly.

---

### Binary Protocol

HTTP/1.1 is text-based.

Example:

    GET /index.html HTTP/1.1

HTTP/2 uses binary frames.

Advantages:

    Faster parsing
    Less overhead

---

### Header Compression (HPACK)

Headers like these repeat often:

    User-Agent
    Cookies
    Accept

HTTP/2 compresses headers to reduce network usage.

---

### Server Push

Server can send resources **before the browser asks for them**.

Example:

Browser requests:

    index.html

Server automatically sends:

    style.css
    script.js

This reduces additional requests.

---

### Stream Concept

HTTP/2 introduces **streams**.

Each request/response pair runs in a stream.

Example:

    Stream 1 → HTML
    Stream 2 → CSS
    Stream 3 → JS

All run in parallel.

---

### HTTP vs HTTPS vs HTTP/2

| Feature | HTTP | HTTPS | HTTP/2 |
|------|------|------|------|
| Encryption | No | Yes | Yes (usually) |
| Protocol type | Text | Text + TLS | Binary |
| Multiplexing | No | No | Yes |
| Header compression | No | No | Yes |
| Server push | No | No | Yes |

---

### Real World Example

Loading a website requires multiple resources.

Example:

    index.html
    styles.css
    app.js
    images

HTTP/1.1

    Multiple connections required.

HTTP/2

    One connection multiplexes everything.

---

### HTTP in APIs

Most APIs use HTTP methods.

Example request:

    GET /api/users

Response:

    {
        "users": []
    }

---

### HTTPS Everywhere

Modern browsers require HTTPS for:

    Service workers
    Geolocation API
    Payment APIs
    HTTP/2 support

Search engines also rank HTTPS sites higher.

---

### Summary

HTTP is the protocol used for web communication.

    Client sends request
    Server sends response

HTTPS adds security using TLS.

    Encryption
    Authentication
    Integrity

HTTP/2 improves performance using:

    Multiplexing
    Header compression
    Binary protocol
    Server push

Together these technologies power the modern web.
