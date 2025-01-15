import { useCookies } from 'react-cookie';
import { Controller, useForm } from 'react-hook-form';
import { loginSchema } from '../../utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { COOKIE_NAME } from '../../utils/contansts';
import { v4 as uuidv4 } from 'uuid';

interface LoginValues {
  user: string;
  password: string;
}
const uuid = uuidv4();

const Login = () => {
  const form = useForm<LoginValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      user: '',
      password: '',
    },
  });

  const [_, setCookie] = useCookies([COOKIE_NAME]);

  const onSubmit = (data: LoginValues) => {
    setCookie(COOKIE_NAME, uuid);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-red">
      <h1 style={{ color: 'white' }}>Login</h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center justify-left w-full"
      >
        <Controller
          name="user"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <>
              <input {...field} type="text" placeholder="Username" />
              <h1 className="text-red-500">{error?.message}</h1>
            </>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <>
              <input {...field} type="password" placeholder="Password" />
              <h1 className="text-red-500">{error?.message}</h1>
            </>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
