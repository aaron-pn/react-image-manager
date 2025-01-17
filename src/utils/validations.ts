import { object, string } from 'yup';

export const loginSchema = object().shape({
  user: string()
    .max(20, 'Este campo debe contener un máximo de 20 caracteres')
    .min(3, 'Este campo debe contener al menos 3 caracteres')
    .matches(
      /^[a-z]+$/,
      'El usuario solo debe contener letras minúsculas, sin números ni caracteres especiales'
    )
    .required("El campo 'usuario' es obligatorio"),
  password: string()
    .max(20, 'Este campo debe contener un máximo de 20 caracteres')
    .min(6, 'Este campo debe contener al menos 6 caracteres')
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
