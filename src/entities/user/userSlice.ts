import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../data/normalized-mock";
import { type User } from "../../types/user";

type UserEntities = {
  [id: string]: User;
};

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce<UserEntities>((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById } = userSlice.selectors;

export default userSlice;
