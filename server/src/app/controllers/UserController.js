import User from '../models/User';
import Mail from '../../lib/Mail';

class UserController {
  async store(req, res) {
    const userAlreadyExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ error: 'That mail already exist, try another.' });
    }

    const {
      id,
      name,
      email,
      cpf,
      phone,
      cep,
      city,
      state,
      neighborhood,
      street,
      number,
      complement,
    } = await User.create(req.body);

    await Mail.sendMail({
      to: 'maria@maria.com',
      subject: 'Novo usuário adicionado',
      template: 'registration',
      context: {
        user: name,
      },
    });

    return res.json({
      id,
      name,
      email,
      cpf,
      phone,
      cep,
      city,
      state,
      neighborhood,
      street,
      number,
      complement,
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const allUsers = await User.findAll({
      attributes: [
        'id',
        'name',
        'email',
        'cpf',
        'phone',
        'cep',
        'city',
        'state',
        'neighborhood',
        'street',
        'number',
        'complement',
      ],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(allUsers);
  }
}

export default new UserController();
