import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Home, Image, LogOut, MenuIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@radix-ui/react-separator';
import AlertDialogComponent from '../custom/alert-dialog-component';
import { COOKIE_AUTH } from '@/utils/contansts';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import { RootState } from '@/store';
import { useState } from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [_, setDelete] = useCookies([COOKIE_AUTH]);
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.auth.user);
  const menuItems = [
    { title: 'Inicio', icon: Home, url: '/' },
    { title: 'Mis Imágenes', icon: Image, url: '/my-images' },
  ];

  const handleLogOut = () => {
    setDelete(COOKIE_AUTH, '');
    dispatch(logout());
  };

  const handleNavigation = (url: string) => {
    navigate(url);
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="m-4"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64   p-4 flex flex-col gap-6">
        <h1 className="text-lg font-bold">Menú</h1>
        <h1 className="text-lg font-bold capitalize">{name}</h1>
        <Separator className="bg-gray-300 h-[1px] my-2" />
        <div>
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <button
                key={item.title}
                className="flex items-center gap-2 text-sm p-2 rounded"
                onClick={() => handleNavigation(item.url)}
              >
                <item.icon className="w-5 h-5" />
                {item.title}
              </button>
            ))}
          </nav>
        </div>

        <AlertDialogComponent
          title="¿Cerrar cessión?"
          description={`¿Estás seguro de que deseas cerrar sesión?`}
          onConfirm={handleLogOut}
          trigger={
            <Button className="mt-auto flex items-center gap-2 justify-center">
              <LogOut className="w-5 h-5" />
              Cerrar Sesión
            </Button>
          }
        />
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
