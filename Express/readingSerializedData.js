import express from "express";

// Create an Express app instance
const app = express();

// NOTE:
// 1. The request body (raw data stream) is part of the req object.
// 2. Logging req directly will not show the body because the stream hasn’t been read yet.
// 3. To see the raw body, you must explicitly read the stream or use middleware. Without reading it, the data remains in the stream, which is an internal part of the req object.

/**
 * Approach 1: Using Custom Middleware to Log Raw Body
 * - This approach manually reads the raw input stream (`req`) and logs the raw JSON string.
 * - Note: Streams in Node.js can only be consumed once. If you read the stream here, you cannot use middleware like `express.json()` afterward unless you buffer or clone the data.
 */

// Uncomment this block to use Approach 1
// app.use((req, res, next) => {
//   let rawBody = ''; // Initialize an empty string to store the raw data

//   // Event listener for receiving data chunks from the stream
//   req.on('data', (chunk) => {
//     rawBody += chunk; // Append each chunk to `rawBody`
//     console.log(typeof rawBody); // Log the type of rawBody (string)
//   });

//   // Event listener for when the stream ends
//   req.on('end', () => {
//     console.log('Raw Body:', rawBody); // Log the raw JSON string
//     next(); // Pass control to the next middleware
//   });
// });

// app.post('/data', (req, res) => {
//   console.log('Parsed Body:', req.body); // Logs the parsed body (if express.json() is used)
//   res.send('Data received');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));

/**
 * Approach 2: Using `express.raw()` Middleware
 * - This approach uses `express.raw()` to handle the request body as raw data directly.
 * - It avoids manually handling streams and makes the raw data available as `req.body`.
 * - Note: This approach is simpler for scenarios where raw data inspection is needed.
 */

// Middleware to handle raw JSON data
app.use(express.raw({ type: 'application/json' })); // Parse raw data for JSON content type

app.post('/data', (req, res) => {
  console.log('Raw Body:', req.body.toString()); // Convert the raw buffer to a string and log it
  res.send('Raw data logged'); // Send a response to the client
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));

/**
 * Key Differences Between the Two Approaches:
 * 1. **Custom Middleware**:
 *    - Manually handles the raw input stream.
 *    - Allows for more flexibility, but you must manage the stream carefully to avoid conflicts with other middleware.
 * 
 * 2. **express.raw()**:
 *    - Simplifies handling raw data by automatically buffering the stream into `req.body`.
 *    - Recommended when raw data needs to be logged or processed without parsing into JSON.
 */
