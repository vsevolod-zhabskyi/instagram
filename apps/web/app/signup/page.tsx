'use client';

import { authClient } from '@/lib/auth/client';
import { SignupFormData } from '@/lib/auth/schema';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import SignupForm from '@/components/auth/signup-form';
import { UseFormSetError } from 'react-hook-form';

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = async (
    data: SignupFormData,
    setError: UseFormSetError<SignupFormData>,
  ) => {
    const { error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (error) {
      setError('email', { message: 'Email is already in use' });
      return;
    }

    await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    router.push('/');
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-foreground mt-6 text-3xl font-extrabold">
            Create your account
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>
        <SignupForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
