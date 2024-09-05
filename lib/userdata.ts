import { create } from "zustand";

const useUserDataStore = create((set) => ({
  user: null,
  skill: null as any,
  job: null as any,
  setUser: (user: any) => set({ user }),
  setSkill: (skill: any) => set({ skill }),
  setJob: (job: any) => set({ job }),
}));

export default useUserDataStore;
