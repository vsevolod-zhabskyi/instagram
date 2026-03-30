import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormData, loginSchema } from '@/lib/auth/schema';
import { Controller, useForm, UseFormSetError } from 'react-hook-form';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface LoginFormProps {
  onSubmit: (
    data: LoginFormData,
    setError: UseFormSetError<LoginFormData>,
  ) => Promise<void>;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { isSubmitting, errors } = form.formState;

  const handleSubmit = async (data: LoginFormData) => {
    try {
      await onSubmit(data, form.setError);
    } catch (e) {
      console.error('Login error:', e);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to log in to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      if (form.formState.errors.root) {
                        form.clearErrors('root');
                      }
                      field.onChange(e);
                    }}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      if (form.formState.errors.root) {
                        form.clearErrors('root');
                      }
                      field.onChange(e);
                    }}
                    id="password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    disabled={isSubmitting}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {errors.root && (
              <FieldError errors={[errors.root]} className="text-center" />
            )}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
