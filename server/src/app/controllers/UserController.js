import User from '../models/User';

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
}

export default new UserController();
