export function KrftgAME() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Was für ein Lied könnte das sein?</h1>
      <audio controls src="/krftg251.mp3">
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}
