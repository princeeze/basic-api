# HNG Stage Zero Task - Backend API

This is a simple public API that returns basic information in JSON format.

## Project Description

The API provides the following information:

- Your registered email address
- The current datetime in ISO 8601 format
- The GitHub URL of the project's codebase

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/princeeze/basic-api.git
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the project locally:
   ```bash
   pnpm dev dev
   ```

## API Documentation

### Endpoint: GET /

**Response Format:**

```json
{
  "email": "string",
  "current_datetime": "string",
  "github_url": "string"
}
```

## Deployment

The API is deployed on Render.

### Learn More

[Get Developers](https://hng.tech/hire/nodejs-developers)
