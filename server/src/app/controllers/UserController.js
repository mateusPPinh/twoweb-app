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
    const { name, email } = req.body;

    const user = await User.findByPk(req.params.id);

    const userAlreadyExists = await User.findOne({
      where: { email },
    });

    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ error: 'That mail already exist, try another.' });
    }

    const { id, cpf, number } = await user.update(req.body);

    return res.json({ name, email, id, cpf, number });
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

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);

    await user.destroy();

    return res.json(user);
  }
}

export default new UserController();
