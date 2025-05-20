import { ThemeToggle } from './theme-toggle';

export function Imprint() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Imprint</h1>
        
        <div className="space-y-8">
          <section>
            <p className="text-muted-foreground">
              Linus Peczkowski<br />
              Ruedererstraße 3<br />
              85055 Ingolstadt<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              Email: linus@kwantux.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">EU Dispute Resolution</h2>
            <p className="text-muted-foreground">
              The European Commission provides a platform for online dispute resolution:
              <br />
              <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 