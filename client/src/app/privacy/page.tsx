import Logo from '@/components/custom/logo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Privacy() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Logo />
      </div>
      <div className='container max-w-3xl py-10'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className='prose dark:prose-invert'>
            <p className='font-bold'>Introduction</p>
            <p>
              Welcome to our platform. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our services. Please read this privacy
              policy carefully. By accessing or using our service, you
              acknowledge that you have read and understood this policy.
            </p>

            <p className='font-bold'>Information We Collect</p>
            <p>
              Personal Data: While using our service, we may ask you to provide
              certain personally identifiable information that can be used to
              contact or identify you. This may include, but is not limited to:
            </p>
            <p>• Email address</p>
            <p>• First name and last name</p>
            <p>• Phone number</p>
            <p>• Address</p>
            <p>• Usage data and cookies</p>

            <p className='font-bold'>How We Use Your Information</p>
            <p>
              We use the information we collect for various purposes, including
              to:
            </p>
            <p>• Provide and maintain our service</p>
            <p>• Notify you about changes to our service</p>
            <p>• Allow you to participate in interactive features</p>
            <p>• Provide customer support</p>
            <p>
              • Gather analysis or valuable information to improve our service
            </p>
            <p>• Monitor the usage of our service</p>
            <p>• Detect, prevent and address technical issues</p>

            <p className='font-bold'>Data Sharing and Disclosure</p>
            <p>
              We may disclose your personal information in the following
              situations:
            </p>
            <p>
              • Service Providers: We may share your data with third-party
              vendors who provide services on our behalf.
            </p>
            <p>
              • Business Transfers: In connection with any merger, sale of
              company assets, financing, or acquisition.
            </p>
            <p>
              • Legal Requirements: To comply with legal obligations, protect
              our rights, safety, and property.
            </p>

            <p className='font-bold'>Data Security</p>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal data, we cannot
              guarantee its absolute security.
            </p>

            <p className='font-bold'>Cookies and Tracking Technologies</p>
            <p>
              We use cookies and similar tracking technologies to track activity
              on our service and hold certain information. Cookies are files
              with a small amount of data which may include an anonymous unique
              identifier.
            </p>

            <p className='font-bold'>Your Data Protection Rights</p>
            <p>
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <p>• Right to access and receive a copy of your personal data</p>
            <p>• Right to rectify or update your personal data</p>
            <p>• Right to erase your personal data</p>
            <p>• Right to restrict processing of your personal data</p>
            <p>• Right to data portability</p>
            <p>• Right to object to processing of your personal data</p>

            <p className='font-bold'>Changes to This Privacy Policy</p>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date at the top of this
              Privacy Policy.
            </p>

            <p className='font-bold'>Contact Us</p>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <p>• By email: info@PrismAI.com</p>
            <p>• By visiting our contact page on the website</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
