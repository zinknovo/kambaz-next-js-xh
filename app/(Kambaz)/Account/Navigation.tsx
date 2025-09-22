import Link from "next/link";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link href="Signin"> Signin </Link> <br />
      <Link href="Signup"> Signup </Link> <br />
      <Link href="Profile"> Profile </Link> <br />
    </div>
  );
}
