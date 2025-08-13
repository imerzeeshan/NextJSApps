import { UserProfile } from "@clerk/nextjs";

export const metadata = {
  title: "ShanTech | User Profile",
  description:
    "This is a website create by Zeeshan using NextJS React Framework",
  keywords: ["imerzeeshan", "iamerzeeshan", "Zeeshan", "shan"],
  icons: {
    icon: "/icon1.svg",
  },
};

export default function UserProfilePage() {
  return (
    <div className="min-h-screen flex justify-center items-center pt-25 py-8">
      <UserProfile path="/user-profile" />
    </div>
  );
}
