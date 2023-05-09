import Yup from './validate';

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .required('Kullanıcı adı alanı zorunludur.')
    .test({
      message: 'Geçerli bir kullanıcı adı girin',
      test: str => /^[a-z0-9\.\_]+$/i.test(str), // Kullanici adi icin dogrulama
    })
    .min(3, 'Kullanıcı adı en az 3 karakter içermelidir.'),
  full_name: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
