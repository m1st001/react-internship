import { types } from "mobx-state-tree";

const FormStore = types
  .model({
    email: types.string,
    password: types.string,
  })
  .actions((self) => ({
    setEmail(newEmail: string) {
      self.email = newEmail;
    },
    setPassword(newPassword: string) {
      self.password = newPassword;
    },
  }));

export const store = FormStore.create({
  email: "",
  password: "",
});
