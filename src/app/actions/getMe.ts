'use server';

import { auth } from '@clerk/nextjs/server';

export async function getMe() {
  const { getToken } = await auth();
  const token = await getToken();

  const res = await fetch('http://localhost:3001/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
