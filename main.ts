export const authService = {
  async confirmEmail(code: string, email: string): Promise<boolean> {
    let user = await usersRepository.findByLoginOrEmail(email);
    if (!user) {
      return false;
    }
    if (user.canBeConfirmed()) {
      let result = await usersRepository.updateConfirmation(user._id);
      return result;
    }
    return false;
  },
};

export type UserAccountDbMethodsType = {
  canBeConfirmed: () => boolean;
};
