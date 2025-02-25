// For environments

import { config } from 'dotenv';

// Extract all the environment variables (`This is a template string`)
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// Switch between production and development env's without overriding one another
export const { PORT, NODE_ENV } = process.env;
