import { useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../utils/validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { COOKIE_AUTH } from '../../utils/contansts';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDispatch } from 'react-redux';
import { login as loginDispatch } from '@/store/slices/authSlice';
import { PasswordInput } from '@/components/ui/input-password';
import { useToast } from '@/hooks/use-toast';

interface LoginValues {
  user: string;
  password: string;
}

const uuid = uuidv4();

const LoginPage = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      user: '',
      password: '',
    },
  });

  const [_, setCookie] = useCookies([COOKIE_AUTH]);

  const onSubmit = (data: LoginValues) => {
    const { user } = data;
    dispatch(loginDispatch({ name: user }));
    setCookie(COOKIE_AUTH, uuid);
    toast({
      title: 'Sesión iniciada',
      description: 'Has iniciado sesión con éxito.',
      variant: 'success',
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Iniciar Sesión
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="user"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl>
                      <Input placeholder="Usuario" {...field} />
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
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Contraseña" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Confirmar
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
