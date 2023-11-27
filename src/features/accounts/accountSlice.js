import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  //this name gets attached with reducers name
  // and give action names as before
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      //without prepare
      // we can get only one value in the payload
      // so to get all values we do this
      //This is the cost of using an
      // opinionated approach like redux toolkit
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        //since we don't want to modify in the state we return;
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

//console.log(accountSlice);

//export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

//removing  deposit here and using our own deposit
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

// for this to work type should match with rtk made type
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  //place to do async ops
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    //console.log(converted);
    dispatch({ type: "account/deposit", payload: converted });
  };
}
export default accountSlice.reducer;
