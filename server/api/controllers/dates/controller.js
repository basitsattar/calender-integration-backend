import UnavailablesDatesService from '../../services/dates.service';

export class Controller {
  all(req, res) {
    UnavailablesDatesService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    UnavailablesDatesService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    UnavailablesDatesService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r));
  }
}
export default new Controller();
