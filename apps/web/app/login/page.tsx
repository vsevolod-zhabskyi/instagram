'use client';

import LoginForm from '@/components/auth/login-form';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-foreground mt-6 text-3xl font-extrabold">
            Sign in to your account
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Create an account
            </Link>
          </p>
        </div>
        <LoginForm onSubmit={async (data) => console.log(data)} />
      </div>
    </div>
  );
}
