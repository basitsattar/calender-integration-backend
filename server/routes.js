import unavailablesDatesRouter from './api/controllers/dates/router';

export default function routes(app) {
  app.use('/api/v1/unavailableDates', unavailablesDatesRouter);
}
