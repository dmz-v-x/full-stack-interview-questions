### Question
What happens when you type a URL in a browser’s address bar and press Enter? 

### Answer

When you type a URL in the browser and press **Enter**, a large number of processes happen behind the scenes before the webpage appears on your screen.

This entire process involves many layers of the web stack, including:

    Browser
    DNS
    TCP/IP
    TLS (for HTTPS)
    HTTP
    Servers
    Browser rendering engine

Understanding this process requires going step by step from the beginning.

---

### Step 1: Understanding What a URL Is

A URL (Uniform Resource Locator) is the address of a resource on the internet.

Example:

    https://www.example.com/path/page.html

A URL has several parts.

Protocol:

    https

Domain:

    www.example.com

Path:

    /path/page.html

The browser must use this information to locate and retrieve the resource.

---

### Step 2: Browser Parses the URL

When the user presses Enter, the browser first parses the URL.

It determines:

    Protocol → HTTP or HTTPS
    Domain → example.com
    Port → default 80 or 443
    Path → resource location

Example:

    https://example.com/products

Parsed as:

    protocol: https
    domain: example.com
    port: 443
    path: /products

---

### Step 3: Browser Checks Cache

Before doing any network request, the browser checks several caches.

Possible caches:

    Browser memory cache
    Browser disk cache
    Service worker cache
    HTTP cache

If the resource is already cached and still valid, the browser may load it directly.

Example:

    cached HTML
    cached CSS
    cached images

If cache is valid, the request may stop here.

---

### Step 4: DNS Resolution

If the resource is not cached, the browser needs to find the server's IP address.

The browser only knows:

    example.com

But network communication requires an **IP address**.

Example:

    93.184.216.34

DNS (Domain Name System) converts domain names into IP addresses.

---

### Step 5: DNS Lookup Order

The browser looks for DNS information in several places.

Order typically is:

1 Browser DNS cache
2 Operating system DNS cache
3 Router DNS cache
4 ISP DNS resolver
5 Root DNS servers
6 TLD servers (.com)
7 Authoritative DNS server

Example result:

    example.com → 93.184.216.34

---

### Step 6: Establish TCP Connection

Once the IP address is known, the browser connects to the server.

For HTTP communication, TCP is used.

The TCP connection begins with the **three-way handshake**.

Process:

Client → SYN  
Server → SYN-ACK  
Client → ACK

This establishes a reliable connection.

---

### Step 7: TLS Handshake (HTTPS Only)

If the URL uses HTTPS, an additional **TLS handshake** occurs.

Purpose:

    Encrypt communication

TLS handshake steps simplified:

Client Hello

    Supported encryption algorithms

Server Hello

    Selected encryption method

Certificate exchange

    Server proves its identity

Key exchange

    Secure encryption keys generated

After this handshake, a secure encrypted connection is established.

---

### Step 8: Browser Sends HTTP Request

Once the connection is ready, the browser sends an HTTP request.

Example request:

    GET /products HTTP/1.1
    Host: example.com
    User-Agent: Chrome
    Accept: text/html
    Connection: keep-alive

This request asks the server for the resource.

---

### Step 9: Request Reaches the Server

The request reaches the web server.

Examples of web servers:

    Nginx
    Apache
    Node.js server
    Cloud servers

The server processes the request.

Steps may include:

    Load balancing
    Authentication
    Routing
    Database queries
    Application logic

Example backend processing:

    GET /products
    → fetch products from database

---

### Step 10: Server Generates HTTP Response

The server sends back a response.

Example response:

    HTTP/1.1 200 OK
    Content-Type: text/html
    Content-Length: 1024

    <html>...</html>

The response contains:

Status code

    200 OK

Headers

    metadata

Body

    actual content

---

### Step 11: Browser Receives Response

The browser receives the response data.

It processes the headers first.

Examples:

    Content-Type
    Cache-Control
    Cookies
    Security headers

If the response contains HTML, the browser begins rendering.

---

### Step 12: HTML Parsing Begins

The browser parses the HTML and constructs the **DOM (Document Object Model)**.

Example HTML:

    <html>
        <body>
            <h1>Hello</h1>
        </body>
    </html>

Converted into DOM tree:

    html
      └ body
          └ h1

---

### Step 13: Discovering Additional Resources

While parsing HTML, the browser finds additional resources.

Example:

    <link rel="stylesheet" href="style.css">
    <script src="app.js"></script>
    <img src="image.png">

For each resource the browser sends additional HTTP requests.

---

### Step 14: CSS Parsing

The browser downloads CSS files and builds the **CSSOM (CSS Object Model)**.

Example CSS:

    h1 {
        color: red;
    }

CSSOM stores styling rules.

---

### Step 15: JavaScript Execution

JavaScript files are downloaded and executed.

Example:

    console.log("Hello world")

JavaScript may:

    modify DOM
    fetch data
    create dynamic content

Scripts can block rendering depending on attributes.

---

### Step 16: Building Render Tree

The browser combines:

    DOM
    CSSOM

to create the **Render Tree**.

Render tree contains only visible elements.

Example:

    DOM node + CSS styles → Render node

---

### Step 17: Layout (Reflow)

Next the browser calculates element positions.

This process is called:

    Layout
    Reflow

It determines:

    element width
    height
    position

Example:

    h1 width
    margins
    page structure

---

### Step 18: Painting

After layout, the browser paints pixels to the screen.

Painting includes:

    text
    colors
    borders
    shadows
    images

---

### Step 19: Compositing

Modern browsers split pages into layers.

Example layers:

    text
    images
    animations

These layers are combined using GPU acceleration.

This step improves rendering performance.

---

### Step 20: Page Becomes Interactive

Once JavaScript finishes loading and execution, the page becomes interactive.

The browser listens for user events such as:

    clicks
    scroll
    keyboard input
    touch gestures

---

### Step 21: Additional Background Tasks

Even after the page loads, several background tasks continue.

Examples:

    API calls
    WebSocket connections
    analytics scripts
    lazy loading images
    prefetching resources

---

### Step 22: Browser Optimization Techniques

Modern browsers apply several optimizations.

Examples:

Connection reuse

    Keep-Alive

HTTP/2 multiplexing

    multiple requests over single connection

Resource prioritization

    critical resources load first

Caching strategies

    reduce repeated requests

---

### Step 23: Full Simplified Flow

The entire process simplified:

User types URL  
→ Browser parses URL  
→ Browser checks cache  
→ DNS resolves domain  
→ TCP connection established  
→ TLS handshake (HTTPS)  
→ HTTP request sent  
→ Server processes request  
→ Server sends response  
→ Browser parses HTML  
→ Browser downloads CSS/JS  
→ DOM + CSSOM → Render tree  
→ Layout calculation  
→ Painting  
→ Page displayed

---

### Summary

When you type a URL and press Enter, the browser performs a complex series of operations involving networking, servers, protocols, and rendering engines.

Major stages include:

    URL parsing
    DNS resolution
    TCP connection
    TLS handshake
    HTTP request/response
    HTML parsing
    CSS processing
    JavaScript execution
    Rendering pipeline

All of these steps happen extremely quickly, often within milliseconds, enabling the modern web experience.
