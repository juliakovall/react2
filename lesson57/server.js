import http from "node:http";
import querystring from "node:querystring";

const PORT = process.env.PORT || 3000;
const MAX_BODY_SIZE = 1024 * 1024;

const createHtmlPage = (title, heading, text) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
    </head>
    <body>
      <h1>${heading}</h1>
      <p>${text}</p>
    </body>
  </html>
`;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const sendHtml = (response, statusCode, html) => {
  response.writeHead(statusCode, {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Length": Buffer.byteLength(html),
    "X-Content-Type-Options": "nosniff",
  });

  response.end(html);
};

const handleSubmit = (request, response) => {
  let body = "";
  let bodySize = 0;
  let requestTooLarge = false;

  request.on("data", (chunk) => {
    bodySize += chunk.length;

    if (bodySize > MAX_BODY_SIZE) {
      requestTooLarge = true;

      const html = createHtmlPage(
        "Payload Too Large",
        "Payload Too Large",
        "The request body is larger than 1 MB.",
      );

      sendHtml(response, 413, html);
      request.destroy();
      return;
    }

    body += chunk.toString();
  });

  request.on("end", () => {
    if (requestTooLarge) {
      return;
    }

    try {
      const formData = querystring.parse(body);

      const name =
        typeof formData.name === "string" ? formData.name.trim() : "";

      const email =
        typeof formData.email === "string" ? formData.email.trim() : "";

      if (!name || !email) {
        const html = createHtmlPage(
          "Bad Request",
          "Invalid form data",
          "Name and email are required.",
        );

        sendHtml(response, 400, html);
        return;
      }

      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);

      const html = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Form Submitted</title>
          </head>
          <body>
            <h1>Form Submitted</h1>
            <p>Name: ${safeName}</p>
            <p>Email: ${safeEmail}</p>
          </body>
        </html>
      `;

      sendHtml(response, 200, html);
    } catch (error) {
      console.error("Server error:", error);

      const html = createHtmlPage(
        "Server Error",
        "Server Error",
        "An unexpected error occurred.",
      );

      sendHtml(response, 500, html);
    }
  });

  request.on("error", (error) => {
    if (requestTooLarge) {
      return;
    }

    console.error("Request error:", error);

    if (!response.headersSent) {
      const html = createHtmlPage(
        "Server Error",
        "Server Error",
        "An unexpected error occurred.",
      );

      sendHtml(response, 500, html);
    }
  });
};

const server = http.createServer((request, response) => {
  try {
    const method = request.method;
    const url = new URL(request.url, `http://${request.headers.host}`);
    const pathname = url.pathname;

    if (method === "GET" && pathname === "/") {
      const html = createHtmlPage("Home", "Home", "Welcome to the Home Page.");

      sendHtml(response, 200, html);
      return;
    }

    if (method === "GET" && pathname === "/about") {
      const html = createHtmlPage("About", "About", "Learn more about us.");

      sendHtml(response, 200, html);
      return;
    }

    if (method === "GET" && pathname === "/contact") {
      const html = createHtmlPage("Contact", "Contact", "Get in touch.");

      sendHtml(response, 200, html);
      return;
    }

    if (method === "POST" && pathname === "/submit") {
      handleSubmit(request, response);
      return;
    }

    const html = createHtmlPage(
      "404 Not Found",
      "Page Not Found",
      "The requested page does not exist.",
    );

    sendHtml(response, 404, html);
  } catch (error) {
    console.error("Server error:", error);

    const html = createHtmlPage(
      "Server Error",
      "Server Error",
      "An unexpected error occurred.",
    );

    sendHtml(response, 500, html);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
