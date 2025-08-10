import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./sidebar/app-sidebar";
import { Textarea } from "./components/ui/textarea";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="w-full">
        <section className="p-4 flex flex-col gap-6 items-center justify-center h-full">
          <h3 className="text-2xl text-zinc-300">Plexdeeper</h3>
          <Textarea
            placeholder="Ask anything or @mention a Space "
            className="w-full max-w-2xl h-24 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-zinc-600 shadow-none focus-ring-0 !bg-perplexity-text-color text-zinc-400 placeholder:text-zinc-500 rounded-xl !text-sm border-[1px]"
          />
        </section>
      </main>
    </SidebarProvider>
  );
}

export default App;
