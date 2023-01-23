import Link from 'next/link';

import { Button } from '@/component';

export default function Home() {
  return (
    <main>
      <p className="text-blue-500">main page</p>
      <Link href="/hello">Go to Hello</Link>
      <Button>button</Button>
    </main>
  );
}
