const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const configJWT = require('../../middleware/configJWT');



router.post('/sign-in', async (req, res) => {
  let user;
  try {
    const { name, password } = req.body;

    user = await User.findOne({ where: { name } });
    if (!user) {
      res.json({ message: 'Такого пользователя нет, зарегистрируйся сначала пожалуйста' });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: 'Пароль неверный, пожалуйста попробуй еще раз' });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, password: user.password },
    });

    // устанавливаем куки
    res.cookie('access', accessToken);
    res.cookie('refresh', refreshToken);
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/sign-up', async (req, res) => {
  let user;
  try {
    const { name, email, password, status } = req.body;

    if (!name.trim() && !password.trim() && !email.trim()) {
      res.json({ message: 'Заполните пожалуйста все поля!' });
      return;
    }

    user = await User.findOne({ where: { name } });
    if (user) {
      user = res.app.locals.user;
      res.json({ message: 'Такой пользователь уже есть!' });

      return;
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hash, status });

    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, name: user.name, password: user.password, email: user.email },
    });

    // устанавливаем куки
    res.cookie('access', accessToken);
    res.cookie('refresh', refreshToken);

    res.json({ message: 'success', user });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('access').clearCookie('refresh');
  res.redirect('/');
});

module.exports = router;