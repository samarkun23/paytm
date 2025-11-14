import dotenv from 'dotenv'

dotenv.config();

export const mongoDb_url = process.env.MONGODB_URL
export const port = process.env.PORT
export const jwt_secret = process.env.JWT_SECRET