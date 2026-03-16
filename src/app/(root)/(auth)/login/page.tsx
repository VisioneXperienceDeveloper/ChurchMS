import { LoginForm } from "@client/features/auth/ui/LoginForm"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md space-y-8">
        <LoginForm />
      </div>
    </div>
  )
}
