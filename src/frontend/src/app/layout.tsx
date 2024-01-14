import { helloWorld } from '@repo/def/rules/sample';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>My App</title>
      </head>
      <body>
        <h1>{helloWorld}</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
