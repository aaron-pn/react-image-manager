import { object, string } from 'yup';

export const loginSchema = object().shape({
  user: string()
    .matches(
      /^[a-z]+$/,
      'El usuario solo debe contener letras minúsculas, sin números ni caracteres especiales'
    )
    .required("El campo 'usuario' es obligatorio"),
  password: string()
    .required("El campo 'contraseña' es obligatorio")
    .test(
      'password-match',
      "La contraseña debe seguir el formato '123<Usuario>'",
      function (value) {
        const { user } = this.parent;
        return value === `123${user.charAt(0).toUpperCase()}${user.slice(1)}`;
      }
    ),
});
