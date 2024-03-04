import arcade from "@/app/images/icon-arcade.svg";
import advanced from "@/app/images/icon-advanced.svg";
import pro from "@/app/images/icon-pro.svg";

const plans = {
  select_plan: 1,
  Monthly_Plan: {
    arcade: {
      id: 0,
      img: arcade,
      price: 9,
      plan_name: "Arcade",
    },
    advanced: {
      id: 1,
      img: advanced,
      price: 12,
      plan_name: "Advanced",
    },
    pro: {
      id: 2,
      img: pro,
      price: 15,
      plan_name: "Pro",
    },
    select_month_plan: 1,
  },
  Yearly_Plan: {
    arcade: {
      id: 0,
      img: arcade,
      price: 90,
      plan_name: "Arcade",
      trail: "2 months free",
    },
    advanced: {
      id: 1,
      img: advanced,
      price: 120,
      plan_name: "Advanced",
      trail: "2 months free",
    },
    pro: {
      id: 2,
      img: pro,
      price: 150,
      plan_name: "Pro",
      trail: "2 months free",
    },
    select_year_plan: 1,
  },
  Monthly_Addons: {
    plan1: {
      id: 1,
      plan: "Online service",
      description: "Access to multiplayer games",
      price: 1,
      plan_type: "mo",
      checked: false,
    },
    plan2: {
      id: 2,
      plan: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
      plan_type: "mo",
      checked: false,
    },
    plan3: {
      id: 3,
      plan: "Customizable profile",
      description: "Custom theme on your profile",
      price: 2,
      plan_type: "mo",
      checked: false,
    },
  },
  Yearly_Addons: {
    plan1: {
      id: 1,
      plan: "Online service",
      description: "Access to multiplayer games",
      price: 10,
      plan_type: "yr",
      checked: false,
    },
    plan2: {
      id: 2,
      plan: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 20,
      plan_type: "yr",
      checked: false,
    },
    plan3: {
      id: 3,
      plan: "Customizable profile",
      description: "Custom theme on your profile",
      price: 20,
      plan_type: "yr",
      checked: false,
    },
  },
};

const EmptyAddon = {
  plan1: {
    plan: "",
    description: "",
    price: 0,
    plan_type: "",
    checked: false,
  },
  plan2: {
    plan: "",
    description: "",
    price: 0,
    plan_type: "",
    checked: false,
  },
  plan3: {
    plan: "",
    description: "",
    price: 0,
    plan_type: "",
    checked: false,
  },
};

const initialState = {
  pageNo: 1,
  userData: {
    user_name: "prakash",
    email_address: "phri0723@gmail.com",
    phone_number: "9655615332",
  },
  error_message: {
    error_name: "",
    error_email: "",
    error_phone: "",
  },
  plan: plans,
  selected_plan: {
    plan: {},
    plan_type: "",
    addOn: {
      plan1: {},
      plan2: {},
      plan3: {},
    },
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "navForm/go-next":
      return {
        ...state,
        pageNo: action.payload === 5 ? 1 : state.pageNo + 1,
      };
    case "navForm/go-back":
      return {
        ...state,
        pageNo: action.payload === 1 ? 1 : state.pageNo - 1,
      };
    case "user_data/name":
      return {
        ...state,
        userData: {
          ...state.userData,
          user_name: action.payload,
        },
      };
    case "user_data/email_address":
      return {
        ...state,
        userData: {
          ...state.userData,
          email_address: action.payload,
        },
      };
    case "user_data/phone_number":
      return {
        ...state,
        userData: {
          ...state.userData,
          phone_number: action.payload,
        },
      };
    case "error_message/name":
      return {
        ...state,
        error_message: {
          ...state.error_message,
          error_name: action.payload,
        },
      };
    case "error_message/email_address":
      return {
        ...state,
        error_message: {
          ...state.error_message,
          error_email: action.payload,
        },
      };
    case "error_message/phone_number":
      return {
        ...state,
        error_message: {
          ...state.error_message,
          error_phone: action.payload,
        },
      };
    case "plan":
      return {
        ...state,
        plan: {
          ...state.plan,
          Monthly_Plan: {
            ...state.plan.Monthly_Plan,
            select_month_plan: 1,
          },
          Yearly_Plan: {
            ...state.plan.Yearly_Plan,
            select_year_plan: 1,
          },
          select_plan:
            action.payload === 1 ? action.payload + 1 : action.payload - 1,
        },
        selected_plan: {
          plan: {},
          plan_type: "",
          //   action.payload === 2
          //     ? state.add-ons.Monthly_Plan.arcade.id === 0
          //       ? state.add-ons.Monthly_Plan.arcade
          //       : state.add-ons.Monthly_Plan.advanced.id === 1
          //       ? state.add-ons.Monthly_Plan.advanced
          //       : state.add-ons.Monthly_Plan.pro
          //     : action.payload === 1
          //     ? state.add-ons.Yearly_Plan.arcade.id === 0 && state.add-ons.Yearly_Plan.arcade
          //     : state.add-ons.Yearly_Plan.advanced.id === 1
          //     ? state.add-ons.Yearly_Plan.advanced
          //     : state.add-ons.Yearly_Plan.pro,
          // plan_type: action.payload === 2 ? "Monthly" : "Yearly",
        },
      };
    case "selected_plan/plan_&_plan_type":
      return {
        ...state,
        plan: {
          ...state.plan,
          select_month_plan: action.payload,
        },
        selected_plan: {
          plan:
            state.plan.select_plan === 1
              ? action.payload === 0
                ? state.plan.Monthly_Plan.arcade
                : action.payload === 2
                ? state.plan.Monthly_Plan.advanced
                : state.plan.Monthly_Plan.pro
              : action.payload === 0
              ? state.plan.Yearly_Plan.arcade
              : action.payload === 2
              ? state.plan.Yearly_Plan.advanced
              : state.plan.Yearly_Plan.pro,
          plan_type: state.plan.select_plan === 1 ? "Monthly" : "Yearly",
        },
      };
    case "selected_plan/add_on":
      return {
        ...state,
        selected_plan: {
          ...state.selected_plan,
          addOn: {
            ...state.selected_plan.addOn,
            plan1:
              action.payload.id !== 1
                ? { ...state.selected_plan.addOn.plan1 }
                : action.payload.plan_type === "mo"
                ? action.payload
                : state.plan.Yearly_Addons.plan1,
            plan2:
              action.payload.id !== 2
                ? { ...state.selected_plan.addOn.plan1 }
                : action.payload.plan_type === "mo"
                ? action.payload
                : state.plan.Yearly_Addons.plan2,
            plan3:
              action.payload.id !== 3
                ? { ...state.selected_plan.addOn.plan1 }
                : action.payload.plan_type === "mo"
                ? action.payload
                : state.plan.Yearly_Addons.plan3,
          },
        },
      };

    default:
      return state;
  }
};
