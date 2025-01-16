import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from './app-sidebar';
import { Toaster } from '../ui/toaster.tsx';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-2 md:p-8 overflow-x-hidden ">
        <SidebarTrigger />
        {children}
        <Toaster />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
