import express from 'express';
import diagnoseRouter from './routes/diagnoses';
import patientRoute from './routes/patients';
import cors from 'cors';

const app = express();
app.use(express.json());

const PORT = 3001;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', patientRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
