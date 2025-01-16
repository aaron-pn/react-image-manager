import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { COOKIE_NAME } from '../../utils/contansts';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';

interface LoginValues {
  user: string;
  password: string;
}
const uuid = uuidv4();

const Login = () => {
  const form = useForm<LoginValues>({
    mode: 'onChange',
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-center"
        >
          <FormField
            control={form.control}
            name="user"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="User" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
