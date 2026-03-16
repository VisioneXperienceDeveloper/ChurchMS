import { SignupWizard } from "@client/features/auth/ui/SignupWizard"

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-12">
      <div className="w-full max-w-2xl space-y-8">
        <SignupWizard />
      </div>
    </div>
  )
}
