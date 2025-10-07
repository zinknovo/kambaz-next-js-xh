import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex">
      <div>
        <AccountNavigation />
      </div>
      <div className="flex-fill p-3">
        {children}
      </div>
    </div>
  );
}