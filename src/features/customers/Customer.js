import { useSelector } from "react-redux";

function Customer() {
  // to use store now we use useSelector hook

  //we should do most manipulation in the useSelector hook
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
