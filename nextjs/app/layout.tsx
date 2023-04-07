export const metadata = {
  title: "title",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/mvp.css@1.12/mvp.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
