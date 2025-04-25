/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    env: {
      AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
      AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME,
      AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    },
  }