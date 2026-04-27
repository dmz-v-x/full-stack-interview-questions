### Question
What is DNS? How does it work? 

### Answer

DNS is one of the most fundamental systems that makes the internet usable. Without DNS, every time you wanted to open a website you would need to remember the **IP address** of that server instead of a human-readable name.

Example:

Instead of typing

    https://google.com

you would need to type something like

    https://142.250.190.78

DNS solves this problem by translating **domain names into IP addresses**.

To understand DNS properly we need to understand several concepts step by step.

---

### What DNS Stands For

DNS stands for:

    Domain Name System

It is a **distributed naming system** used on the internet that translates:

    domain name → IP address

Example:

    google.com → 142.250.190.78
    amazon.com → 54.239.28.85
    facebook.com → 157.240.22.35

This translation process is called:

    DNS resolution

---

### Why DNS Exists

Computers communicate using **IP addresses**.

Example IP address:

    142.250.190.78

But humans prefer readable names:

    google.com

DNS acts like the **phonebook of the internet**.

Example analogy:

Person name → phone number

DNS equivalent:

    domain name → IP address

---

### What is a Domain Name

A domain name is the human-readable address of a website.

Example:

    example.com
    google.com
    openai.com

Domain names are structured hierarchically.

Example:

    www.google.com

Parts:

    www → subdomain
    google → domain
    .com → top-level domain (TLD)

---

### Types of DNS Servers

DNS works through multiple layers of servers.

Major DNS servers include:

    DNS Resolver
    Root DNS Server
    TLD DNS Server
    Authoritative DNS Server

Each server has a different responsibility.

---

### DNS Resolver (Recursive Resolver)

The DNS resolver is the **first server contacted** when a DNS lookup begins.

Usually provided by:

    ISP
    Google DNS (8.8.8.8)
    Cloudflare DNS (1.1.1.1)

The resolver's job is to find the correct IP address for a domain.

---

### Root DNS Servers

Root DNS servers are the **top level of the DNS hierarchy**.

There are **13 root server clusters** worldwide.

They know where to find the servers responsible for each **TLD**.

Example query:

    google.com

Root server responds:

    Ask the ".com" TLD server

---

### TLD DNS Servers

TLD stands for:

    Top Level Domain

Examples:

    .com
    .org
    .net
    .edu
    .gov

The TLD server knows which **authoritative server** holds information for a domain.

Example response:

    google.com is handled by ns1.google.com

---

### Authoritative DNS Server

This is the server that contains the **actual DNS records** for a domain.

Example records stored here:

    A record
    AAAA record
    CNAME
    MX
    TXT

Example result:

    google.com → 142.250.190.78

---

### Step-by-Step DNS Lookup Process

Suppose the user types:

    https://example.com

The DNS lookup process happens as follows.

Step 1: Browser Cache

The browser first checks its local DNS cache.

If the address was previously resolved, it may already be stored.

---

### Step 2: Operating System Cache

If not found in browser cache, the system checks the OS DNS cache.

Example command:

    ipconfig /displaydns

If cached, the lookup stops here.

---

### Step 3: DNS Resolver Query

If not cached locally, the request goes to a DNS resolver.

Example resolver:

    8.8.8.8 (Google DNS)

---

### Step 4: Resolver Contacts Root Server

The resolver asks the root DNS server:

    Where can I find example.com?

The root server responds:

    Ask the .com TLD server.

---

### Step 5: Resolver Contacts TLD Server

The resolver then asks the `.com` server.

Question:

    Where is example.com located?

Response:

    Ask ns1.example.com

---

### Step 6: Resolver Contacts Authoritative Server

The resolver asks the authoritative DNS server.

Question:

    What is the IP address of example.com?

Response:

    example.com → 93.184.216.34

---

### Step 7: Resolver Returns IP Address

The resolver sends the IP address back to the browser.

Example:

    example.com → 93.184.216.34

Now the browser can connect to the web server.

---

### DNS Caching

To improve performance, DNS responses are cached.

Caching occurs in multiple places:

    Browser cache
    Operating system cache
    Router cache
    ISP DNS cache

Each DNS record includes a value called:

    TTL (Time To Live)

Example:

    TTL = 300 seconds

Meaning the record remains cached for 5 minutes.

---

### DNS Record Types

DNS stores different types of records.

Important ones include:

---

### A Record

Maps a domain name to an IPv4 address.

Example:

    example.com → 93.184.216.34

---

### AAAA Record

Maps a domain to an IPv6 address.

Example:

    example.com → 2606:2800:220:1:248:1893:25c8:1946

---

### CNAME Record

Alias for another domain.

Example:

    www.example.com → example.com

---

### MX Record

Used for email routing.

Example:

    gmail.com → mail servers

---

### TXT Record

Stores text information.

Commonly used for:

    domain verification
    SPF records
    DKIM authentication

---

### DNS Example Query

Example command:

    nslookup google.com

Response:

    Name: google.com
    Address: 142.250.190.78

---

### DNS with CDN

Modern websites often use CDNs.

Example:

    netflix.com

DNS may return different IP addresses depending on location.

User in India → nearby server  
User in USA → nearby server

This improves performance.

---

### Reverse DNS Lookup

Normally DNS works like this:

    domain → IP

Reverse DNS works like this:

    IP → domain

Example:

    8.8.8.8 → dns.google

---

### DNS Security Issues

DNS originally had no security.

Attack types include:

    DNS spoofing
    DNS cache poisoning
    DNS hijacking

Example attack:

Attacker modifies DNS response.

    bank.com → malicious server

---

### DNSSEC

DNSSEC stands for:

    Domain Name System Security Extensions

It adds **cryptographic signatures** to DNS records to verify authenticity.

This prevents tampering with DNS responses.

---

### DNS over HTTPS (DoH)

Modern DNS queries can be encrypted.

Example:

    DNS over HTTPS
    DNS over TLS

Benefits:

    privacy
    security
    protection against spying

---

### Real Example: Opening google.com

Steps simplified:

User types:

    google.com

Process:

    Browser cache check
    OS cache check
    DNS resolver query
    Root server lookup
    TLD server lookup
    Authoritative server lookup
    IP returned

Example result:

    google.com → 142.250.190.78

Browser then connects to this IP address.

---

### Visual Flow

Simplified DNS flow:

    Browser
        ↓
    DNS Resolver
        ↓
    Root DNS Server
        ↓
    TLD Server (.com)
        ↓
    Authoritative DNS Server
        ↓
    IP Address returned

---

### Summary

DNS is the system that translates human-readable domain names into machine-readable IP addresses.

Key concepts include:

    Domain names
    DNS resolvers
    Root servers
    TLD servers
    Authoritative servers
    DNS records
    DNS caching

DNS enables users to access websites easily without remembering complex IP addresses and is a critical part of how the internet functions.
