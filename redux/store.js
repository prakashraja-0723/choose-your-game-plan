import { createStore } from "@reduxjs/toolkit";
import {reducer} from "@/redux/reducer";

export const store = createStore(reducer)
