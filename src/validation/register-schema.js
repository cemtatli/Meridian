import Yup from './validate';

export const RegisterSchema = Yup.object().shape({
  username: Yup.mixed()
    .required()
    .test({
      message: 'Geçerli bir kullanıcı adı girin',
      test: str => /^[a-z0-9\.\_]+$/i.test(str), // Kullanici adi icin dogrulama
    }),
  full_name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
