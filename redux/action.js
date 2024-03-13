export const goNext = (navForm) => ({
  type: "navForm/go-next",
  payload: navForm,
});
export const goBack = (navForm) => ({
  type: "navForm/go-back",
  payload: navForm,
});
export const putUserName = (user_name) => ({
  type: "user_data/name",
  payload: user_name,
});
export const putUserEmail = (user_email) => ({
  type: "user_data/email_address",
  payload: user_email,
});
export const putUserPhoneNumber = (user_phone) => ({
  type: "user_data/phone_number",
  payload: user_phone,
});
export const printNameErrorMessage = (error_name) => ({
  type: "error_message/name",
  payload: error_name,
});
export const printEmailErrorMessage = (error_email) => ({
  type: "error_message/email_address",
  payload: error_email,
});
export const printPhoneErrorMessage = (error_phone) => ({
  type: "error_message/phone_number",
  payload: error_phone,
});
export const plan = (plan) => ({
  type: "plan",
  payload: plan,
});
export const selectedPlan = (selected_plan) => ({
  type: "selected_plan/plan_&_plan_type",
  payload: selected_plan,
});
export const selectedAddon = (addOn) => ({
  type: "selected_plan/add_on",
  payload: addOn,
});
export const addonsTotal = (total) => ({
  type: "selected_plan/addons_total",
  payload: total,
});
export const totalPrice = (total) => ({
  type: "selected_plan/total_price",
  payload: total,
});