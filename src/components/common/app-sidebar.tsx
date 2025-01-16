import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Home, Image, LogOut } from 'lucide-react';
import { useCookies } from 'react-cookie';
import { COOKIE_AUTH } from '../../utils/contansts';
import { Button } from '../ui/button';
import AlertDialogComponent from '../custom/alert-dialog-component';

export const MENU = [
  {
    title: 'Images',
    url: '/',
    icon: Home,
  },
  {
    title: 'My images',
    url: '/my-images',
    icon: Image,
  },
];

const AppSidebar = () => {
  const [_, setDelete] = useCookies([COOKIE_AUTH]);

  const onLogOut = () => {
    setDelete(COOKIE_AUTH, '');
  };

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarMenu>
          {MENU.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <AlertDialogComponent
          title="¿Cerrar cessión?"
          description={`¿Estás seguro de que deseas cerrar sesión?`}
          onConfirm={onLogOut}
          trigger={
            <Button>
              <LogOut />
            </Button>
          }
        />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
