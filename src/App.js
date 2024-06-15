import CreateCustomer from "./components/CreateCustomer";
import Customer from "./components/Customer";
import AccountOperations from "./components/AccountOperations";
import BalanceDisplay from "./components/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const name = useSelector((store) => store.customer.fullName);

  return (
    <>
      <h1>🏦 The Redux Bank</h1>
      <CreateCustomer />
      {name && (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </>
  );
}

export default App;
