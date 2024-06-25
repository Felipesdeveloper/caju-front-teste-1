export type Props = {
  actions: [
    { text: string; type: 'rejected'; onClick(): void; isLoading: boolean },
    { text: string; type: 'approved'; onClick(): void; isLoading: boolean },
  ];
};
