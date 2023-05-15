import Yup from './validate';

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .required('Kullanıcı adı alanı zorunludur.')
    .test({
      message: 'Geçerli bir kullanıcı adı girin',
      // eslint-disable-next-line no-useless-escape
      test: str => /^[a-z0-9\.\_]+$/i.test(str), // *** Username Validate Processes ***
    })
    .min(3),
  full_name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().min(6).required(),
});
