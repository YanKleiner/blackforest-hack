import Logo from '@/components/custom/logo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Terms() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Logo />
      </div>
      <div className='container max-w-3xl py-10'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className='prose dark:prose-invert'>
            <p className='font-bold'>1. Acceptance of Terms</p>
            <p>
              By accessing and using this service, you accept and agree to be
              bound by the terms and provisions of this agreement.
            </p>

            <p className='font-bold'>2. Use License</p>
            <p>
              Permission is granted to temporarily use this software for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title.
            </p>

            <p className='font-bold'>3. User Account</p>
            <p>
              To access certain features of the service, you may be required to
              create an account. You are responsible for maintaining the
              confidentiality of your account information and for all activities
              under your account.
            </p>

            <p className='font-bold'>4. User Conduct</p>
            <p>
              You agree not to use the service for any unlawful purpose or in
              any way that might harm, damage, or disparage any other party.
            </p>

            <p className='font-bold'>5. Service Modifications</p>
            <p>
              We reserve the right to modify or discontinue, temporarily or
              permanently, the service with or without notice.
            </p>

            <p className='font-bold'>6. Termination</p>
            <p>
              We may terminate your access to the service, without cause or
              notice, which may result in the forfeiture and destruction of all
              information associated with your account.
            </p>

            <p className='font-bold'>7. Limitation of Liability</p>
            <p>
              In no event shall we be liable for any indirect, incidental,
              special, consequential or punitive damages, or any loss of profits
              or revenues.
            </p>

            <p className='font-bold'>8. Governing Law</p>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law provisions.
            </p>

            <p className='font-bold'>9. Changes to Terms</p>
            <p>
              We reserve the right to modify these terms at any time. Your
              continued use of the service after any such changes constitutes
              your acceptance of the new terms.
            </p>

            <p className='font-bold'>10. Contact</p>
            <p>
              If you have any questions about these Terms, please contact us at
              support@example.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
