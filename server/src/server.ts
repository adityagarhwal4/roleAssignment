import app from './app';
import { connectDB } from './database/connectDB';

const port = process.env.PORT;

connectDB();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});