import { expressjwt, GetVerificationKey } from "express-jwt";
import jwksRsa from "jwks-rsa";

// Define the function that will get the secret for JWT verification
export const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.ISSUER_BASE_URL}/.well-known/jwks.json`,
  }) as unknown as GetVerificationKey, // Ensure correct typing here
  audience: process.env.AUTH0_API_IDENTIFIER,
  issuer: `https://${process.env.ISSUER_BASE_URL}/`,
  algorithms: ["RS256"],
});
