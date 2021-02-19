import app from './app';
import { BACKEND_PORT } from '../../settings';

const port = BACKEND_PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});