import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  console.log(balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// OLD WAY BEFORE HOOKS
// TO CONNECT REDUX TO REACT
// WE USE CONNECT from react-redux
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
